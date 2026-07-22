import {
    fileCheckIcon,
    clipBoardCheckIcon,
    notificationTextIcon,
    messageSmileSquareIcon,
    checkCircleBrokenIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "01 | Food safety audits",
        title: "Food safety and service standards drift between sites and shifts.",
        description: "Serve First runs the same food safety and service audits at every site, scored consistently, so standards are checked the same way on every shift.",
        tags: []
    },
    {
        eyebrow: "02 | Guest Feedback",
        title: "When the audit is on paper, the evidence is patchy and hard to find later.",
        description: "Digital checks capture timestamps, photos and sign-offs as the shift runs, so the evidence builds itself and is ready when you need it.",
        tags: []
    },
    {
        eyebrow: "03 | Proof of Completion",
        title: "A problem gets noted, then slips back before the next visit.",
        description: "Every failed check raises a corrective task routed to the right owner and tracked to done, so issues close before the next service.",
        tags: []
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Teams run food safety and service Audits at every site, with guest feedback captured alongside, recorded as the shift runs.",
        image: "/images/solutions/by-industry/restaurants/restaurants-capture.png",
        button: {
            text: "Explore capture",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "Every site is scored and compared, with EVA flagging where safety or service is slipping and what is behind it.",
        image: "/images/solutions/by-industry/restaurants/restaurants-analyse.png",
        button: {
            text: "See the analysis",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Failed checks raise corrective tasks routed to the right owner and tracked to done, so issues close before the next service.",
        image: "/images/solutions/by-industry/restaurants/restaurants-action.png",
        button: {
            text: "Drive it to done",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Run food safety and service checks.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: notificationTextIcon,
        eyebrow: "Helpdesk",
        title: "Resolve site issues in one place.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Capture guest satisfaction by site.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: messageSmileSquareIcon,
        eyebrow: "Review monitoring",
        title: "Track reviews across every site.",
        linkText: "Explore",
        link: "/products/market-intelligence/review-monitoring",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Route every action to an owner, to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
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
        question: "What is restaurant operations software?",
        answer: "Restaurant operations software helps multi-site restaurants run food safety and service checks, capture guest feedback and turn both into action in one place. Serve First scores every site, routes each gap to an owner and tracks it to proof of completion, so standards hold at every cover rather than slipping on a busy shift."
    },
    {
        question: "How does it support food safety compliance?",
        answer: "Food safety checks run as digital audits at every site, captured with timestamps, photos and sign-offs, so the evidence builds itself. A failed check raises a corrective task automatically, so the issue is closed and documented, not just noted."
    },
    {
        question: "Can it track guest feedback and reviews?",
        answer: "Yes. Survey captures guest satisfaction by site and Review monitoring brings reviews into the same picture, so guest perception and operational standards sit together and EVA can show where one affects the other."
    },
    {
        question: "Does it work across many sites?",
        answer: "Serve First is built for multi-site restaurants. Every site reports into one operating picture, so you can compare locations, spot the ones slipping and put them right, however many you run."
    },
    {
        question: "How does it help maintain service standards at peak times?",
        answer: "Standards are checked the same way on every shift, and a failed check raises a task automatically, so issues are caught and fixed even when sites are flat out, rather than slipping until someone notices."
    },
    {
        question: "Can it cut the admin around food safety records?",
        answer: "Yes. Checks are digital, captured with timestamps, photos and sign-offs as the shift runs, so the records build themselves and are ready for an EHO visit or a brand audit without a paperwork scramble."
    }
]