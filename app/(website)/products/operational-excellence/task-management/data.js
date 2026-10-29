import {
    clipBoardCheckIcon,
    clockCheckIcon,
    mapMarkerAltIcon,
    alertHexagonIcon,
    listIcon,
    messageSmileSquareIcon,
    fileCheckIcon,
    notificationTextIcon,
    usersIcon
} from "@/utils/icons";

export const featureListData = [
    {
        eyebrow: "Action, with accountability",
        title: "Tasks the frontline actually finish",
        description: "Create a task from a low score, a failed audit or a ticket, assign it by location and team, and follow it to done. Overdue alerts keep long-running issues visible instead of quietly slipping.",
        image: "/images/products/operational-excellence/task-management/task-management-feature-list-image.png",
        imageWidth: 768,
        imageHeight: 768,
        list: [
            {
                text: "Assign by location and by team",
            },
            {
                text: "Set priorities and deadlines",
            },
            {
                text: "Live task progress tracking",
            },
            {
                text: "Automatic overdue task alerts",
            },
        ],
        button: {
            text: "See it in action",
            href: "/how-it-works/analyze",
        }
    }
]

export const roleContextData = [
    {
        icon: mapMarkerAltIcon,
        eyebrow: "By location and team",
        title: "Assign by location and team",
        description: "Assign each task by location and team, so every location knows what it owns and nothing sits with nobody.",
    },
    {
        icon: clockCheckIcon,
        eyebrow: "Priorities",
        title: "Set priorities and deadlines",
        description: "Set a priority and deadline on every task, so the key fixes stay clear and time-bound, not lost.",
    },
    {
        icon: listIcon,
        eyebrow: "Live tracking",
        title: "Live task progress tracking",
        description: "See progress across every location in one view, so you know what is open and where follow-through lags.",
    },
    {
        icon: alertHexagonIcon,
        eyebrow: "Overdue alerts",
        title: "Automatic overdue alerts",
        description: "Overdue alerts surface tasks that stall, so a long-running issue gets chased automatically.",
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Tasks are captured from feedback, audits and tickets, so action follows insight without anything slipping.",
        image: "/images/products/operational-excellence/task-management/task-management-capture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Explore task capture",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyze",
        description: "Each task is prioritized and assigned by location and team, with progress visible across your whole business.",
        image: "/images/products/operational-excellence/task-management/task-management-analyse.png",
        imageWidth: 768,
        imageHeight: 768,
        button: {
            text: "See how work is analyzed",
            href: "/how-it-works/analyze",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Track every task through to done, with overdue alerts that keep long-running issues from going quiet.",
        image: "/images/products/operational-excellence/task-management/task-management-action.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Drive tasks to action",
            href: "/how-it-works/action",
        }
    },
]

export const challengeFrameData = [
    {
        eyebrow: "Challenge 01",
        title: "Problems get spotted, but the fix has no owner, no deadline and no proof.",
        subheading: "How Serve First solves it",
        description: "Serve First turns every signal into a task with an owner and a deadline, tracked to proof of completion, so insight becomes the work that gets done.",
        tags: [
            {
                tag: "Owner and deadline",
            },
            {
                tag: "Tracked to done",
            },
            {
                tag: "Proof of completion",
            },
        ]
    }
]

export const productHighlightData = [
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Turn failed checks into tasks.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: notificationTextIcon,
        eyebrow: "Helpdesk",
        title: "Resolve issues in one tracked place.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Turn feedback into tracked action.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Review monitoring",
        title: "Turn complaints into tracked fixes.",
        linkText: "Explore",
        link: "/products/market-intelligence/review-monitoring",
    },
    {
        icon: usersIcon,
        eyebrow: "Knowledge Base",
        title: "Link guidance to the task itself.",
        linkText: "Explore",
        link: "/products/operational-excellence/knowledge-base",
    },
]

export const contentGridData = [
    {
        category: "By Industry",
        title: "Retail",
        description: "Drive store fixes through to done.",
        image: "/images/products/shared/retail-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/retail",
        }
    },
    {
        category: "By Industry",
        title: "Leisure & hospitality",
        description: "Route guest fixes to the right team.",
        image: "/images/products/shared/hospitality-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/leisure-and-hospitality",
        }
    },
    {
        category: "By Industry",
        title: "Restaurants",
        description: "Close restaurant actions every shift.",
        image: "/images/products/shared/restaurant-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/restaurants",
        }
    },
    {
        category: "By Industry",
        title: "Healthcare",
        description: "Track corrective actions at every location.",
        image: "/images/products/shared/healthcare-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/healthcare",
        }
    },
    {
        category: "By Industry",
        title: "Facilities management",
        description: "Route contract actions to an owner.",
        image: "/images/products/shared/facilities-management-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/facilities-management",
        }
    },
    {
        category: "By Industry",
        title: "Venues & events",
        description: "Drive venue actions through to done.",
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
        description: "Hold every location to the same standard.",
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
        question: "What is task management software?",
        answer: "Task management software routes the right action to the right person, with deadlines, ownership and progress you can see. Serve First creates tasks from feedback, audits and tickets, so insight becomes tracked action rather than a note that goes nowhere.",
    },
    {
        question: "Where do tasks come from?",
        answer: "A task can be created from a low score, a failed audit or a ticket, so the signal that flags a problem also raises the action, with no re-entering data between tools."
    },
    {
        question: "How are tasks assigned?",
        answer: "Tasks are assigned by location and team, with priorities and deadlines, so each location knows what it owns and the work is never sitting with nobody."
    },
    {
        question: "How do we stop tasks going quiet?",
        answer: "Automatic overdue alerts keep long-running issues visible, so a task that stalls is surfaced rather than quietly slipping off the list."
    },
    {
        question: "Can we see progress across all your locations?",
        answer: "Yes. Live progress is visible across every location in one operating picture, so you can see what is done, what is open and where follow-through is lagging."
    },
    {
        question: "Does it work across multiple locations?",
        answer: "Serve First is built for multi-location operations. Every task rolls up into one operating picture, so action is tracked to done across your whole business, however many locations you run."
    }
]