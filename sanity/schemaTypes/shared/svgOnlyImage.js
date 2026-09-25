export const svgOnlyOptions = {
    accept: "image/svg+xml",
}

export const svgOnlyValidation = (rule) =>
    rule.required().custom(async (value, context) => {
        if (!value?.asset?._ref) {
            return "Required"
        }

        const client = context.getClient({ apiVersion: "2025-03-01" })
        const mimeType = await client.fetch(
            `*[_id == $id][0].mimeType`,
            { id: value.asset._ref }
        )

        if (mimeType !== "image/svg+xml") {
            return "Only SVG files are allowed"
        }

        return true
    })
