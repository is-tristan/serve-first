import {
    checkCircleBrokenIcon,
    fileCheckIcon,
    usersCheckIcon,
    usersIcon,
    usersUpIcon,
    notificationTextIcon,
    messageSmileSquareIcon,
    aiIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "01 | Plenty of dashboards",
        title: "You have no shortage of dashboards, and no shortage of unread reports.",
        description: "EVA reads each signal and names the next action, with the location and the reason, so insight arrives ready to use, not waiting to be interpreted.",
        tags: [
            {
                tag: "System of action",
            },
        ]
    },
    {
        eyebrow: "02 | Insight stalls",
        title: "Insight stalls because the fix has no owner, no task and no due date.",
        description: "Every signal becomes a task routed to the person who can resolve it, with a due date and proof of completion, so the doing actually happens.",
        tags: [
            {
                tag: "Routed to an owner",
            },
        ]
    },
    {
        eyebrow: "03 | No action",
        title: "Issues get reported, closed on paper, then reappear a month later.",
        description: "Helpdesk and Task management track each issue to done, with the record kept, so a fix is verified rather than assumed and repeats are visible.",
        tags: [
            {
                tag: "Proof of completion",
            },
        ]
    }
]

export const roleContextData = [
    {
        icon: usersIcon,
        title: "Operations directors",
        description: "Failed checks become corrective tasks with owners and due dates, closed and verified.",
        button: {
            text: "For ops directors",
            href: "/solutions/by-role/operations-directors",
        }
    },
    {
        icon: usersUpIcon,
        title: "CX leaders",
        description: "Customer issues route straight to the location that can fix them, tracked through to done.",
        button: {
            text: "For CX leaders",
            href: "/solutions/by-role/cx-leaders",
        }
    },
    {
        icon: usersCheckIcon,
        title: "Compliance managers",
        description: "Gaps raise corrective actions automatically, so nothing stays open or undocumented.",
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
        description: "Every customer and operational signal is captured in one place, so nothing worth resolving is lost in a dashboard.",
        image: "/images/solutions/by-challenge/data-to-action/data-to-action-capture.png",
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
        description: "EVA reads each signal and names the next action, with the location and the reason, so no one digs to know what to do.",
        image: "/images/solutions/by-challenge/data-to-action/data-to-action-analyse.png",
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
        description: "Tasks route to the right owner and Helpdesk resolves the rest, every one tracked to proof of completion.",
        image: "/images/solutions/by-challenge/data-to-action/data-to-action-action.png",
        imageWidth: 768,
        imageHeight: 512,
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
        title: "Names the next action, with the reason.",
        linkText: "Meet EVA",
        link: "/eva",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Route every action to an owner, to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: notificationTextIcon,
        eyebrow: "Helpdesk",
        title: "Resolve issues in one tracked place.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
    },
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Turn failed checks into corrective action.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Review monitoring",
        title: "Turn review themes into tracked fixes.",
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

export const faqData = [
    {
        question: "How do you turn data into action?",
        answer: "By making the action the unit of work, not the report. When a signal needs attention, Serve First turns it into a task with an owner, a due date and proof of completion, so the path from insight to fix is built into the platform rather than left to follow-up emails."
    },
    {
        question: "What does closing the loop mean?",
        answer: "It means an issue is captured, resolved and verified, with the customer or location outcome recorded at the end. Nothing is closed on paper alone: the loop ends when the fix is verified, not when the report is filed."
    },
    {
        question: "Can EVA answer questions across all the data?",
        answer: "Yes. EVA reads across your signals and answers in plain language, so you can ask how a region is doing or which locations are slipping and get the answer with the cause behind it, in seconds."
    },
    {
        question: "Who decides what the next action is?",
        answer: "Failed checks raise corrective tasks automatically against your standards, and EVA recommends the next actions with the reason behind them, shaped by role. Your team stays in control of what is assigned and to whom."
    },
    {
        question: "How is this different from a BI dashboard?",
        answer: "A dashboard shows you the problem and stops. Serve First is a system of action: the same signal that draws the chart also raises the task, routes it to an owner and tracks it to proof of completion, so the chart and the fix are never separated."
    },
    {
        question: "What is a system of action?",
        answer: "A system of action doesn't stop at showing you the data. Every signal becomes the next action, routed to an owner with a due date and tracked to proof of completion, so insight reliably ends in a fix rather than sitting in a report."
    },
    {
        question: "How does it fit with our existing dashboards?",
        answer: "Serve First gives you the operating picture and, crucially, turns what it shows into routed, tracked action. Where you keep other dashboards, it adds the missing step: the fix, owned and documented, rather than another view to read."
    }
]