export const lpFeaturedListData = [
    {
        eyebrow: "The follow-up gap",
        title: "Most complaints get read. Few get resolved",
        image: "/images/lp/helpdesk/lp-helpdesk-list-item-image.png",
        imagePosition: "left",
        imageWidth: 640,
        imageHeight: 640,
        descriptionNegative: "Feedback lands in one tool, emails in a shared inbox, audit failures in a spreadsheet. Nobody knows who's on it, and the customer hears nothing back.",
        listNegative: [
            {
                text: "Complaints lost in shared inboxes",
            },
            {
                text: "No owner, no deadline, no follow-up",
            },
            {
                text: "No record of what was said or done",
            },
        ],
        descriptionPositive: "One helpdesk, built into the platform.",
        listPositive: [
            {
                text: "Every issue becomes a ticket with an owner",
            },
            {
                text: "Faster replies with AI-drafted responses",
            },
            {
                text: "Full history on every ticket, ready for reporting",
            },
        ],
        button: {
            text: null,
            href: null,
            target: null,
        }
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Tickets open automatically from survey responses, low ratings, and failed audits, or from customer emails and texts.",
        image: "/images/lp/helpdesk/lp-helpdesk-capture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Show me",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyze",
        description: "Each ticket goes to the right team based on location and survey, so managers only see what's theirs.",
        image: "/images/lp/helpdesk/lp-helpdesk-analyse.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Show me",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Reply by email or SMS with AI-drafted responses, add internal notes, and track every ticket until it's resolved.",
        image: "/images/lp/helpdesk/lp-helpdesk-action.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Show me",
            href: "/how-it-works/action",
        }
    },
]

export const lpFeaturedListData2 = [
    {
        eyebrow: "Why operations teams choose Helpdesk",
        title: "Every issue owned. Every customer answered",
        image: "/images/lp/helpdesk/lp-helpdesk-list-item-image-2.png",
        imageSizing: "contain",
        imageWidth: 768,
        imageHeight: 768,
        listNegative: [],
        descriptionPositive: "Built into Serve First, so every ticket knows which location, survey, and customer it came from.",
        listPositive: [
            {
                text: "One inbox for every customer issue",
                iconColor: "var(--primary)",
            },
            {
                text: "AI-drafted replies based on your knowledge base",
                iconColor: "var(--primary)",
            },
            {
                text: "Email and SMS from the same screen",
                iconColor: "var(--primary)",
            },
            {
                text: "Internal notes and @mentions",
                iconColor: "var(--primary)",
            },
            {
                text: "Suggested articles and follow-up tasks on every ticket",
                iconColor: "var(--primary)",
            },
            {
                text: "Reporting by manager, category, and status",
                iconColor: "var(--primary)",
            },
        ],
        button: {
            text: "Get a demo",
            href: "/get-a-demo",
        }
    }
]


export const faqData = [
    {
        question: "Do customers have to contact us differently?",
        answer: "No. They keep using the email addresses they already know. Helpdesk adds owners, structure, and reporting behind them."
    },
    {
        question: "Can different teams have their own view?",
        answer: "Yes. Each team sees only its own tickets, whether that's operations, billing, or supply chain."
    },
    {
        question: "Do AI replies go out automatically?",
        answer: "No. AI drafts the reply from the conversation and your knowledge base, and your team edits it before sending."
    },
    {
        question: "Is there an audit trail?",
        answer: "Yes. Every email, text, note, and status change is logged against the ticket."
    }
]
