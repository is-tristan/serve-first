import {
    calendarCheckIcon,
    layoutIcon,
    shieldTick,
    graphIcon,
    checkCircleBrokenIcon,
    clipBoardCheckIcon,
    notificationTextIcon,
    messageSmileSquareIcon,
    fileCheckIcon
} from "@/utils/icons";

export const featureListData = [
    {
        eyebrow: "Built for B2B accounts",
        title: "Feedback your account teams can use",
        description: "Choose the contacts, set the cadence and send. Every invitation is tracked from delivery to response, and the data lands in the same dashboards your account teams already work from each week.",
        image: "/images/products/customer-experience/client-connect/client-connect-feature-list-image.png",
        imageWidth: 768,
        imageHeight: 576,
        list: [
            {
                text: "Branded review invitations",
            },
            {
                text: "Tracked send and delivery",
            },
            {
                text: "Scheduled review cycles per account",
            },
            {
                text: "Unsubscribe and repeat guards",
            },
        ],
        button: {
            text: "See it in action",
            href: "/how-it-works/analyse",
        }
    }
]

export const roleContextData = [
    {
        icon: layoutIcon,
        eyebrow: "Branded invites",
        title: "Branded review invitations",
        description: "Send branded invitations to your B2B contacts, so the request feels part of the account relationship.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: graphIcon,
        eyebrow: "Tracked sends",
        title: "Tracked send and delivery",
        description: "Track every invitation from delivery to response, so you always know who has replied and who to chase.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: calendarCheckIcon,
        eyebrow: "Set cadence",
        title: "Review cycles per account",
        description: "Set a cadence per account, monthly, quarterly or annual, so feedback fits each client relationship.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: shieldTick,
        eyebrow: "Safe sending",
        title: "Unsubscribe and repeat guards",
        description: "Guard contacts from over-emailing with unsubscribe and repeat limits, so programmes stay welcome.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Send branded review invitations to your B2B clients on a set cadence, with every send tracked end to end.",
        image: "/images/products/customer-experience/client-connect/client-connect-capture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See how we close it",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "Responses return as structured data, with completion rates and trends on the Client Connect dashboard.",
        image: "/images/products/customer-experience/client-connect/client-connect-analyse.png",
        imageWidth: 768,
        imageHeight: 768,
        button: {
            text: "See how we close it",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Serve First flags accounts at risk early and hands your team the Voice-of-Customer evidence to take back to the client.",
        image: "/images/products/customer-experience/client-connect/client-connect-action.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See how we close it",
            href: "/how-it-works/action",
        }
    },
]

export const challengeFrameData = [
    {
        eyebrow: "Challenge 01",
        title: "You hear what clients think, but not next to what you actually delivered.",
        subheading: "How Serve First solves it",
        description: "Serve First sits client feedback beside the audits, tickets and KPIs for that account, so you see the cause behind a score and protect the contract before renewal.",
        tags: [
            {
                tag: "Feedback by account",
            },
            {
                tag: "Beside delivery",
            },
            {
                tag: "Renewal risk flagged",
            },
        ]
    }
]

export const productHighlightData = [
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Run CSAT and NPS across every site.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Score standards at every location.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: notificationTextIcon,
        eyebrow: "Helpdesk",
        title: "Log and resolve issues in one place.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Route every fix to an owner, to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Review monitoring",
        title: "Track public reviews across the web.",
        linkText: "Explore",
        link: "/products/market-intelligence/review-monitoring",
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
            text: "Fix inconsistent standards",
            href: "/solutions/by-challenge/inconsistent-standards",
        }
    },
    {
        title: "Siloed tools and data",
        description: "Bring every signal into one picture.",
        image: "/images/solutions/by-industry/retail/Too_many_tools_and_siloed_data_icon.svg",
        button: {
            text: "Connect your data",
            href: "/solutions/by-challenge/siloed-tools-and-data",
        }
    },
    {
        title: "Prove improvement",
        description: "Show the difference with evidence.",
        image: "/images/solutions/by-industry/retail/Struggling_to_prove_improvement_icon.svg",
        button: {
            text: "See how to prove it",
            href: "/solutions/by-challenge/prove-improvement",
        }
    },
    {
        title: "Turn data into action",
        description: "Turn each finding into a routed, tracked corrective action.",
        image: "/images/solutions/by-industry/retail/data_that_never_leads_to_action_icon.svg",
        button: {
            text: "Turn data into action",
            href: "/solutions/by-challenge/data-to-action",
        }
    },
]

export const faqData = [
    {
        question: "What is Client Connect?",
        answer: "Client Connect is a B2B client feedback tool built into Serve First. Account and customer success teams use it to send structured review invitations to their clients and see the responses sit alongside the operational data already in the platform, so feedback connects to what was actually delivered."
    },
    {
        question: "How is it different from a standalone feedback tool?",
        answer: "A standalone tool tells you what a client thinks. Client Connect shows what they think next to your audits, tickets and KPIs, so you can see the cause behind the score. It runs in the platform your team already uses, with no second login and no integration to maintain."
    },
    {
        question: "Who is Client Connect for?",
        answer: "It is built for B2B service businesses where the client relationship is contract-driven, multi-stakeholder and renewable. The day-to-day users are account managers, customer success leads and operations directors who own client relationships and need something they can run themselves."
    },
    {
        question: "Can we collect feedback from more than one contact per client?",
        answer: "Yes. You manage clients and contacts in a lightweight CRM view and can weight responses by seniority, so you hear from every stakeholder who shapes the relationship, not just a single contact, and a client with many sites still rolls up to one account view."
    },
    {
        question: "How often can we send reviews?",
        answer: "On whatever cadence suits the relationship: monthly performance check-ins, quarterly business reviews, annual relationship reviews or an ad hoc post-meeting survey. Sends can be scheduled and recur per contract, and every invitation is tracked from draft through to response."
    },
    {
        question: "How is Client Connect priced?",
        answer: "Client Connect is priced per contract, not per location, per user or per response, which matches the way the relationships you are protecting actually renew. Talk to us for current pricing and the tier that fits the number of contracts you manage."
    }
]