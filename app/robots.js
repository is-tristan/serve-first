import { getCanonicalSiteUrl } from "@/seo/site-url"

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${getCanonicalSiteUrl()}/sitemap.xml`,
    }
}
