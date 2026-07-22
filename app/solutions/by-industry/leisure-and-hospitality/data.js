import {
    fileCheckIcon,
    clipBoardCheckIcon,
    aiIcon,
    messageSmileSquareIcon,
    messageAlertSquareIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "01 | Guest Feedback",
        title: "Guest experience slips quietly between sites, and you hear about it in the reviews.",
        description: "Serve First captures guest feedback at every site and flags where experience is slipping, so you catch a dip before it reaches your ratings.",
        tags: []
    },
    {
        eyebrow: "02 | Review Monitoring",
        title: "Brand standards hold at the flagship but drift at the busier, harder sites.",
        description: "The same digital audits run at every location, scored the same way, so you hold all sites to one standard rather than trusting each to self-assess.",
        tags: []
    },
    {
        eyebrow: "03 | Proof of Completion",
        title: "A great review and a complaint say different things, but live in different tools.",
        description: "Reviews, surveys and feedback sit in one operating picture, and each issue routes to the team that can resolve it, tracked to proof of completion.",
        tags: []
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Feedback terminals, Survey and Review monitoring capture how guests feel at every site, in the moment and across the web.",
        image: "/images/solutions/by-industry/leisure-and-hospitality/leisure-and-hospitality-capture.png",
        button: {
            text: "Explore",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "EVA reads the feedback as it lands and flags where the guest experience is slipping, at which site and why.",
        image: "/images/solutions/by-industry/leisure-and-hospitality/leisure-and-hospitality-analyse.png",
        button: {
            text: "Explore",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Each issue routes to the team that can resolve it, tracked to done, so a dip is put right before it reaches your reviews.",
        image: "/images/solutions/by-industry/leisure-and-hospitality/leisure-and-hospitality-action.png",
        button: {
            text: "Explore",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: aiIcon,
        eyebrow: "EVA Ai",
        title: "Ask how sites are doing and get the next actions.",
        linkText: "Meet EVA",
        link: "/eva",
    },
    {
        icon: messageAlertSquareIcon,
        eyebrow: "Feedback terminals",
        title: "Capture feedback into the same platform.",
        linkText: "Explore",
        link: "/products/customer-experience/feedback-terminals",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Measure guest satisfaction by site.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Review monitoring",
        title: "Track and respond to reviews in one place.",
        linkText: "Explore",
        link: "/products/market-intelligence/review-monitoring",
    },
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Score every store against your standards.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
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

export const testimonialData = [
    {
        rating: 5,
        name: "Emma Bijker",
        position: "Senior Customer Experience & Training Specialist, The Body Shop",
        quote: "Serve First has transformed how we manage customer experience, giving us clear insights that have driven tangible results for our business.",
    }
]

export const contentGridData = [
    {
        title: "Inconsistent standards",
        description: "Hold every site to the same standard.",
        image: "/images/solutions/by-industry/retail/Inconsistent_standards_across_locations_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/inconsistent-standards",
        }
    },
    {
        title: "Siloed tools and data",
        description: "Bring every signal into one picture.",
        image: "/images/solutions/by-industry/retail/Too_many_tools_and_siloed_data_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/siloed-tools-and-data",
        }
    },
    {
        title: "Prove improvement",
        description: "Show the difference with evidence.",
        image: "/images/solutions/by-industry/retail/Struggling_to_prove_improvement_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/prove-improvement",
        }
    },
    {
        title: "Turn data into action",
        description: "Turn each finding into a routed, tracked corrective action.",
        image: "/images/solutions/by-industry/retail/data_that_never_leads_to_action_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/data-to-action",
        }
    },
]

export const faqData = [
    {
        question: "What is guest experience software?",
        answer: "Guest experience software helps hospitality operators capture guest feedback and turn it into action across every site. Serve First connects feedback from terminals, surveys and reviews with how each site runs, then routes the fix to an owner and tracks it to proof of completion, so a dip is caught before it shows up in your ratings.",
    },
    {
        question: "How does it help with online reviews?",
        answer: "Review monitoring brings reviews from across the web into one place, EVA surfaces the recurring themes, and each issue can be routed to the site as a task, so you respond and fix the cause rather than just reading the score."
    },
    {
        question: "Can we capture guest feedback on site?",
        answer: "Yes. Feedback terminals capture how guests feel in the moment, on site, and Survey reaches them on web, email and SMS, so you see every guest at every location rather than a sample from one channel."
    },
    {
        question: "Does it work across multiple sites?",
        answer: "Serve First is built for multi-site hospitality. Every hotel, spa or attraction reports into one operating picture, so you can compare sites, spot the ones slipping and put it right, wherever they are."
    },
    {
        question: "How does it improve guest satisfaction scores?",
        answer: "By turning feedback into action fast. Guest sentiment is captured at every touchpoint, EVA flags what is dragging the score and the fix is routed to the team that owns it, so the issues behind a low score get resolved rather than repeated."
    },
    {
        question: "Can it bring all our guest feedback channels together?",
        answer: "Yes. Surveys, on-site terminals and online reviews feed one operating picture, so you see every guest across every channel and site in one place, instead of a different tool for each source."
    }
]