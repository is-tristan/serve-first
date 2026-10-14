import { getPageSeo } from "@/sanity/lib/queries"
import { getCanonicalSiteUrl } from "@/seo/site-url"

const fallbackDescription = "Serve First connects customer, operational and market signals across every location, then turns them into the actions that fix them."

export async function getPageMetadata(path) {
    const siteUrl = getCanonicalSiteUrl()
    const canonicalPath = path === "/" ? "" : path
    const canonicalUrl = `${siteUrl}${canonicalPath}`

    let page = null

    try {
        page = await getPageSeo(path)
    } catch (error) {
        console.error("Page SEO fetch failed", error)
    }

    if (!page) {
        return {
            title: "Serve First",
            description: fallbackDescription,
            metadataBase: new URL(siteUrl),
            alternates: {
                canonical: canonicalUrl,
            },
        }
    }

    const title = page.title || "Serve First"
    const description = page.description

    const metadata = {
        title,
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
        },
        twitter: {
            title,
        },
    }

    if (description) {
        metadata.description = description
        metadata.openGraph.description = description
        metadata.twitter.description = description
    }

    if (page.keywords?.length) {
        metadata.keywords = page.keywords
    }

    if (page.noIndex) {
        metadata.robots = "noindex"
    }

    return metadata
}
