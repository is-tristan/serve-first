import { getPageSeo } from "@/sanity/lib/queries"
import { getCanonicalSiteUrl, getCanonicalUrl } from "@/seo/site-url"

const fallbackDescription = "Serve First connects customer, operational and market signals across every site, then turns them into the actions that put things right."

export async function getPageMetadata(path) {
    const siteUrl = getCanonicalSiteUrl()
    const alternates = path === "/" ? undefined : { canonical: getCanonicalUrl(path) }

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
            alternates,
        }
    }

    const title = page.title || "Serve First"
    const description = page.description

    const metadata = {
        title,
        metadataBase: new URL(siteUrl),
        alternates,
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

    if (page.noIndex) {
        metadata.robots = "noindex"
    }

    return metadata
}
