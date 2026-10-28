import { client } from "@/sanity/lib/client"
import { getSitePaths } from "@/seo/site-routes"
import { getCanonicalUrl } from "@/seo/site-url"

export const revalidate = 3600

const sitemapQuery = `{
    "pages": *[_type == "pageSeo" && defined(path)] {
        path,
        noIndex,
        _updatedAt
    },
    "blogs": *[_type == "blog" && defined(slug.current)] | order(publishedAt desc) {
        "slug": slug.current,
        _updatedAt
    },
    "media": *[_type == "media" && addExternalLink != true && defined(slug.current) && count(content) > 0] | order(publishedAt desc) {
        "slug": slug.current,
        _updatedAt
    }
}`

function getRouteSettings(path) {
    if (path === "/") {
        return { changeFrequency: "weekly", priority: 1 }
    }

    if (path.startsWith("/legal/")) {
        return { changeFrequency: "yearly", priority: 0.3 }
    }

    if (path.startsWith("/resources/")) {
        return { changeFrequency: "weekly", priority: 0.6 }
    }

    if (path.startsWith("/company/")) {
        return { changeFrequency: "monthly", priority: 0.7 }
    }

    if (["/what-does-serve-first-do", "/eva", "/get-a-demo"].includes(path)) {
        return { changeFrequency: "monthly", priority: 0.9 }
    }

    return { changeFrequency: "monthly", priority: 0.8 }
}

function latestDate(...values) {
    const times = values.filter(Boolean).map((value) => new Date(value).getTime())

    return times.length ? new Date(Math.max(...times)) : undefined
}

export default async function sitemap() {
    const { pages = [], blogs = [], media = [] } = await client.fetch(sitemapQuery) || {}

    const pageSeo = Object.fromEntries(pages.map((page) => [page.path, page]))
    const listingUpdates = {
        "/resources/blog": latestDate(...blogs.map((post) => post._updatedAt)),
        "/resources/media": latestDate(...media.map((post) => post._updatedAt)),
    }

    const staticEntries = getSitePaths()
        .filter((path) => !pageSeo[path]?.noIndex)
        .map((path) => ({
            url: getCanonicalUrl(path),
            lastModified: latestDate(pageSeo[path]?._updatedAt, listingUpdates[path]),
            ...getRouteSettings(path),
        }))

    const blogEntries = blogs.map((post) => ({
        url: getCanonicalUrl(`/resources/blog/${post.slug}`),
        lastModified: latestDate(post._updatedAt),
        changeFrequency: "monthly",
        priority: 0.5,
    }))

    const mediaEntries = media.map((post) => ({
        url: getCanonicalUrl(`/resources/media/${post.slug}`),
        lastModified: latestDate(post._updatedAt),
        changeFrequency: "monthly",
        priority: 0.5,
    }))

    return [...staticEntries, ...blogEntries, ...mediaEntries]
}
