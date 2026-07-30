import {
    clipBoardCheckIcon,
    listIcon,
    messageChatCircleIcon,
    graphIcon,
    compareIcon,
    checkCircleBrokenIcon,
    notificationTextIcon,
    shoppingBagSimpleIcon,
    fileSearchIcon
} from "@/utils/icons";

export const featureListData = [
    {
        eyebrow: "Reputation in real time",
        title: "Respond before a review costs you a customer",
        description: "Every review across every platform is gathered and scored as it lands. Negatives are flagged the moment they appear, so the right manager can reply while the response still changes the outcome.",
        image: "/images/products/market-intelligence/review-monitoring/review-monitoring-feature-list-image.png",
        imageWidth: 768,
        imageHeight: 576,
        list: [
            {
                text: "Aggregated reviews per site",
            },
            {
                text: "Response management built in",
            },
            {
                text: "Sentiment tracking and alerts",
            },
            {
                text: "Competitor review comparison",
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
        icon: listIcon,
        eyebrow: "One feed",
        title: "Aggregated reviews per site",
        description: "See every review from across the web in one feed, grouped by site, so nothing gets missed.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: messageChatCircleIcon,
        eyebrow: "Reply in-app",
        title: "Response management built in",
        description: "Reply to reviews inside Serve First, so your team works in one place instead of every platform.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: graphIcon,
        eyebrow: "Live alerts",
        title: "Sentiment tracking and alerts",
        description: "Serve First scores every review as it lands and flags negatives at once, so you respond in time.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: compareIcon,
        eyebrow: "Against rivals",
        title: "Competitor review comparison",
        description: "Compare your review sentiment with nearby rivals, so you know where your reputation leads or trails.",
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
        description: "Reviews from every platform are captured into one feed, scored for sentiment and grouped by location.",
        image: "/images/products/market-intelligence/review-monitoring/review-monitoring-capture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Explore review capture",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "Negatives are flagged and recurring themes surfaced, so you see what is hurting reputation before it spreads.",
        image: "/images/products/market-intelligence/review-monitoring/review-monitoring-analyse.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See how analyse works",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Respond from the platform and turn repeat complaints into tasks, so the same issue stops coming back.",
        image: "/images/products/market-intelligence/review-monitoring/review-monitoring-action.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Respond and take action",
            href: "/how-it-works/action",
        }
    },
]

export const challengeFrameData = [
    {
        eyebrow: "Challenge 01",
        title: "Reviews land across platforms faster than any one team can read them.",
        subheading: "How Serve First solves it",
        description: "Serve First brings every review into one feed by site, flags the urgent ones and turns repeat complaints into tasks, so the same issue stops coming back.",
        tags: [
            {
                tag: "One review feed",
            },
            {
                tag: "Urgent flagged",
            },
            {
                tag: "Repeat issues fixed",
            },
        ]
    }
]

export const productHighlightData = [
    {
        icon: fileSearchIcon,
        eyebrow: "Competitive benchmarking",
        title: "Compare your sites with local rivals.",
        linkText: "Explore",
        link: "/products/market-intelligence/competitive-benchmarking",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Hear directly from your own customers.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: notificationTextIcon,
        eyebrow: "Helpdesk",
        title: "Turn complaints into tracked tickets.",
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
        icon: shoppingBagSimpleIcon,
        eyebrow: "Mystery shopping",
        title: "See your sites the way customers do.",
        linkText: "Explore",
        link: "/products/customer-experience/mystery-shopping",
    },
]

export const contentGridData = [
    {
        category: "By Industry",
        title: "Retail",
        description: "Track store reviews across every platform.",
        image: "/images/products/shared/retail-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/retail",
        }
    },
    {
        category: "By Industry",
        title: "Leisure & hospitality",
        description: "Protect your rating at every site.",
        image: "/images/products/shared/hospitality-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/leisure-and-hospitality",
        }
    },
    {
        category: "By Industry",
        title: "Restaurants",
        description: "Manage reviews for every restaurant.",
        image: "/images/products/shared/restaurant-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/restaurants",
        }
    },
    {
        category: "By Industry",
        title: "Healthcare",
        description: "Monitor feedback across patient-facing sites.",
        image: "/images/products/shared/healthcare-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/healthcare",
        }
    },
    {
        category: "By Industry",
        title: "Facilities management",
        description: "Track reviews across every contract you run.",
        image: "/images/products/shared/facilities-management-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/facilities-management",
        }
    },
    {
        category: "By Industry",
        title: "Venues & events",
        description: "Watch reviews for every venue and event.",
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
        question: "What is online review monitoring?",
        answer: "Online review monitoring gathers reviews from across platforms into one place, scores them and flags the ones that need attention. Serve First goes further, turning repeat complaints into tasks, so a review leads to a fix rather than just a notification."
    },
    {
        question: "Which review platforms does it cover?",
        answer: "Reviews from across your locations and platforms are brought into one feed and grouped by site, so you track every site's reputation in one place rather than logging into each platform separately."
    },
    {
        question: "How fast can we respond to a negative review?",
        answer: "Negative reviews are flagged the moment they appear and routed to the right manager, who can respond from within Serve First, so you reply while the response still changes the outcome."
    },
    {
        question: "Can we see the themes behind our rating?",
        answer: "Yes. Reviews are scored for sentiment and recurring themes are surfaced, so you can see what is driving your rating and address the cause rather than reacting review by review."
    },
    {
        question: "Does review feedback connect to operations?",
        answer: "Yes. Because monitoring sits in the same platform as tasks and audits, a recurring complaint becomes a tracked corrective action, so the same issue stops coming back."
    },
    {
        question: "Does it work across multiple sites?",
        answer: "Serve First is built for multi-site operations. Every site's reviews roll up into one operating picture, so you can compare locations, spot the ones slipping and put them right, however many you run."
    }
]