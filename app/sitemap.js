import { client } from "@/sanity/lib/client"
import { getCanonicalSiteUrl } from "@/seo/seo-map-data"

const staticRoutes = [
    {
        path: "/",
        changeFrequency: "weekly",
        priority: 1,
    },
    {
        path: "/what-does-serve-first-do",
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        path: "/eva",
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        path: "/get-a-demo",
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        path: "/company",
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        path: "/company/about",
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        path: "/company/contact-us",
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        path: "/resources",
        changeFrequency: "weekly",
        priority: 0.6,
    },
    {
        path: "/resources/blog",
        changeFrequency: "weekly",
        priority: 0.6,
    },
    {
        path: "/resources/media",
        changeFrequency: "weekly",
        priority: 0.6,
    },
    {
        path: "/solutions",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-role",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-role/cx-leaders",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-role/operations-directors",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-role/compliance-managers",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-industry",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-industry/retail",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-industry/leisure-and-hospitality",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-industry/restaurants",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-industry/healthcare",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-industry/facilities-management",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-industry/venues-and-events",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-challenge",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-challenge/inconsistent-standards",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-challenge/siloed-tools-and-data",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-challenge/prove-improvement",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/solutions/by-challenge/data-to-action",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/customer-experience",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/customer-experience/feedback-terminals",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/customer-experience/survey",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/customer-experience/mystery-shopping",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/customer-experience/client-connect",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/market-intelligence",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/market-intelligence/review-monitoring",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/market-intelligence/competitive-benchmarking",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/operational-excellence",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/operational-excellence/audits",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/operational-excellence/task-management",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/operational-excellence/helpdesk",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/operational-excellence/knowledge-base",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/products/operational-excellence/martyns-law",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/how-it-works",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/how-it-works/capture",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/how-it-works/analyse",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/how-it-works/action",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/coming-soon",
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        path: "/legal",
        changeFrequency: "yearly",
        priority: 0.3,
    },
    {
        path: "/legal/cookie-policy",
        changeFrequency: "yearly",
        priority: 0.3,
    },
    {
        path: "/legal/privacy-policy",
        changeFrequency: "yearly",
        priority: 0.3,
    },
    {
        path: "/legal/accessibility",
        changeFrequency: "yearly",
        priority: 0.3,
    },
]

async function getBlogSitemapEntries(siteUrl) {
    const posts = await client.fetch(`
        *[_type == "blog" && defined(slug.current)] {
            "slug": slug.current,
            publishedAt,
            _updatedAt
        }
    `)

    return (posts || []).map((post) => ({
        url: `${siteUrl}/resources/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt || post._updatedAt || Date.now()),
        changeFrequency: "monthly",
        priority: 0.5,
    }))
}

export default async function sitemap() {
    const siteUrl = getCanonicalSiteUrl()

    const staticEntries = staticRoutes.map((route) => ({
        url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))

    const blogEntries = await getBlogSitemapEntries(siteUrl)

    return [...staticEntries, ...blogEntries]
}
