const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.servefirst.co.uk"

function absoluteUrl(path) {

    if (!path || path === "/") {

        return `${siteUrl}/`

    }

    return `${siteUrl}${path}`

}

function serviceSchema({ name, path, description }) {

    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        url: absoluteUrl(path),
        description,
        provider: {
            "@type": "Organization",
            name: "Serve First",
        },
        areaServed: {
            "@type": "Country",
            name: "United Kingdom",
        },
    }

}

function webPageSchema({ type = "WebPage", name, path, description }) {

    return {
        "@context": "https://schema.org",
        "@type": type,
        name,
        url: absoluteUrl(path),
        description,
    }

}

function breadcrumbSchema(crumbs) {

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: absoluteUrl(crumb.path),
        })),
    }

}

function definePage({ type = "WebPage", name, path, description, crumbs }) {

    const primary = type === "Service"
        ? serviceSchema({ name, path, description })
        : webPageSchema({ type, name, path, description })

    return {
        primary,
        breadcrumb: breadcrumbSchema(crumbs),
    }

}

export function getOrganizationSchema() {

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Serve First",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/serve-first-logo.svg"),
        description: "AI-driven customer experience platform that unifies reviews, surveys and receipts into real-time operational intelligence.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Milton Keynes",
            addressCountry: "GB",
        },
        email: "info@servefirst.co.uk",
        sameAs: [
            "https://www.facebook.com/servefirstcx",
            "https://www.instagram.com/servefirstcx",
            "https://www.linkedin.com/company/serve-first-cx",
        ],
    }

}

export function getSoftwareApplicationSchema() {

    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Serve First",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web-based",
        url: absoluteUrl("/"),
        description: "Serve First connects customer, operational and market signals across every site, then turns them into the actions that put things right.",
        offers: {
            "@type": "Offer",
            priceCurrency: "GBP",
            price: "0",
            description: "Book a demo for custom pricing",
        },
        provider: {
            "@type": "Organization",
            name: "Serve First",
        },
    }

}

export const pageSchemaData = {
    "/products/operational-excellence/audits": definePage({
        type: "Service",
        name: "Audits",
        path: "/products/operational-excellence/audits",
        description: "Digital audit and inspection software that scores every site against your standards and turns failed checks into corrective actions.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/operational-excellence" },
            { name: "Audits", path: "/products/operational-excellence/audits" },
        ],
    }),
    "/products/operational-excellence/task-management": definePage({
        type: "Service",
        name: "Task Management",
        path: "/products/operational-excellence/task-management",
        description: "Route every failed check and issue to an owner and track it through to completion across all your sites.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/operational-excellence" },
            { name: "Task Management", path: "/products/operational-excellence/task-management" },
        ],
    }),
    "/products/operational-excellence/helpdesk": definePage({
        type: "Service",
        name: "Helpdesk",
        path: "/products/operational-excellence/helpdesk",
        description: "Log, manage and resolve operational issues in one place across your entire estate.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/operational-excellence" },
            { name: "Helpdesk", path: "/products/operational-excellence/helpdesk" },
        ],
    }),
    "/products/operational-excellence/knowledge-base": definePage({
        type: "Service",
        name: "Knowledge Base",
        path: "/products/operational-excellence/knowledge-base",
        description: "Keep your operating standards and documentation where your teams can find them.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/operational-excellence" },
            { name: "Knowledge Base", path: "/products/operational-excellence/knowledge-base" },
        ],
    }),
    "/products/operational-excellence/martyns-law": definePage({
        type: "WebPage",
        name: "Martyn's Law",
        path: "/products/operational-excellence/martyns-law",
        description: "A fast, 60-second Martyn's Law risk assessment for venues.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/operational-excellence" },
            { name: "Martyn's Law", path: "/products/operational-excellence/martyns-law" },
        ],
    }),
    "/products/customer-experience/survey": definePage({
        type: "Service",
        name: "Survey",
        path: "/products/customer-experience/survey",
        description: "Capture customer feedback across every channel and turn it into actionable insight.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/customer-experience" },
            { name: "Survey", path: "/products/customer-experience/survey" },
        ],
    }),
    "/products/customer-experience/feedback-terminals": definePage({
        type: "Service",
        name: "Feedback Terminals",
        path: "/products/customer-experience/feedback-terminals",
        description: "Smiley-face feedback terminals and buttons that capture customer sentiment instantly, in any location.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/customer-experience" },
            { name: "Feedback Terminals", path: "/products/customer-experience/feedback-terminals" },
        ],
    }),
    "/products/customer-experience/client-connect": definePage({
        type: "Service",
        name: "Client Connect",
        path: "/products/customer-experience/client-connect",
        description: "Automate B2B feedback, relationships and NPS with an enterprise feedback management system.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/customer-experience" },
            { name: "Client Connect", path: "/products/customer-experience/client-connect" },
        ],
    }),
    "/products/customer-experience/mystery-shopping": definePage({
        type: "Service",
        name: "Mystery Shopping",
        path: "/products/customer-experience/mystery-shopping",
        description: "AI-powered mystery shopping programmes that assess the retail moments that matter.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/customer-experience" },
            { name: "Mystery Shopping", path: "/products/customer-experience/mystery-shopping" },
        ],
    }),
    "/products/market-intelligence/competitive-benchmarking": definePage({
        type: "Service",
        name: "Competitive Benchmarking",
        path: "/products/market-intelligence/competitive-benchmarking",
        description: "See how your sites perform against competitors and industry standards.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/market-intelligence" },
            { name: "Competitive Benchmarking", path: "/products/market-intelligence/competitive-benchmarking" },
        ],
    }),
    "/products/market-intelligence/review-monitoring": definePage({
        type: "Service",
        name: "Review Monitoring",
        path: "/products/market-intelligence/review-monitoring",
        description: "Monitor and respond to customer reviews across every platform in one place.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/market-intelligence" },
            { name: "Review Monitoring", path: "/products/market-intelligence/review-monitoring" },
        ],
    }),
    "/how-it-works/capture": definePage({
        type: "WebPage",
        name: "Capture",
        path: "/how-it-works/capture",
        description: "Bring every customer signal into one place, from feedback terminals and surveys to reviews and audits.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "How It Works", path: "/how-it-works/capture" },
            { name: "Capture", path: "/how-it-works/capture" },
        ],
    }),
    "/how-it-works/analyse": definePage({
        type: "WebPage",
        name: "Analyse",
        path: "/how-it-works/analyse",
        description: "EVA reads it all as it lands, scoring sentiment and surfacing the themes that matter.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "How It Works", path: "/how-it-works/analyse" },
            { name: "Analyse", path: "/how-it-works/analyse" },
        ],
    }),
    "/how-it-works/action": definePage({
        type: "WebPage",
        name: "Action",
        path: "/how-it-works/action",
        description: "Turn insight into outcomes with routing fixes, raising tasks and closing the loop.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "How It Works", path: "/how-it-works/action" },
            { name: "Action", path: "/how-it-works/action" },
        ],
    }),
    "/eva": definePage({
        type: "WebPage",
        name: "EVA",
        path: "/eva",
        description: "Ask EVA which of your sites are slipping and get a clear, evidence-backed answer.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "EVA", path: "/eva" },
        ],
    }),
    "/solutions/by-industry/retail": definePage({
        type: "Service",
        name: "Retail",
        path: "/solutions/by-industry/retail",
        description: "Hold every store to the same standard with retail analytics and audit tools.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Retail", path: "/solutions/by-industry/retail" },
        ],
    }),
    "/solutions/by-industry/leisure-and-hospitality": definePage({
        type: "Service",
        name: "Leisure & Hospitality",
        path: "/solutions/by-industry/leisure-and-hospitality",
        description: "Audit guest standards at every site with intuitive guest experience software.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Leisure & Hospitality", path: "/solutions/by-industry/leisure-and-hospitality" },
        ],
    }),
    "/solutions/by-industry/restaurants": definePage({
        type: "Service",
        name: "Restaurants",
        path: "/solutions/by-industry/restaurants",
        description: "Run food safety checks and audits at every restaurant location.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Restaurants", path: "/solutions/by-industry/restaurants" },
        ],
    }),
    "/solutions/by-industry/healthcare": definePage({
        type: "Service",
        name: "Healthcare",
        path: "/solutions/by-industry/healthcare",
        description: "Evidence care standards and measure patient satisfaction at every site.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Healthcare", path: "/solutions/by-industry/healthcare" },
        ],
    }),
    "/solutions/by-industry/facilities-management": definePage({
        type: "Service",
        name: "Facilities Management",
        path: "/solutions/by-industry/facilities-management",
        description: "Score every contract against its SLA with facilities management software and audits.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Facilities Management", path: "/solutions/by-industry/facilities-management" },
        ],
    }),
    "/solutions/by-industry/venues-and-events": definePage({
        type: "Service",
        name: "Venues & Events",
        path: "/solutions/by-industry/venues-and-events",
        description: "Run safety and readiness checks per venue across your events.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Venues & Events", path: "/solutions/by-industry/venues-and-events" },
        ],
    }),
    "/solutions/by-role/cx-leaders": definePage({
        type: "WebPage",
        name: "CX Leaders",
        path: "/solutions/by-role/cx-leaders",
        description: "Turn customer experience data into action across every location you run.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "CX Leaders", path: "/solutions/by-role/cx-leaders" },
        ],
    }),
    "/solutions/by-role/operations-directors": definePage({
        type: "WebPage",
        name: "Operations Directors",
        path: "/solutions/by-role/operations-directors",
        description: "Hold every site to a single operating standard with real-time visibility.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Operations Directors", path: "/solutions/by-role/operations-directors" },
        ],
    }),
    "/solutions/by-role/compliance-managers": definePage({
        type: "WebPage",
        name: "Compliance Manager",
        path: "/solutions/by-role/compliance-managers",
        description: "Evidence compliance across every site with a full, timestamped audit trail.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Compliance Manager", path: "/solutions/by-role/compliance-managers" },
        ],
    }),
    "/solutions/by-challenge/inconsistent-standards": definePage({
        type: "WebPage",
        name: "Inconsistent Standards",
        path: "/solutions/by-challenge/inconsistent-standards",
        description: "Hold every site to the same standard with digital audits and corrective actions.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Inconsistent Standards", path: "/solutions/by-challenge/inconsistent-standards" },
        ],
    }),
    "/solutions/by-challenge/siloed-tools-and-data": definePage({
        type: "WebPage",
        name: "Siloed Tools & Data",
        path: "/solutions/by-challenge/siloed-tools-and-data",
        description: "Bring every customer and operational signal into one picture.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Siloed Tools & Data", path: "/solutions/by-challenge/siloed-tools-and-data" },
        ],
    }),
    "/solutions/by-challenge/prove-improvement": definePage({
        type: "WebPage",
        name: "Prove Improvement",
        path: "/solutions/by-challenge/prove-improvement",
        description: "Show the difference you have made with clear, evidence-backed reporting.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Prove Improvement", path: "/solutions/by-challenge/prove-improvement" },
        ],
    }),
    "/solutions/by-challenge/data-to-action": definePage({
        type: "WebPage",
        name: "Data To Action",
        path: "/solutions/by-challenge/data-to-action",
        description: "Make every insight a tracked fix across your entire estate.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "Data To Action", path: "/solutions/by-challenge/data-to-action" },
        ],
    }),
    "/what-does-serve-first-do": definePage({
        type: "WebPage",
        name: "What Does Serve First Do",
        path: "/what-does-serve-first-do",
        description: "Serve First connects customer, operational and market signals across every site, then turns them into the actions that put things right.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "What Does Serve First Do", path: "/what-does-serve-first-do" },
        ],
    }),
    "/company/about": definePage({
        type: "AboutPage",
        name: "About Us",
        path: "/company/about",
        description: "Serve First is built for the people who serve, helping multi-site operators turn every customer signal into action.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Company", path: "/company/about" },
            { name: "About Us", path: "/company/about" },
        ],
    }),
    "/company/contact-us": definePage({
        type: "ContactPage",
        name: "Contact Us",
        path: "/company/contact-us",
        description: "Get in touch with the Serve First team.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Company", path: "/company/about" },
            { name: "Contact Us", path: "/company/contact-us" },
        ],
    }),
    "/resources/blog": definePage({
        type: "WebPage",
        name: "Blog",
        path: "/resources/blog",
        description: "Practical thinking on customer experience, operations and multi-site intelligence.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources/blog" },
            { name: "Blog", path: "/resources/blog" },
        ],
    }),
    "/resources/media": definePage({
        type: "WebPage",
        name: "Media / News",
        path: "/resources/media",
        description: "Company news, product releases and the milestones behind Serve First.",
        crumbs: [
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources/media" },
            { name: "Media", path: "/resources/media" },
        ],
    }),
}

export function getPageSchema(path) {

    const page = pageSchemaData[path]

    if (!page) {

        return []

    }

    return [page.primary, page.breadcrumb]

}

export function getBlogPostBreadcrumbSchema({ title, slug }) {

    return breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources/blog" },
        { name: "Blog", path: "/resources/blog" },
        { name: title, path: `/resources/blog/${slug}` },
    ])

}
