import {
    fileCheckIcon,
    clipBoardCheckIcon,
    usersIcon,
    aiIcon,
    checkCircleBrokenIcon
} from "@/utils/icons";

export const logoData = [
    {
        src: "/decoration/logo-placeholder.svg",
        alt: "Logo",
    },
    {
        src: "/decoration/logo-placeholder.svg",
        alt: "Logo",
    },
    {
        src: "/decoration/logo-placeholder.svg",
        alt: "Logo",
    },
    {
        src: "/decoration/logo-placeholder.svg",
        alt: "Logo",
    },
    {
        src: "/decoration/logo-placeholder.svg",
        alt: "Logo",
    },
    {
        src: "/decoration/logo-placeholder.svg",
        alt: "Logo",
    },
    {
        src: "/decoration/logo-placeholder.svg",
        alt: "Logo",
    },
    {
        src: "/decoration/logo-placeholder.svg",
        alt: "Logo",
    }
]

export const challengeFrameData = [
    {
        eyebrow: "01 | Feedback and checks apart",
        title: "Patient feedback and compliance checks live apart, so proving standards takes effort.",
        description: "Serve First brings patient feedback and quality audits into one operating picture, so sentiment and compliance sit together rather than in separate tools.",
        tags: [
            {
                tag: "Patient feedback",
            }
        ]
    },
    {
        eyebrow: "02 | Evidence hard to find",
        title: "When evidence is needed, assembling it across sites is slow and stressful.",
        description: "Audits capture timestamped records and sign-offs as the work is done, so a complete audit trail is ready on request for any site and date.",
        tags: [
            {
                tag: "Quality audits",
            }
        ]
    },
    {
        eyebrow: "03 | Action not tracked",
        title: "A finding is logged, but nothing guarantees the action is closed.",
        description: "Every failed check raises a corrective action routed to an owner and tracked to proof of completion, so standards are met, not just noted.",
        tags: [
            {
                tag: "Proof of Completion",
            }
        ]
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Quality and compliance Audits run at every site, with patient feedback captured alongside, recorded with timestamps and sign-offs.",
        image: "",
        button: {
            text: "Explore capture",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "Every site is scored and compared, with EVA flagging where standards or sentiment are slipping and why.",
        image: "",
        button: {
            text: "See the analysis",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Failed checks raise corrective actions routed to an owner and tracked to proof of completion, ready to evidence on request.",
        image: "",
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
        title: "Capture patient feedback by site.",
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
        link: "/products/operational-excellence/helpdesk",
    },
    {
        icon: aiIcon,
        eyebrow: "Eva AI",
        title: "Ask how sites are doing, get next actions.",
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
        title: "Inconsistent standards across locations",
        description: "Hold care and compliance standards across every site.",
        image: "/images/solutions/by-industry/retail/Inconsistent_standards_across_locations_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/inconsistent-standards",
        }
    },
    {
        title: "Too many tools and siloed data",
        description: "Bring patient feedback and audits into one operating picture.",
        image: "/images/solutions/by-industry/retail/Too_many_tools_and_siloed_data_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/siloed-tools-and-data",
        }
    },
    {
        title: "Struggling to prove improvement",
        description: "Prove standards are improving, with the evidence to show it.",
        image: "/images/solutions/by-industry/retail/Struggling_to_prove_improvement_icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-challenge/prove-improvement",
        }
    },
    {
        title: "Data that never leads to action",
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
        answer: "Patient experience software helps healthcare providers capture patient feedback, run quality and compliance audits and turn both into action across every site. Serve First ties each action to proof of completion, so care standards are raised and evidenced rather than simply measured."
    },
    {
        question: "How does it help us evidence compliance?",
        answer: "Audits run the same way at every site and capture timestamped records, photos and sign-offs as the work is done, so the audit trail is complete by default and you can produce evidence for any site and date on request."
    },
    {
        question: "Can we capture patient feedback by site?",
        answer: "Yes. Survey captures patient feedback at each location and feeds the same operating picture as your audits, so sentiment and care standards sit side by side and EVA can show where one is affecting the other."
    },
    {
        question: "Does it work across multiple sites?",
        answer: "Serve First is built for multi-site healthcare. Every site reports into one operating picture, so you can compare locations, see where standards are slipping and put them right, with the evidence ready when it matters."
    },
    {
        question: "How does it support quality and care standards?",
        answer: "Quality and care standards become digital checks run consistently at every site, with the results scored and compared. Where a standard slips, the corrective action is routed to an owner and tracked to proof of completion, so standards are maintained, not just monitored."        
    },
    {
        question: "Can it help us prepare for an inspection?",
        answer: "Yes. Because evidence is captured as the work is done, you hold a complete, timestamped audit trail per site, so preparing for an inspection is a case of producing what is already there rather than reconstructing it."
    }
]