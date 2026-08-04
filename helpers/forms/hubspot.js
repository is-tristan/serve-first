const allowedFormIds = [
    "6c85505f-8f36-4de2-8618-47a73caf8144",
    "3db08222-428e-47e7-895d-8a82a8c99686",
];

const skippedFields = new Set(["hubspot-form-id", "pageUri", "pageName", "terms", "name"]);

const hubspotApiBaseUrl = "https://api-eu1.hubapi.com";

function buildProperties(formData) {
    const properties = {};

    for (const [name, value] of formData.entries()) {
        if (skippedFields.has(name) || value === "" || value == null) {
            continue;
        }

        properties[name] = String(value);
    }

    return properties;
}

export async function POST(request) {
    const hubspotApiKey = process.env.HUBSPOT_API_KEY;

    if (!hubspotApiKey) {
        return Response.json(
            { success: false, message: "HubSpot API key is not configured." },
            { status: 500 },
        );
    }

    let formData;

    try {
        formData = await request.formData();
    } catch {
        return Response.json(
            { success: false, message: "Invalid form submission." },
            { status: 400 },
        );
    }

    const formGuid = formData.get("hubspot-form-id");

    if (!formGuid || !allowedFormIds.includes(String(formGuid))) {
        return Response.json(
            { success: false, message: "Invalid HubSpot form ID." },
            { status: 400 },
        );
    }

    const properties = buildProperties(formData);
    properties.channel_source = "Organic - Website";
    properties.channel_source_detail = process.env.NEXT_PUBLIC_SITE_URL;

    if (!properties.email && !properties.firstname && !properties.lastname) {
        return Response.json(
            { success: false, message: "A contact email or name is required." },
            { status: 400 },
        );
    }

    const payload = {
        properties,
    };

    let hubspotResponse = await fetch(`${hubspotApiBaseUrl}/crm/v3/objects/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify(payload),
    });

    let hubspotData = null;

    try {
        hubspotData = await hubspotResponse.json();
    } catch {
        hubspotData = null;
    }

    if (hubspotResponse.status === 409 && properties.email) {
        hubspotResponse = await fetch(
            `${hubspotApiBaseUrl}/crm/v3/objects/contacts/${encodeURIComponent(properties.email)}?idProperty=email`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${hubspotApiKey}`,
                },
                body: JSON.stringify(payload),
            },
        );

        try {
            hubspotData = await hubspotResponse.json();
        } catch {
            hubspotData = null;
        }
    }

    if (!hubspotResponse.ok) {
        return Response.json(
            {
                success: false,
                message: "There was an error submitting your request. Please try again.",
                errors: hubspotData || null,
            },
            { status: hubspotResponse.status },
        );
    }

    return Response.json({
        success: true,
        ...hubspotData,
    });
}
