import {
    checkCircleBrokenIcon,
    fileCheckIcon,
    usersCheckIcon,
    usersIcon,
    usersUpIcon,
    notificationTextIcon,
    messageAlertSquareIcon,
    clipBoardIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "01 | Data is siloed",
        title: "Customer and operational data sit in different tools and different teams.",
        description: "Feedback, audits, tickets and reviews are captured into one connected platform, so every signal lands in the same place without manual exports.",
        tags: [
            {
                tag: "Connected signals",
            },
        ]
    },
    {
        eyebrow: "02 | Signals are disconnected",
        title: "Proving how the estate is doing means stitching exports together by hand.",
        description: "EVA reads across every signal and answers in plain English, so the question how are we doing takes seconds, not a week of spreadsheet work.",
        tags: [
            {
                tag: "One operating picture",
            },
        ]
    },
    {
        eyebrow: "03 | Answers are hidden",
        title: "The business is connected in real life, but disconnected in your systems.",
        description: "Serve First gives every team one operating picture, so insight routes into tasks and follow-ups instead of dying in a dashboard nobody owns.",
        tags: [
            {
                tag: "Answers in seconds",
            },
        ]
    }
]

export const roleContextData = [
    {
        icon: usersIcon,
        title: "Operations directors",
        description: "One view of audits, tasks and performance across the estate, without stitching exports together.",
        button: {
            text: "For ops directors",
            href: "/solutions/by-role/operations-directors",
        }
    },
    {
        icon: usersUpIcon,
        title: "CX Leaders",
        description: "Customer feedback connected to the operation behind it, so the cause of a dip is visible.",
        button: {
            text: "For CX leaders",
            href: "/solutions/by-role/cx-leaders",
        }
    },
    {
        icon: usersCheckIcon,
        title: "Compliance managers",
        description: "Evidence and checks in the same platform as the work, so nothing lives in a separate tool.",
        button: {
            text: "For compliance managers",
            href: "/solutions/by-role/compliance-manager",
        }
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Feedback, audits, reviews and tickets are captured into one connected platform, with no manual collation between systems.",
        image: "/images/solutions/by-challenge/siloed-tools-and-data/siloed_tools_and_data_how_it_works_01_multi-source_one_platform.png",
        button: {
            text: "Explore",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "EVA reads across every signal and gives you one operating picture, so a plain answer to how are we doing is always ready.",
        image: "/images/solutions/by-challenge/siloed-tools-and-data/siloed_tools_and_data_how_it_works_02_eva_ai_estate_overview.png",
        button: {
            text: "Explore",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Insights route into tasks and follow-ups, tracked to done, so a single view turns into action, not another report.",
        image: "/images/solutions/by-challenge/siloed-tools-and-data/siloed_tools_and_data_how_it_works_03_insights_actionable_plans.png",
        button: {
            text: "Explore",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Bring site checks into the same picture.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Turn what you see into tracked action.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: notificationTextIcon,
        eyebrow: "Helpdesk",
        title: "Keep every issue in one tracked place.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
    },
    {
        icon: messageAlertSquareIcon,
        eyebrow: "Feedback terminals",
        title: "Capture feedback into the same platform.",
        linkText: "Explore",
        link: "/products/customer-experience/feedback-terminals",
    },
    {
        icon: clipBoardIcon,
        eyebrow: "Knowledge Base",
        title: "Measure CSAT by site, in the same picture.",
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
        description: "Net Revenue Retention",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "143",
        numberSuffix: "%",
        description: "ARR Growth",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "91",
        numberSuffix: "%",
        description: "Survey response rate",
    }
]

export const faqData = [
    {
        question: "How do you connect siloed data sources?",
        answer: "Serve First captures customer and operational signals, feedback, audits, tickets and reviews, into one connected platform, so they are joined at the source rather than stitched together in spreadsheets afterwards. Every site reports into the same operating picture."
    },
    {
        question: "What does one operating picture mean?",
        answer: "It means customer experience and operational performance sit in one view, by site, so a drop in satisfaction and the standard behind it appear side by side. Everyone works from the same truth instead of arguing about whose export is right."
    },
    {
        question: "Can EVA answer questions across all the data?",
        answer: "Yes. EVA reads across your signals and answers in plain language, so you can ask how a region is doing or which sites are slipping and get the answer with the cause behind it, in seconds."
    },
    {
        question: "How is this different from a reporting tool?",
        answer: "A reporting tool stops at the chart. Serve First is a system of action: every insight routes into a task with an owner and proof of completion, so the single view leads to a fix rather than another report."
    },
    {   
        question: "What is a single view of operations?",
        answer: "It is one operating picture that brings customer and operational signals together by site, so feedback, audits, tickets and reviews sit in the same place. Everyone works from the same source rather than exporting from separate tools and reconciling by hand."
    },
    {
        question: "Do we have to replace our existing tools?",
        answer: "Serve First brings the signals that matter into one operating picture so teams work from a single view. Where it replaces overlapping point tools that is a saving, but the goal is one connected place to see and resolve, not another silo."
    }
]