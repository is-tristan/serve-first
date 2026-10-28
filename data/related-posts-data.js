export const relatedPostsData = {
    "/products/customer-experience/feedback-terminals": {
        title: "Feedback Terminals",
        tags: ["feedback", "customer-feedback-management"],
        categories: ["customer-experience"],
        terms: ["feedback", "terminal*", "kiosk*"],
    },
    "/products/customer-experience/survey": {
        title: "Survey",
        tags: ["feedback", "customer-feedback-management"],
        categories: ["customer-experience"],
        terms: ["survey*", "feedback", "csat"],
    },
    "/products/customer-experience/mystery-shopping": {
        title: "Mystery Shopping",
        tags: ["customer", "cx"],
        categories: ["customer-experience", "retail"],
        terms: ["mystery", "shopper*", "brand*"],
    },
    "/products/market-intelligence/review-monitoring": {
        title: "Review Monitoring",
        tags: ["customer-loyalty"],
        categories: ["brand-management"],
        terms: ["review*", "reputation", "brand*"],
    },
    "/products/market-intelligence/competitive-benchmarking": {
        title: "Competitive Benchmarking",
        tags: ["data", "growth"],
        categories: ["business"],
        terms: ["benchmark*", "competit*", "insight*"],
    },
    "/products/operational-excellence/audits": {
        title: "Audits",
        tags: ["audits", "audit-compliance", "food-safety-audit", "operational-compliance"],
        categories: ["compliance", "food-safety", "health-and-safety"],
        terms: ["audit*", "compliance", "inspection*"],
    },
    "/products/operational-excellence/task-management": {
        title: "Task Management",
        tags: ["operational-compliance"],
        categories: ["facilities-management"],
        terms: ["task*", "action*", "consistency"],
    },
    "/products/operational-excellence/helpdesk": {
        title: "Helpdesk",
        tags: ["customer-feedback-management"],
        categories: ["customer-experience"],
        terms: ["complaint*", "helpdesk", "issue*"],
    },
    "/products/operational-excellence/knowledge-base": {
        title: "Knowledge Base",
        tags: [],
        categories: ["human-resources"],
        terms: ["training", "staff", "standards", "knowledge"],
    },
    "/products/operational-excellence/martyns-law": {
        title: "Martyn's Law",
        tags: ["martyns-law", "compliance"],
        categories: ["compliance", "health-and-safety"],
        terms: ["martyn*", "safety", "venue*"],
    },
    "/how-it-works/capture": {
        title: "How It Works: Capture",
        tags: ["feedback", "customer-feedback-management", "data"],
        categories: ["customer-experience"],
        terms: ["feedback", "survey*", "capture"],
    },
    "/how-it-works/analyse": {
        title: "How It Works: Analyse",
        tags: ["data", "cx"],
        categories: ["artificial-intelligence"],
        terms: ["insight*", "data", "analy*"],
    },
    "/how-it-works/action": {
        title: "How It Works: Action",
        tags: ["operational-compliance"],
        categories: ["facilities-management"],
        terms: ["action*", "loop", "fix*"],
    },
}

export const relatedPageOptions = Object.entries(relatedPostsData).map(([value, page]) => ({
    title: page.title,
    value,
}))
