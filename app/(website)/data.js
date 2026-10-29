import {
    messageAlertSquareIcon,
    shoppingBagSimpleIcon,
    messageSmileSquareIcon,
    fileCheckIcon,
    clipBoardCheckIcon
} from "@/utils/icons";

export const platformStoryData = [
    {
        eyebrow: "01 | Capture",
        image: "/images/home/home-capture.png",
        imageWidth: 768,
        imageHeight: 384,
        imageSizing: "cover",
        title: "Capture every signal",
        description: "From every location and channel, in real time.",
        list: [],
        button: [
            {
                text: "Explore capture",
                href: "/how-it-works/capture",
            }
        ]
    },
    {
        eyebrow: "02 | Analyze",
        image: "/images/home/home-analyse.png",
        imageWidth: 768,
        imageHeight: 384,
        imageSizing: "cover",
        title: "Analyze with EVA",
        description: "Patterns, risks and root causes, in plain English.",
        list: [],
        button: [
            {
                text: "Explore analyze",
                href: "/how-it-works/analyze",
                target: "_self",
            }
        ]
    },
    {
        eyebrow: "03 | Action",
        image: "/images/home/home-action.png",
        imageWidth: 768,
        imageHeight: 384,
        imageSizing: "cover",
        title: "Action on the frontline",
        description: "Each task routed to whoever can resolve it.",
        list: [],
        button: [
            {
                text: "Explore action",
                href: "/how-it-works/action",
                target: "_self",
            }
        ]
    }
]

export const productHighlightData = [
    {
        icon: messageAlertSquareIcon,
        eyebrow: "Feedback terminals",
        title: "Capture honest feedback the moment it happens.",
        linkText: "Explore",
        link: "/products/customer-experience/feedback-terminals",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Reach customers on web, kiosk, email and SMS.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: shoppingBagSimpleIcon,
        eyebrow: "Mystery shopping",
        title: "See your locations the way your customers do.",
        linkText: "Explore",
        link: "/products/customer-experience/mystery-shopping",
    },
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Run digital audits and inspections on-site.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Client Connect",
        title: "Run B2B feedback programs for your accounts.",
        linkText: "Explore",
        link: "/products/customer-experience/client-connect",
    },
]

export const contentGridData = [
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

export const industryCardsData = [
    {
        eyebrow: "Retail",
        title: "Consistent standards across every store.",
        image: "/images/home/home-retail.png",
        button: {
            text: "Explore retail",
            href: "/solutions/by-industry/retail",
            target: "_self",
        }
    },
    {
        eyebrow: "Leisure & hospitality",
        title: "Guest experience, every location and shift.",
        image: "/images/home/home-leisure-and-hospitality.png",
        button: {
            text: "Explore leisure and hospitality",
            href: "/solutions/by-industry/leisure-and-hospitality",
            target: "_self",
        }
    },
    {
        eyebrow: "Restaurants",
        title: "Service and standards at every table.",
        image: "/images/home/home-restaurants.png",
        button: {
            text: "Explore restaurants",
            href: "/solutions/by-industry/restaurants",
            target: "_self",
        }
    },
    {
        eyebrow: "Healthcare",
        title: "Patient experience and compliance in one view.",
        image: "/images/home/home-healthcare.png",
        button: {
            text: "Explore healthcare",
            href: "/solutions/by-industry/healthcare",
            target: "_self",
        }
    },
    {
        eyebrow: "Facilities management",
        title: "Service quality across every contract.",
        image: "/images/home/home-facilities-management.png",
        button: {
            text: "Explore facilities management",
            href: "/solutions/by-industry/facilities-management",
            target: "_self",
        }
    },
    {
        eyebrow: "Venues & events",
        title: "Safety, standards and feedback, live.",
        image: "/images/home/home-venue-and-events.png",
        button: {
            text: "Explore venues and events",
            href: "/solutions/by-industry/venues-and-events",
            target: "_self",
        }
    },
]