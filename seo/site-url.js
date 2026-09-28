const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.servefirst.ai"

export function getCanonicalSiteUrl() {
    return configuredSiteUrl
        .replace(/^http:\/\//, "https://")
        .replace("://servefirst.ai", "://www.servefirst.ai")
        .replace(/\/$/, "")
}
