import {
    fileCheckIcon,
    usersIcon,
    aiIcon,
    checkCircleBrokenIcon,
    chartBreakoutIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "01 | Site Audits",
        title: "Audits, issues and SLAs sit in different tools, so proving performance is slow.",
        description: "Serve First brings audits, issues and outcomes into one operating picture per contract, so the proof is in one place rather than scattered across tools.",
        tags: []
    },
    {
        eyebrow: "02 | Issue Resolution",
        title: "Clients want evidence the SLA was met, not a promise that it was.",
        description: "Every audit and issue is tracked to proof of completion, so you can show a client exactly what was done, by whom and when, for any site.",
        tags: []
    },
    {
        eyebrow: "03 | Proof of completion",
        title: "An issue is logged on-site, then stalls without an owner or a deadline.",
        description: "Helpdesk and Task management route each job to an owner with a due date and track it to done, so nothing is lost between sites.",
        tags: []
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Site audits and helpdesk capture how every site is running against each SLA, with issues logged as they happen.",
        image: "/images/solutions/by-industry/facilities-management/fm-capture.png",
        button: {
            text: "Explore capture",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyze",
        description: "Every contract is scored in one operating picture, with EVA flagging the sites and SLAs that are at risk.",
        image: "/images/solutions/by-industry/facilities-management/fm-analyse.png",
        button: {
            text: "See the analysis",
            href: "/how-it-works/analyze",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Failed checks and logged issues raise tasks routed to an owner and tracked to proof of completion, ready to share with the client.",
        image: "/images/solutions/by-industry/facilities-management/fm-action.png",
        button: {
            text: "Drive it to done",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Run site checks against every SLA.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: chartBreakoutIcon,
        eyebrow: "Helpdesk",
        title: "Log and resolve issues in one place.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Route every job to an owner, to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: aiIcon,
        eyebrow: "EVA",
        title: "Ask how contracts are doing, get actions.",
        linkText: "Meet EVA",
        link: "/eva",
    },
    {
        icon: usersIcon,
        eyebrow: "Knowledge Base",
        title: "Keep site procedures in one place.",
        linkText: "Explore",
        link: "/products/operational-excellence/knowledge-base",
    },
]

export const moduleStatsData = [
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "3",
        numberSuffix: "x",
        description: "Faster issue resolution",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "197",
        numberSuffix: "%",
        description: "Net revenue retention",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "143",
        numberSuffix: "%",
        description: "ARR growth",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "91",
        numberSuffix: "%",
        description: "Survey response rate",
    }
]


export const contentGridData = [
    {
        title: "Inconsistent standards",
        description: "Hold every site to the same standard.",
        image: "/images/solutions/by-industry/retail/Inconsistent_standards_across_locations_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/inconsistent-standards",
        }
    },
    {
        title: "Siloed tools and data",
        description: "Bring every signal into one picture.",
        image: "/images/solutions/by-industry/retail/Too_many_tools_and_siloed_data_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/siloed-tools-and-data",
        }
    },
    {
        title: "Prove improvement",
        description: "Show the difference with evidence.",
        image: "/images/solutions/by-industry/retail/Struggling_to_prove_improvement_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/prove-improvement",
        }
    },
    {
        title: "Turn data into action",
        description: "Turn each finding into a routed, tracked corrective action.",
        image: "/images/solutions/by-industry/retail/data_that_never_leads_to_action_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/data-to-action",
        }
    },
]

export const faqData = [
    {
        question: "What is facilities management software?",
        answer: "Facilities management software helps facilities providers run site audits, log and resolve issues and prove performance to clients across every contract. Serve First ties each check and issue to proof of completion and brings it into one operating picture you can share, so SLAs are documented rather than asserted.",
    },
    {
        question: "How does it help prove SLAs to clients?",
        answer: "Every audit and issue is tracked to proof of completion, with timestamps and sign-offs, so you can show a client exactly what was done, by whom and when, for any site and any period, without assembling it by hand."
    },
    {
        question: "Can it handle issues across many sites?",
        answer: "Yes. Helpdesk logs and tracks every issue in one place and Task management routes the work to an owner with a due date, so nothing is lost between sites and the status is visible across the contract."
    },
    {
        question: "Does it replace separate reporting tools?",
        answer: "Outcome tracking is built in. You see SLA performance, completion and trends in one operating picture, with proof of completion behind every fix, so a separate reporting tool isn't needed."
    },
    {
        question: "How does it help with SLA compliance across contracts?",
        answer: "Each contract is scored against its SLAs in one operating picture, with EVA flagging the sites and SLAs at risk, so you fix a shortfall before it becomes a breach rather than finding out at the review."
    },
    {
        question: "Can it improve how we report to clients?",
        answer: "Yes. Because every audit and issue is tied to proof of completion, a client report is a view of what already happened, the checks, the issues and the fixes, ready to share rather than assembled by hand each month."
    }
]