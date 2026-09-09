import {
    dataFlowIcon,
    announcementIcon,
    layoutIcon,
    graphIcon,
    checkCircleBrokenIcon,
    messageAlertSquareIcon,
    shoppingBagSimpleIcon,
    messageSmileSquareIcon,
    fileCheckIcon
} from "@/utils/icons";

export const featureListData = [
    {
        eyebrow: "One builder, every channel",
        title: "Surveys that fit how customers respond",
        description: "Build a survey once and Serve First fits it to each channel. Logic branching keeps it short for the customer, and sentiment analysis reads every answer so your team starts from insight, not raw data.",
        image: "/images/products/customer-experience/survey/survey-feature-list-image.png",
        imageWidth: 768,
        imageHeight: 576,
        list: [
            {
                text: "Custom templates and branding",
            },
            {
                text: "Logic branching keeps it short",
            },
            {
                text: "Web, kiosk, email and SMS",
            },
            {
                text: "Real-time results and sentiment",
            },
        ],
        button: {
            text: "See it in action",
            href: "/how-it-works/analyse",
        }
    }
]

export const challengeFrameData = [
    {
        eyebrow: "Challenge 01",
        title: "You run surveys and watch the scores, but the causes never reach the floor.",
        subheading: "How Serve First solves it",
        description: "Serve First scores every response as it lands and routes the cause to the right site as a task, so a falling score becomes a fix you can track, not another chart.",
        tags: [
            {
                tag: "Live response scoring",
            },
            {
                tag: "Cause by site",
            },
            {
                tag: "Tracked follow-up",
            },
        ]
    }
]

export const roleContextData = [
    {
        icon: layoutIcon,
        eyebrow: "Templates",
        title: "Custom templates and branding",
        description: "Shape every question to your brand and start from a template, so each survey looks like yours.",
    },
    {
        icon: dataFlowIcon,
        eyebrow: "Smart Logic",
        title: "Logic branching keeps it short",
        description: "Customers answer only what applies to them, which keeps surveys short and lifts completion.",
    },
    {
        icon: announcementIcon,
        eyebrow: "Every Channel",
        title: "Web, kiosk, email and SMS",
        description: "Build a survey once and send it across web, kiosk, email and SMS, reaching customers where they are.",
    },
    {
        icon: graphIcon,
        eyebrow: "Live Sentiment",
        title: "Live results and sentiment",
        description: "Responses stream in live and score sentiment as they land, so themes surface the same day.",
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Surveys capture responses across web, kiosk, email and SMS, on whatever channel each customer prefers to use.",
        image: "/images/products/customer-experience/survey/survey-capture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Explore survey capture",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "Results stream in live with sentiment scoring, so the themes worth acting on surface as the answers arrive.",
        image: "/images/products/customer-experience/survey/survey-analyse.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See the analysis",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Insights route into tasks and follow-ups, so what customers tell you turns into action the same day.",
        image: "/images/products/customer-experience/survey/survey-action.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Turn answers into action",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: messageAlertSquareIcon,
        eyebrow: "Feedback terminals",
        title: "Capture on-site reactions in the moment.",
        linkText: "Explore",
        link: "/products/customer-experience/feedback-terminals",
    },
    {
        icon: shoppingBagSimpleIcon,
        eyebrow: "Mystery shopping",
        title: "See your sites the way customers do.",
        linkText: "Explore",
        link: "/products/customer-experience/mystery-shopping",
    },
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Review monitoring",
        title: "Track public reviews across the web.",
        linkText: "Explore",
        link: "/products/market-intelligence/review-monitoring",
    },
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Turn failed checks into corrective action.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Route every fix to an owner, to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
]

export const contentGridData = [
    {
        category: "By Industry",
        title: "Retail",
        description: "Measure CSAT and NPS across every store.",
        image: "/images/products/shared/retail-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/retail",
        }
    },
    {
        category: "By Industry",
        title: "Leisure & hospitality",
        description: "Hear from guests at every site and shift.",
        image: "/images/products/shared/hospitality-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/leisure-and-hospitality",
        }
    },
    {
        category: "By Industry",
        title: "Restaurants",
        description: "Track guest satisfaction across every restaurant.",
        image: "/images/products/shared/restaurant-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/restaurants",
        }
    },
    {
        category: "By Industry",
        title: "Healthcare",
        description: "Capture patient feedback at every location.",
        image: "/images/products/shared/healthcare-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/healthcare",
        }
    },
    {
        category: "By Industry",
        title: "Facilities management",
        description: "Survey occupants across every contract you hold.",
        image: "/images/products/shared/facilities-management-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/facilities-management",
        }
    },
    {
        category: "By Industry",
        title: "Venues & events",
        description: "Survey guests across every venue and event.",
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
        question: "What is customer survey software?",
        answer: "Customer survey software lets you build a survey once and send it across the channels your customers use, then turns the responses into structured insight. Serve First goes further, routing what you learn into tasks so a survey leads to action, not just a results screen."
    },
    {
        question: "Which channels can I run surveys on?",
        answer: "Web, kiosk, email and SMS, from one builder. You design the survey once and Serve First fits it to each channel, so you reach customers wherever they are without rebuilding it for every format."
    },
    {
        question: "Can surveys adapt to each respondent?",
        answer: "Yes. Logic branching shows each customer only the questions that apply to them, which keeps the survey short, lifts completion rates and gives you cleaner data to work from."
    },
    {
        question: "How quickly do results come back?",
        answer: "Responses stream in live, with sentiment scoring applied as each answer lands, so the themes worth attention surface the same day rather than at the end of a reporting cycle."
    },
    {
        question: "Does survey feedback connect to operations?",
        answer: "Yes. Because surveys sit in the same platform as audits, tasks and the rest of your operation, a drop in a score and the site behind it appear together, and the follow-up is routed to an owner and tracked."
    },
    {
        question: "Does it work across multiple sites?",
        answer: "Serve First is built for multi-site operations. Survey results roll up into one operating picture, so you can compare locations, spot the ones slipping and put them right, however many sites you run."
    }
]