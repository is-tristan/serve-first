import {
    fileCheckIcon,
    clipBoardCheckIcon,
    usersIcon,
    aiIcon,
    checkCircleBrokenIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "01 | Patient feedback",
        title: "Patient feedback and compliance checks live apart, so proving standards takes effort.",
        description: "Serve First brings patient feedback and quality audits into one operating picture, so sentiment and compliance sit together rather than in separate tools.",
        tags: []
    },
    {
        eyebrow: "02 | Quality audits",
        title: "When evidence is needed, assembling it across locations is slow and stressful.",
        description: "Audits capture timestamped records and sign-offs as the work is done, so a complete audit trail is ready on request for any location and date.",
        tags: []
    },
    {
        eyebrow: "03 | Proof of completion",
        title: "A finding is logged, but nothing guarantees the action is closed.",
        description: "Every failed check raises a corrective action routed to an owner and tracked to proof of completion, so standards are met, not just noted.",
        tags: []
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Quality and compliance audits run at every location, with patient feedback captured alongside, recorded with timestamps and sign-offs.",
        image: "/images/solutions/by-industry/healthcare/healthcare-capture.png",
        button: {
            text: "Explore capture",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyze",
        description: "Every location is scored and compared, with EVA flagging where standards or sentiment are slipping and why.",
        image: "/images/solutions/by-industry/healthcare/healthcare-analyse.png",
        button: {
            text: "See the analysis",
            href: "/how-it-works/analyze",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Failed checks raise corrective actions routed to an owner and tracked to proof of completion, ready to show on request.",
        image: "/images/solutions/by-industry/healthcare/healthcare-action.png",
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
        title: "Run quality and compliance checks.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Capture patient feedback by location.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Route every action to an owner, to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: usersIcon,
        eyebrow: "Knowledge Base",
        title: "Keep procedures in one place teams find.",
        linkText: "Explore",
        link: "/products/operational-excellence/knowledge-base",
    },
    {
        icon: aiIcon,
        eyebrow: "EVA",
        title: "Ask how locations are doing, get next actions.",
        linkText: "Meet EVA",
        link: "/eva",
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


export const contentGridData = [
    {
        title: "Inconsistent standards",
        description: "Hold every location to the same standard.",
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
        question: "What is patient experience software?",
        answer: "Patient experience software helps healthcare providers capture patient feedback, run quality and compliance audits and turn both into action across every location. Serve First ties each action to proof of completion, so care standards are raised and documented rather than simply measured."
    },
    {
        question: "How does it help us document compliance?",
        answer: "Audits run the same way at every location and capture timestamped records, photos and sign-offs as the work is done, so the audit trail is complete by default and you can produce evidence for any location and date on request."
    },
    {
        question: "Can we capture patient feedback by location?",
        answer: "Yes. Survey captures patient feedback at each location and feeds the same operating picture as your audits, so sentiment and care standards sit side by side and EVA can show where one is affecting the other."
    },
    {
        question: "Does it work across multiple locations?",
        answer: "Serve First is built for multi-location healthcare. Every location reports into one operating picture, so you can compare them, see where standards are slipping and fix them, with the evidence ready when it matters."
    },
    {
        question: "How does it support quality and care standards?",
        answer: "Quality and care standards become digital checks run consistently at every location, with the results scored and compared. Where a standard slips, the corrective action is routed to an owner and tracked to proof of completion, so standards are maintained, not just monitored."        
    },
    {
        question: "Can it help us prepare for an inspection?",
        answer: "Yes. Because evidence is captured as the work is done, you have a complete, timestamped audit trail per location, so preparing for an inspection is a case of producing what is already there rather than reconstructing it."
    }
]