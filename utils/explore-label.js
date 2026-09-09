const PROPER_NAMES = new Set(["client connect"])

export function formatExploreName(name) {
    if (!name) {
        return ""
    }

    const normalized = String(name).replace(/&/g, "and").trim()
    const lower = normalized.toLowerCase()

    if (PROPER_NAMES.has(lower)) {
        return "Client Connect"
    }

    return lower
}

export function exploreLabel(name, linkText = "Explore") {
    if (!linkText || linkText === "Explore") {
        const formatted = formatExploreName(name)

        return formatted ? `Explore ${formatted}` : "Explore"
    }

    if (/^Explore\s+/i.test(linkText)) {
        const rest = linkText.replace(/^Explore\s+/i, "")

        return `Explore ${formatExploreName(rest)}`
    }

    return linkText
}
