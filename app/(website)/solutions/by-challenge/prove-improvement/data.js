import {
    checkCircleBrokenIcon,
    fileCheckIcon,
    usersCheckIcon,
    usersIcon,
    usersUpIcon,
    chartBreakoutIcon,
    clipBoardCheckIcon,
    aiIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "01 | Improvement summary",
        title: "The numbers moved, but you can't show what actually drove the change.",
        description: "Serve First links every action to the signal it came from and the outcome that followed, so EVA can show what changed, where and why, with the record behind it.",
        tags: [
            {
                tag: "Proof of completion",
            },
        ]
    },
    {
        eyebrow: "02 | Improvement stalled",
        title: "Improvement is claimed in meetings, but never backed up with a record.",
        description: "Every fix is tracked to proof of completion as the work happens, so progress is documented by default and the record builds itself, location by location.",
        tags: [
            {
                tag: "Outcome tracking",
            },
        ]
    },
    {
        eyebrow: "03 | ROI story",
        title: "When the board asks for the ROI story, pulling it together takes weeks.",
        description: "Outcome tracking is built in, with the action and the result side by side, so a board-ready answer takes minutes rather than becoming a project.",
        tags: [
            {
                tag: "EVA analysis",
            },
        ]
    }
]

export const roleContextData = [
    {
        icon: usersIcon,
        title: "Operations directors",
        description: "Show standards rising location by location, with the corrective work that drove them documented.",
        button: {
            text: "For ops directors",
            href: "/solutions/by-role/operations-directors",
        }
    },
    {
        icon: usersUpIcon,
        title: "CX leaders",
        description: "Show sentiment improving and tie it to the fixes behind it, not just the trend line.",
        button: {
            text: "For CX leaders",
            href: "/solutions/by-role/cx-leaders",
        }
    },
    {
        icon: usersCheckIcon,
        title: "Compliance managers",
        description: "Show compliance met and documented, with a complete audit trail for any location and date.",
        button: {
            text: "For compliance managers",
            href: "/solutions/by-role/compliance-managers",
        }
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Every signal and the action taken on it are captured together, so the record of what you did builds itself as you go.",
        image: "/images/solutions/by-challenge/prove-improvement/prove-improvement-capture.png",
        imageWidth: 768,
        imageHeight: 768,
        button: {
            text: "Explore",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyze",
        description: "EVA reads the trend and the actions behind it, so you see not just that a score moved but what actually moved it.",
        image: "/images/solutions/by-challenge/prove-improvement/prove-improvement-analyse.png",
        imageWidth: 768,
        imageHeight: 768,
        button: {
            text: "Explore",
            href: "/how-it-works/analyze",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Every fix is tracked to proof of completion, so improvement is proven, not just claimed, whenever anyone asks for it.",
        image: "/images/solutions/by-challenge/prove-improvement/prove-improvement-action.png",
        imageWidth: 768,
        imageHeight: 768,
        button: {
            text: "Explore",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: aiIcon,
        eyebrow: "EVA",
        title: "Ask what changed and why, in plain English.",
        linkText: "Meet EVA",
        link: "/eva",
    },
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Track standards rising location by location.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Route every action to an owner, to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Show CSAT and sentiment moving over time.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: chartBreakoutIcon,
        eyebrow: "Helpdesk",
        title: "Show resolution times improving, tracked.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
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

export const faqData = [
    {
        question: "How do you prove operational improvement?",
        answer: "By keeping the signal, the action and the outcome together. Serve First records what was found, what was done and what happened next, so improvement is a documented chain rather than a claim, for any location and any period."
    },
    {
        question: "What is proof of completion?",
        answer: "Every corrective task carries evidence that it was done, by whom and when, with photos and sign-offs where relevant. That record is what turns \"we fixed it\" into \"here is the fix, verified.\""
    },
    {
        question: "Can we show ROI to the board?",
        answer: "Yes. Because every action is tied to the outcome that followed, you can show the trend, the work behind it and the result side by side, which is the story a board actually wants to see."
    },
    {
        question: "Who decides what the next action is?",
        answer: "Failed checks raise corrective tasks automatically against your standards, and EVA recommends the next actions with the reason behind them, shaped by role. Your team stays in control of what is assigned and to whom."
    },
    {   
        question: "Does EVA explain what drove a change?",
        answer: "Yes. EVA reads the trend and the actions behind it and explains, in plain English, what moved the number, at which locations and why, so the cause is named rather than guessed."
    },
    {
        question: "How do you measure operational improvement?",
        answer: "By tying every action to the signal it came from and the outcome that followed. Serve First records what was found, what was done and what changed, so improvement is a documented chain you can measure per location and per period, not a claim."
    },
    {
        question: "Can we benchmark locations against each other?",
        answer: "Yes. Because every location is scored the same way in one operating picture, you can compare locations directly, see which are improving and which are slipping, and EVA explains what is driving the difference."
    }
]