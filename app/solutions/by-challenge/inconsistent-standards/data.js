import {
    checkCircleBrokenIcon,
    clipBoardCheckIcon,
    fileCheckIcon,
    usersIcon,
    usersCheckIcon,
    usersUpIcon,
    shoppingBagSimpleIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "01 | Standards drift",
        title: "One standard leaves head office and changes a little at every site.",
        description: "Serve First runs the same digital Audits at every site, scored the same way, so the standard is checked like for like and drift shows up immediately.",
        tags: [
            {
                tag: "Store audits",
            },
        ]
    },
    {
        eyebrow: "02 | Ratings change",
        title: "You cannot see which locations are slipping until customers feel it.",
        description: "Every site is scored and compared in one operating picture, with EVA flagging the locations that are slipping and the standard behind the slip.",
        tags: [
            {
                tag: "Routed tasks",
            },
        ]
    },
    {
        eyebrow: "03 | Inconsistent standards",
        title: "Issues get raised on a visit, then quietly slip back within weeks.",
        description: "Every failed check raises a corrective task routed to an owner and tracked to proof of completion, so the fix holds and you can show it did.",
        tags: [
            {
                tag: "Proof of completion",
            },
        ]
    }
]

export const roleContextData = [
    {
        icon: usersIcon,
        title: "Operations directors",
        description: "See which sites meet the standard and which are slipping, with the gap already routed as a task.",
        button: {
            text: "For ops directors",
            href: "/solutions/by-role/operations-director",
        }
    },
    {
        icon: usersUpIcon,
        title: "CX Leaders",
        description: "See how standards at each site show up in customer sentiment, and where to focus next.",
        button: {
            text: "For CX leaders",
            href: "/solutions/by-role/cx-leader",
        }
    },
    {
        icon: usersCheckIcon,
        title: "Compliance managers",
        description: "See checks completed and evidenced at every site, with audit trails ready on request.",
        button: {
            text: "For compliance managers",
            href: "/solutions/by-role/compliance-manager",
        }
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Teams run digital Audits and CSAT checks against your standards at every site, recording scores and evidence as they go.",
        image: "/images/solutions/by-challenge/inconsistent-standards/inconsistent_standards_how_it_works_01_operational_audit.png",
        imageSizing: "Contain",
        button: {
            text: "Explore",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "Every site is scored and compared like for like, with EVA flagging which locations are slipping and the cause behind it.",
        image: "/images/solutions/by-challenge/inconsistent-standards/inconsistent_standards_how_it_works_02_network_audit_scores.png",
        imageSizing: "Contain",
        button: {
            text: "Explore",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Failed checks raise tasks routed to the right owner and tracked to done, so the gap closes and the standard holds.",
        image: "/images/solutions/by-role/compliance-manager/compliance_manager_platform_story_03_compliance_gap_identification.png",
        button: {
            text: "Explore",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Score every site against your standards.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Route every gap to an owner, to done.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Measure CSAT and sentiment by site.",
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
        icon: usersIcon,
        eyebrow: "Knowledge Base",
        title: "Keep the standard where teams can find it.",
        linkText: "Explore",
        link: "/products/operational-excellence/knowledge-base",
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

export const faqData = [
    {
        question: "How do you keep standards consistent across multiple locations?",
        answer: "Every location runs the same digital checks, scored the same way, so you can compare sites directly and hold them all to one standard. When a site slips, the gap is routed to an owner as a task and tracked to proof of completion, so consistency is maintained rather than hoped for."
    },
    {
        question: "What is audit management software?",
        answer: "Audit management software replaces paper checklists with digital checks run on site, scored against your standards and stored with photos and sign-offs. Serve First goes further: a failed check automatically raises a corrective task, so the audit leads to a fix, not just a score."
    },
    {
        question: "Can we compare standards between sites?",
        answer: "Yes. Every site is scored against the same standards in one operating picture, so you can rank locations, spot outliers and see which standards drive the difference, with EVA explaining the cause in plain English."
    },
    {
        question: "How do we know a fix actually held?",
        answer: "Every corrective task is tracked to proof of completion, and the next audit shows whether the standard is being met. If the same issue reappears, it is visible immediately, so repeat problems get a different conversation."
    },
    {
        question: "How do you audit standards across multiple sites?",
        answer: "Serve First runs the same digital audits at every site, scored consistently, so you can compare locations directly. Results roll up into one operating picture and any failed check raises a corrective task, so an audit leads to a fix rather than just a score."
    },
    {
        question: "How do we stop the same issues recurring?",
        answer: "Every fix is tracked to proof of completion and the next audit shows whether the standard held. If an issue reappears it is visible immediately, so recurring problems get caught and addressed rather than quietly returning."
    }
]