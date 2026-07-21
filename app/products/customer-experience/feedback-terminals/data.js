import {
    fingerPrintIcon,
    bellRingingIcon,
    layoutIcon,
    noWifiIcon,
    notificationTextIcon,
    clipBoardCheckIcon,
    shoppingBagSimpleIcon,
    messageSmileSquareIcon,
    fileCheckIcon
} from "@/utils/icons";

export const roleContextData = [
    {
        icon: fingerPrintIcon,
        eyebrow: "On-site kiosks",
        title: "Touchscreen kiosks on site",
        description: "Branded touchscreens sit at the point of experience, so customers rate a visit in seconds while it is fresh.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: bellRingingIcon,
        eyebrow: "Instant alerts",
        title: "Real-time alerts on low scores",
        description: "A low score raises an alert and a task at once, so a manager steps in before the customer leaves.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: noWifiIcon,
        eyebrow: "Offline Ready",
        title: "Offline capture with auto-sync",
        description: "Terminals keep capturing when the connection drops and sync when it returns, so no site is a blind spot.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: layoutIcon,
        eyebrow: "Your Brand",
        title: "Your branding, your questions",
        description: "Carry your branding and your own questions, so the experience feels like yours and asks what matters.",
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
        description: "Branded terminals capture honest, in-the-moment reactions at every location, syncing in real time even offline.",
        image: "/images/products/customer-experience/feedback-terminals/feedback-terminals-capture.png",
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
        description: "Every response is scored and themed as it lands, so sentiment shifts show up the moment they start, not at month end.",
        image: "/images/products/customer-experience/feedback-terminals/feedback-terminals-analyse.png",
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
        description: "Low scores trigger alerts and tasks, and Serve First routes each fix to the right manager while the customer still cares.",
        image: "/images/products/customer-experience/feedback-terminals/feedback-terminals-action.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Turn answers into action",
            href: "/how-it-works/action",
        }
    },
]

export const challengeFrameData = [
    {
        eyebrow: "Challenge 01",
        title: "Customers rate you at the door, but the signal fades before anyone responds.",
        subheading: "How Serve First solves it",
        description: "Serve First captures each terminal score in real time and routes the low ones to the right manager as a task, so a poor visit is put right while the customer still cares.",
        tags: [
            {
                tag: "Real-time capture",
            },
            {
                tag: "Low-score alerts",
            },
            {
                tag: "Routed to a manager",
            },
        ]
    }
]

export const productHighlightData = [
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Reach customers on web, email and SMS.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
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
]

export const contentGridData = [
    {
        category: "By Industry",
        title: "Retail",
        description: "Capture in-store reactions at every till and exit.",
        image: "/images/products/shared/retail-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/retail",
        }
    },
    {
        category: "By Industry",
        title: "Leisure & hospitality",
        description: "Catch guest sentiment on site, before they leave.",
        image: "/images/products/shared/hospitality-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/leisure-and-hospitality",
        }
    },
    {
        category: "By Industry",
        title: "Restaurants",
        description: "Read service in the moment, table to door.",
        image: "/images/products/shared/restaurant-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/restaurants",
        }
    },
    {
        category: "By Industry",
        title: "Healthcare",
        description: "Capture patient and visitor feedback on site.",
        image: "/images/products/shared/healthcare-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/healthcare",
        }
    },
    {
        category: "By Industry",
        title: "Facilities management",
        description: "Gauge satisfaction at every site you manage.",
        image: "/images/products/shared/facilities-management-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/facilities-management",
        }
    },
    {
        category: "By Industry",
        title: "Venues & events",
        description: "Capture crowd feedback live at every event.",
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

export const testimonialData = [
    {
        rating: 5,
        name: "Emma Bijker",
        position: "Senior Customer Experience & Training Specialist, The Body Shop",
        quote: "Serve First has transformed how we manage customer experience, giving us clear insights that have driven tangible results for our business.",
    }
]

export const faqData = [
    {
        question: "What are customer feedback terminals?",
        answer: "Feedback terminals are branded touchscreen kiosks placed at the point of experience, so customers rate a visit in seconds while it is fresh. Every response syncs to your dashboard in real time and the low scores trigger a fix, not just a record."
    },
    {
        question: "Do the terminals work offline?",
        answer: "Yes. Terminals keep capturing responses when the connection drops and sync automatically once it returns, so no site is ever a blind spot and you do not lose feedback on a busy day."
    },
    {
        question: "What happens when a customer leaves a low score?",
        answer: "A low score triggers an alert and a task, and Serve First routes it to the right manager while the customer still cares, so a poor experience is put right quickly rather than read about weeks later."
    },
    {
        question: "Can we brand the terminals and set our own questions?",
        answer: "Yes. The terminals carry your branding and your questions, so the experience feels like yours and you ask exactly what matters at each location."
    },
    {
        question: "How does terminal feedback connect to the operation?",
        answer: "Because terminals sit in the same platform as audits, tasks and your other signals, an in-the-moment score and the site behind it appear together, and the fix is routed to an owner and tracked to proof of completion."
    },
    {
        question: "Does it work across multiple sites?",
        answer: "Serve First is built for multi-site operations. Every terminal reports into one operating picture, so you can compare locations, see where scores are slipping and put them right, however many sites you run."
    }
]