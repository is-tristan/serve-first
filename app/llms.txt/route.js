import { client } from "@/sanity/lib/client"
import { pageSchemaData } from "@/seo/schema-data"
import { getCanonicalSiteUrl } from "@/seo/site-url"

export const revalidate = 3600

const summary = "Serve First is a Customer Experience and Operational Intelligence platform for multi-location businesses. It connects customer, operational and market signals across every location, then turns them into the actions that fix them."

const details = [
    "Serve First brings customer feedback, operational standards, compliance, audits, mystery shopping and online reviews into one place, then helps teams act on what it finds with assigned tasks, workflows, training and proof of completion.",
    "The platform works on a Capture, Analyze, Action model. Capture brings together every customer, operational and market signal. Analyze finds the patterns, risks and root causes behind the data, with EVA, the built-in intelligence layer, scoring sentiment and writing plain-English summaries. Action turns insight into assigned tasks, workflows and training, with proof of completion.",
    "Serve First works with multi-location businesses in retail, leisure and hospitality, healthcare, restaurants, facilities management, and venues and events. It has offices in Alpharetta, Georgia (US) and Milton Keynes (UK), and can be reached at info@servefirst.ai.",
]

const extraPages = {
    "/": {
        name: "Home",
        description: "Overview of the Serve First platform for multi-location customer experience and operational intelligence.",
    },
    "/products/operational-excellence/vision": {
        name: "Vision",
        description: "Intelligent video analytics that check standards and spot issues across every location.",
    },
    "/get-a-demo": {
        name: "Request a demo",
        description: "Request a demo of the Serve First platform with the team.",
    },
    "/legal/privacy-policy": {
        name: "Privacy Policy",
        description: "How Serve First collects, uses and protects personal data.",
    },
    "/legal/cookie-policy": {
        name: "Cookie Policy",
        description: "How Serve First uses cookies on this website.",
    },
    "/legal/accessibility": {
        name: "Accessibility",
        description: "Serve First's accessibility statement for this website.",
    },
}

const sections = [
    {
        title: "Platform",
        paths: [
            "/",
            "/what-does-serve-first-do",
            "/eva",
            "/how-it-works/capture",
            "/how-it-works/analyze",
            "/how-it-works/action",
        ],
    },
    {
        title: "Products: Customer Experience",
        paths: [
            "/products/customer-experience/feedback-terminals",
            "/products/customer-experience/survey",
            "/products/customer-experience/mystery-shopping",
            "/products/customer-experience/client-connect",
        ],
    },
    {
        title: "Products: Operational Excellence",
        paths: [
            "/products/operational-excellence/audits",
            "/products/operational-excellence/task-management",
            "/products/operational-excellence/helpdesk",
            "/products/operational-excellence/knowledge-base",
            "/products/operational-excellence/martyns-law",
            "/products/operational-excellence/vision",
        ],
    },
    {
        title: "Products: Market Intelligence",
        paths: [
            "/products/market-intelligence/review-monitoring",
            "/products/market-intelligence/competitive-benchmarking",
        ],
    },
    {
        title: "Solutions by Industry",
        paths: [
            "/solutions/by-industry/retail",
            "/solutions/by-industry/leisure-and-hospitality",
            "/solutions/by-industry/restaurants",
            "/solutions/by-industry/healthcare",
            "/solutions/by-industry/facilities-management",
            "/solutions/by-industry/venues-and-events",
        ],
    },
    {
        title: "Solutions by Role",
        paths: [
            "/solutions/by-role/cx-leaders",
            "/solutions/by-role/operations-directors",
            "/solutions/by-role/compliance-managers",
        ],
    },
    {
        title: "Solutions by Challenge",
        paths: [
            "/solutions/by-challenge/inconsistent-standards",
            "/solutions/by-challenge/siloed-tools-and-data",
            "/solutions/by-challenge/prove-improvement",
            "/solutions/by-challenge/data-to-action",
        ],
    },
    {
        title: "Company",
        paths: [
            "/company/about",
            "/company/contact-us",
            "/get-a-demo",
        ],
    },
    {
        title: "Resources",
        paths: [
            "/resources/blog",
            "/resources/media",
        ],
    },
]

const optionalPaths = [
    "/legal/privacy-policy",
    "/legal/cookie-policy",
    "/legal/accessibility",
]

function cleanText(value) {
    return (value || "").replace(/\s+/g, " ").trim()
}

function formatLink({ name, url, description }) {
    const text = cleanText(description)

    return text ? `- [${cleanText(name)}](${url}): ${text}` : `- [${cleanText(name)}](${url})`
}

function getPageLink(siteUrl, path) {
    const page = pageSchemaData[path]?.primary || extraPages[path]

    if (!page) {
        return null
    }

    return formatLink({
        name: page.name,
        url: path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`,
        description: page.description,
    })
}

function formatSection(title, links) {
    const items = links.filter(Boolean)

    if (!items.length) {
        return null
    }

    return [`## ${title}`, ...items].join("\n")
}

async function getBlogLinks(siteUrl) {
    try {
        const posts = await client.fetch(`
            *[_type == "blog" && defined(slug.current)] | order(publishedAt desc) {
                title,
                excerpt,
                "slug": slug.current
            }
        `)

        return (posts || []).map((post) => formatLink({
            name: post.title,
            url: `${siteUrl}/resources/blog/${post.slug}`,
            description: post.excerpt,
        }))
    } catch (error) {
        console.error("llms.txt blog fetch failed", error)

        return []
    }
}

async function getMediaLinks(siteUrl) {
    try {
        const posts = await client.fetch(`
            *[_type == "media" && ((addExternalLink == false && defined(slug.current)) || (addExternalLink != false && defined(url)))] | order(publishedAt desc) {
                title,
                excerpt,
                addExternalLink,
                url,
                "slug": slug.current
            }
        `)

        return (posts || []).map((post) => formatLink({
            name: post.title,
            url: post.addExternalLink === false ? `${siteUrl}/resources/media/${post.slug}` : post.url,
            description: post.excerpt,
        }))
    } catch (error) {
        console.error("llms.txt media fetch failed", error)

        return []
    }
}

export async function GET() {
    const siteUrl = getCanonicalSiteUrl()

    const [blogLinks, mediaLinks] = await Promise.all([
        getBlogLinks(siteUrl),
        getMediaLinks(siteUrl),
    ])

    const body = [
        "# Serve First",
        `> ${summary}`,
        ...details,
        ...sections.map((section) => formatSection(section.title, section.paths.map((path) => getPageLink(siteUrl, path)))),
        formatSection("Blog Posts", blogLinks),
        formatSection("News and Media", mediaLinks),
        formatSection("Optional", optionalPaths.map((path) => getPageLink(siteUrl, path))),
    ].filter(Boolean).join("\n\n")

    return new Response(`${body}\n`, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    })
}
