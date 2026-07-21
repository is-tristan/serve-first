import {
    certificateIcon,
    bookIcon,
    routeIcon,
    checkCircleBrokenIcon,
    aiIcon,
    clipBoardCheckIcon,
    messageAlertSquareIcon,
    userRightIcon,
    messageSmileSquareIcon,
} from "@/utils/icons";

export const roleContextData = [
    {
        icon: certificateIcon,
        title: "Sentiment you can trust",
        description: "Capture honest feedback at the point of experience with Feedback terminals and Survey, across every channel.",
    },
    {
        icon: bookIcon,
        title: "The story behind the score",
        description: "EVA reads every response as it lands and tells you, in plain English, what is driving sentiment.",
    },
    {
        icon: routeIcon,
        title: "From insight to fixed",
        description: "Route each issue to the site or team that can resolve it, and track it through to done.",
    },
    {
        icon: checkCircleBrokenIcon,
        title: "Proof it improved",
        description: "See the trend move after the fix, with action and result side by side, so you can prove improvement.",
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Feedback terminals, Survey and Review monitoring capture sentiment at every site, across web, kiosk, email, SMS and reviews.",
        image: "/images/solutions/by-role/cx-leaders/cx-leaders-capture.png",
        button: {
            text: "Explore",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "EVA reads every response as it lands and tells you, in plain English, what is driving sentiment at each location.",
        image: "/images/solutions/by-role/cx-leaders/cx-leaders-analyse.png",
        button: {
            text: "Explore",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Each issue becomes a task routed to the team that owns it, tracked to proof of completion, so the loop closes.",
        image: "/images/solutions/by-role/cx-leaders/cx-leaders-action.png",
        button: {
            text: "Explore",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Reach customers on web, kiosk, email and SMS.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: messageAlertSquareIcon,
        eyebrow: "Feedback terminals",
        title: "Capture honest feedback the moment it happens.",
        linkText: "Explore",
        link: "/products/customer-experience/feedback-terminals",
    },
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Review monitoring",
        title: "Track and respond to reviews in one place.",
        linkText: "Explore",
        link: "/products/market-intelligence/review-monitoring",
    },
    {
        icon: aiIcon,
        eyebrow: "EVA AI",
        title: "Ask what your scores are really telling you.",
        linkText: "Meet EVA",
        link: "/eva",
    },
    {
        icon: userRightIcon,
        eyebrow: "Task management",
        title: "Route each issue to the right team, to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    }
]

export const moduleStatsData = [
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "100",
        numberSuffix: "%",
        description: "NPS uplift",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "95",
        numberSuffix: "%",
        description: "Response rate",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "90",
        numberSuffix: "+",
        description: "Time to resolution",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "200",
        numberSuffix: "+",
        description: "Sites improved",
    }
]

export const challengeFrameData = [
    {
        eyebrow: "01 | Lack of insight",
        title: "You have feedback from every site, but no fast way to see what is driving it.",
        description: "Serve First connects every customer signal to the operation behind it, so EVA can show the cause of each shift and route the fix to the team that owns it.",
        tags: [
            {
                tag: "Role-based actions",
            },
        ]
    },
    {
        eyebrow: "02 | Lack of accountability",
        title: "Issues get raised, but you cannot tell whether anyone actually resolved them.",
        description: "Every issue is routed to the team that owns it and tracked to proof of completion, so you can see what was done, by whom and when, at each site.",
        tags: [
            {
                tag: "Root-cause analysis",
            },
        ]
    },
    {
        eyebrow: "03 | Lack of improvement",
        title: "The board asks if experience is improving, and you can show scores, not proof.",
        description: "Serve First ties each action to the outcome that followed, so you can evidence that a fix moved the number, not just that the number moved.",
        tags: [
            {
                tag: "Proof of improvement",
            },
        ]
    }
]

export const faqData = [
    {
        question: "What is customer experience management software?",
        answer: "Customer experience management software helps you capture customer feedback and understand sentiment across every location. Serve First goes further than measuring: it connects each score to the operation behind it, names the cause with EVA and routes the fix to the right owner, so feedback ends in action, not another report."
    },
    {
        question: "How does Serve First handle multi-site customer experience?",
        answer: "Serve First is built for multi-site customer experience. Every location reports into one operating picture, so you can compare sites, see where experience is slipping and put it right, wherever they are. You manage the whole estate from one view, rather than a separate report for each site."
    },
    {
        question: "Is Serve First a customer feedback software or a survey tool?",
        answer: "Serve First is customer feedback software for multi-site operators, not just a survey tool. Feedback terminals and Survey capture feedback on web, kiosk, email and SMS, then EVA reads it and points to the next actions, so you collect feedback and close the loop in one place."
    },
    {
        question: "Does it do customer sentiment analysis and NPS?",
        answer: "Yes. EVA gives you customer sentiment analysis in plain English, telling you what is driving sentiment at each site, and Serve First works as NPS software too, measuring NPS and CSAT by location and connecting each score to the cause behind it."
    },
    {
        question: "What makes Serve First different from other customer experience management platforms?",
        answer: "Most customer experience management platforms stop at dashboards and reports. Serve First turns insight into action: every signal becomes the next action, routed to an owner and tracked to proof of completion, so you can show the board that experience improved, not just that it was measured."
    }
]