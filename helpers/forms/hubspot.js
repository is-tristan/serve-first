const allowedFormIds = [
    "6c85505f-8f36-4de2-8618-47a73caf8144",
    "3db08222-428e-47e7-895d-8a82a8c99686",
    "fefdfc04-baf0-4832-881b-ff5a47ce4a99",
];

const skippedFields = new Set([
    "hubspot-form-id",
    "terms",
    "name",
    "hutk",
    "pageUri",
    "pageName",
]);

const hubspotFormsApiBaseUrl = "https://api.hsforms.com";
const privacyConsentText = "I have read and agree to your privacy policy.";

function parseFieldName(name) {
    if (name.includes("/")) {
        const [objectTypeId, propertyName] = name.split("/");

        return {
            objectTypeId,
            name: propertyName,
        };
    }

    return {
        objectTypeId: "0-1",
        name,
    };
}

function buildFields(formData) {
    const fieldsByName = new Map();

    for (const [rawName, value] of formData.entries()) {
        if (skippedFields.has(rawName) || value === "" || value == null) {
            continue;
        }

        const { objectTypeId, name } = parseFieldName(rawName);
        const fieldKey = `${objectTypeId}/${name}`;

        fieldsByName.set(fieldKey, {
            objectTypeId,
            name,
            value: String(value),
        });
    }

    fieldsByName.set("0-1/channel_source", {
        objectTypeId: "0-1",
        name: "channel_source",
        value: "Organic - Website",
    });

    const utmSource = formData.get("utm_source");

    if (utmSource) {
        fieldsByName.set("0-1/channel_source_detail", {
            objectTypeId: "0-1",
            name: "channel_source_detail",
            value: String(utmSource),
        });
    }

    return Array.from(fieldsByName.values());
}

function buildContext(formData, request) {
    const context = {};
    const hutk = formData.get("hutk");
    const pageUri = formData.get("pageUri");
    const pageName = formData.get("pageName");
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor ? forwardedFor.split(",")[0].trim() : null;

    if (hutk) {
        context.hutk = String(hutk);
    }

    if (pageUri) {
        context.pageUri = String(pageUri);
    }

    if (pageName) {
        context.pageName = String(pageName);
    }

    if (ipAddress) {
        context.ipAddress = ipAddress;
    }

    return context;
}

export async function POST(request) {
    const hubspotApiKey = process.env.HUBSPOT_API_KEY;
    const hubspotPortalId = process.env.HUBSPOT_PORTAL_ID;

    if (!hubspotApiKey || !hubspotPortalId) {
        return Response.json(
            { success: false, message: "HubSpot is not configured." },
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

    const fields = buildFields(formData);
    const hasEmail = fields.some((field) => field.name === "email");
    const hasName = fields.some(
        (field) => field.name === "firstname" || field.name === "lastname",
    );

    if (!hasEmail && !hasName) {
        return Response.json(
            { success: false, message: "A contact email or name is required." },
            { status: 400 },
        );
    }

    const payload = {
        fields,
        context: buildContext(formData, request),
    };

    if (formData.get("terms")) {
        payload.legalConsentOptions = {
            consent: {
                consentToProcess: true,
                text: privacyConsentText,
            },
        };
    }

    const hubspotResponse = await fetch(
        `${hubspotFormsApiBaseUrl}/submissions/v3/integration/secure/submit/${hubspotPortalId}/${formGuid}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${hubspotApiKey}`,
            },
            body: JSON.stringify(payload),
        },
    );

    let hubspotData = null;

    try {
        hubspotData = await hubspotResponse.json();
    } catch {
        hubspotData = null;
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
