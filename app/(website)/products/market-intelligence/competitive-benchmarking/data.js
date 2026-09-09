import {
    clipBoardCheckIcon,
    userCheckIcon,
    messageChatCircleIcon,
    lineGapIcon,
    chartBreakoutIcon,
    checkCircleBrokenIcon,
    shoppingBagSimpleIcon,
    fileCheckIcon,
    messageSmileSquareIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "Challenge 01",
        title: "How Serve First solves it",
        description: "Serve First reads the public reviews for your sites and their local rivals, scores them the same way, and shows the gap for every location, so you can see exactly who you are losing to and what to put right.",
        tags: [
            {
                tag: "Compared site by site",
            },
            {
                tag: "Based on real reviews",
            },
            {
                tag: "The reason, not just the score",
            },
        ]
    }
]

export const featureListData = [
    {
        eyebrow: "What you get",
        title: "A clear read on every local market",
        description: "In one view you see how each site rates against the rivals near it, what those rivals do well, and where the gap is widest, so you know where to focus first.",
        image: "/images/products/market-intelligence/competitive-benchmarking/competitive-benchmarking-feature-list-image.png",
        imageWidth: 768,
        imageHeight: 576,
        list: [
            {
                text: "Your score next to theirs",
            },
            {
                text: "The rivals near each site",
            },
            {
                text: "What customers praise and complain about",
            },
            {
                text: "Where the gap is biggest",
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
        icon: userCheckIcon,
        eyebrow: "Local rivals",
        title: "Finds your real rivals",
        description: "Serve First finds the rivals genuinely near each site and after the same customers, not a national average.",
    },
    {
        icon: messageChatCircleIcon,
        eyebrow: "Review sentiment",
        title: "Reads words, not stars",
        description: "Serve First reads every public review and scores how people feel, so a four-star dip cannot slip by.",
    },
    {
        icon: lineGapIcon,
        eyebrow: "The gap",
        title: "Shows what drives the gap",
        description: "Serve First groups reviews into topics like service and wait times, so you see what wins or loses custom.",
    },
    {
        icon: chartBreakoutIcon,
        eyebrow: "Always current",
        title: "Updates every month",
        description: "Serve First refreshes the comparison every month, so you hold a current read on each market, never stale.",
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Serve First finds the rivals near each site and collects their public reviews automatically, every month.",
        image: "/images/products/market-intelligence/competitive-benchmarking/competitive-benchmarking-capture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See how capture works",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "It scores sentiment and topics for you and your rivals, so you see how you compare and what is behind the gap, location by location.",
        image: "/images/products/market-intelligence/competitive-benchmarking/competitive-benchmarking-analyse.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See how analysis works",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "The gaps become tasks and training for each site, routed to an owner and tracked to done, so locations actually close the distance.",
        image: "/images/products/market-intelligence/competitive-benchmarking/competitive-benchmarking-action.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See how action works",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Review monitoring",
        title: "Bring every public review into one feed.",
        linkText: "Explore",
        link: "/products/market-intelligence/review-monitoring",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Hear directly from your own customers.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: shoppingBagSimpleIcon,
        eyebrow: "Mystery shopping",
        title: "See your sites the way your customers do.",
        linkText: "Explore",
        link: "/products/customer-experience/mystery-shopping",
    },
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Check standards at every location.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Route every fix to an owner, tracked to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    }
]

export const contentGridData = [
    {
        category: "By Industry",
        title: "Retail",
        description: "Compare each store with the shops near it.",
        image: "/images/products/shared/retail-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/retail",
        }
    },
    {
        category: "By Industry",
        title: "Leisure & hospitality",
        description: "Compare each site with nearby venues.",
        image: "/images/products/shared/hospitality-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/leisure-and-hospitality",
        }
    },
    {
        category: "By Industry",
        title: "Restaurants",
        description: "See how each restaurant rates against local rivals.",
        image: "/images/products/shared/restaurant-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/restaurants",
        }
    },
    {
        category: "By Industry",
        title: "Healthcare",
        description: "Compare patient-facing sites with local peers.",
        image: "/images/products/shared/healthcare-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/healthcare",
        }
    },
    {
        category: "By Industry",
        title: "Facilities management",
        description: "Compare each contract against local operators.",
        image: "/images/products/shared/facilities-management-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/facilities-management",
        }
    },
    {
        category: "By Industry",
        title: "Venues & events",
        description: "Compare each venue with others in its area.",
        image: "/images/products/shared/venues-events-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/venues-and-events",
        }
    }
]

export const faqData = [
    {
        question: "What does competitive benchmarking actually do?",
        answer: "It compares each of your locations with the rivals near it, using their public reviews. Serve First scores both the same way and shows you where you are ahead, where you are behind, and the topics driving the difference, so a comparison leads to a fix rather than just a chart."
    },
    {
        question: "How do you know which competitors to compare us with?",
        answer: "Serve First works out the nearby competitors for each site automatically, so every location is measured against the rivals that actually compete for its customers, not a generic national list."
    },
    {
        question: "Where does the data come from?",
        answer: "From public reviews of your sites and their local rivals. Serve First reads the words, not just the star rating, and scores the sentiment and topics behind each one."
    },
    {
        question: "How often is it updated?",
        answer: "Competitor reviews are refreshed each month, so you have a current read on every local market rather than a one-off snapshot that dates quickly."
    },
    {
        question: "Can we act on what it shows, or is it just a report?",
        answer: "You can act on it. The gaps become tasks and training routed to the right site and owner, tracked through to done, so each location closes the distance on the rivals that matter to it."
    },
    {
        question: "Does it work across lots of sites?",
        answer: "Yes. Serve First is built for multi-site operators. Every location is benchmarked in one operating picture, so you can see where you lead, where you trail and where to focus, however many sites you run."
    }
]