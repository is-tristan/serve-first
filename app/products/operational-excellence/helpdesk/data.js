import {
    clipBoardCheckIcon,
    mailIconAlt,
    messageChatCircleIcon,
    aiIcon,
    clockRewindIcon,
    checkCircleBrokenIcon,
    fileCheckIcon,
    usersIcon,
    messageSmileSquareIcon
} from "@/utils/icons";

export const featureListData = [
    {
        eyebrow: "One inbox, every channel",
        title: "Replace the shared mailbox for good",
        description: "Survey responses, low ratings, failed audits and inbound messages all become tickets. Each one carries an owner, a status and a full history, so nothing slips between a busy mailbox and a busy shift.",
        image: "/images/products/operational-excellence/helpdesk/helpdesk-feature-list-image.png",
        imageWidth: 768,
        imageHeight: 576,
        list: [
            {
                text: "One unified ticket inbox view",
            },
            {
                text: "Reply by email or SMS in-app",
            },
            {
                text: "AI-drafted ticket responses",
            },
            {
                text: "Full audit trail per ticket",
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
        icon: mailIconAlt,
        eyebrow: "One inbox",
        title: "One unified ticket inbox",
        description: "Feedback, ratings, failed audits and messages all land as tickets in one inbox, so nothing slips.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: messageChatCircleIcon,
        eyebrow: "Reply in-app",
        title: "Reply by email or SMS",
        description: "Reply by email or SMS inside Serve First, so every message sends and logs against the ticket.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: aiIcon,
        eyebrow: "AI drafts",
        title: "AI-drafted responses",
        description: "AI drafts a reply for each ticket, so your team responds faster while a person controls what is sent.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: clockRewindIcon,
        eyebrow: "Full history",
        title: "Full audit trail per ticket",
        description: "Every ticket carries its full history from first contact to resolved, so you see who did what and when.",
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
        description: "Feedback, ratings, audits and inbound messages are captured as trackable tickets in one unified inbox.",
        image: "/images/products/operational-excellence/helpdesk/helpdesk-capture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Explore ticket capture",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "Each ticket carries its context and history, routed by survey and location so only the right team sees it.",
        image: "/images/products/operational-excellence/helpdesk/helpdesk-analyse.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See how issues analyse",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Reply by email or SMS with AI-drafted suggestions, then track every ticket through to resolved, fully logged.",
        image: "/images/products/operational-excellence/helpdesk/helpdesk-action.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Resolve issues in action",
            href: "/how-it-works/action",
        }
    },
]

export const challengeFrameData = [
    {
        eyebrow: "Challenge 01",
        title: "Issues arrive from every channel and slip between busy shifts and inboxes.",
        subheading: "How Serve First solves it",
        description: "Serve First turns feedback, ratings and messages into tracked tickets with an owner and a history, so every issue is routed, answered and closed in one place.",
        tags: [
            {
                tag: "One ticket inbox",
            },
            {
                tag: "Routed by site",
            },
            {
                tag: "Full history",
            },
        ]
    }
]

export const productHighlightData = [
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Turn tickets into tracked action.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Capture the feedback that raises tickets.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Turn failed checks into tickets.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: usersIcon,
        eyebrow: "Knowledge Base",
        title: "Answer tickets from your own docs.",
        linkText: "Explore",
        link: "/products/operational-excellence/knowledge-base",
    },
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Review monitoring",
        title: "Turn complaints into tracked tickets.",
        linkText: "Explore",
        link: "/products/market-intelligence/review-monitoring",
    },
]

export const contentGridData = [
    {
        category: "By Industry",
        title: "Retail",
        description: "Handle store issues in one tracked inbox.",
        image: "/images/products/shared/retail-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/retail",
        }
    },
    {
        category: "By Industry",
        title: "Leisure & hospitality",
        description: "Resolve guest issues before they escalate.",
        image: "/images/products/shared/hospitality-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/leisure-and-hospitality",
        }
    },
    {
        category: "By Industry",
        title: "Restaurants",
        description: "Track restaurant issues to resolved.",
        image: "/images/products/shared/restaurant-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/restaurants",
        }
    },
    {
        category: "By Industry",
        title: "Healthcare",
        description: "Manage patient and site issues in one place.",
        image: "/images/products/shared/healthcare-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/healthcare",
        }
    },
    {
        category: "By Industry",
        title: "Facilities management",
        description: "Log and resolve issues across every contract.",
        image: "/images/products/shared/facilities-management-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/facilities-management",
        }
    },
    {
        category: "By Industry",
        title: "Venues & events",
        description: "Handle venue issues live, tracked to done.",
        image: "/images/products/shared/venues-events-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/venues-and-events",
        }
    }
]

export const contentGridData2 = [
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
        question: "What is helpdesk software?",
        answer: "Helpdesk software turns incoming issues into trackable tickets with an owner, a status and a history. Serve First builds tickets from feedback, ratings, failed audits and messages in one inbox, so nothing slips between a busy mailbox and a busy shift."
    },
    {
        question: "What can raise a ticket?",
        answer: "Survey responses, low ratings, failed audits and inbound messages all become tickets automatically, so every issue worth resolving lands in one place rather than scattered across channels."
    },
    {
        question: "How are tickets routed to the right team?",
        answer: "Each ticket carries its context and history and is routed by survey and location, so only the right team sees it and no issue gets lost in a shared inbox."
    },
    {
        question: "Can we reply without leaving the platform?",
        answer: "Yes. You reply by email or SMS from within Serve First, with AI-drafted suggestions to speed things up, and every reply is logged against the ticket."
    },
    {
        question: "Does Helpdesk keep a record of each issue?",
        answer: "Yes. Every ticket carries a full audit trail from first contact to resolved, so you can see what happened, who handled it and how long it took."
    },
    {
        question: "Does it work across multiple sites?",
        answer: "Serve First is built for multi-site operations. Tickets from every location sit in one operating picture, so you can see resolution across the estate, however many sites you run."
    }
]