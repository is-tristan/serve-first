import {
    routeIcon,
    checkCircleBrokenIcon,
    aiIcon,
    messageAlertSquareIcon,
    checkDoneIcon,
    magnifyingGlassIcon,
    userCheckIcon,
    clockCheckIcon,
    certificateIcon,
} from "@/utils/icons";

export const roleContextData = [
    {
        icon: checkDoneIcon,
        title: "Turn obligations into checks",
        description: "Run audits and Martyn's Law compliance checklists against the standards."
    },
    {
        icon: clockCheckIcon,
        title: "Capture the evidence",
        description: "Timestamped records and audit trails document duty of care as you go."
    },
    {
        icon: routeIcon,
        title: "Close every gap",
        description: "Failed checks raise Task management actions, so nothing is left open."
    },
    {
        icon: messageAlertSquareIcon,
        title: "Prove it on request",
        description: "Audit trails are kept per site, so evidence is ready the moment anyone asks."
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Audits and Martyn's Law checklists capture timestamped records, photos and sign-offs as the work is done, at every site.",
        image: "/images/solutions/by-role/compliance-manager/compliance_manager_platform_story_01_compliance_checklist.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Explore",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "EVA reads compliance status across the estate and flags the sites that are due, overdue or at risk, early.",
        image: "/images/solutions/by-role/compliance-manager/compliance_manager_platform_story_02_compliance_management_logs.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Explore",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Every failed check raises a corrective action with an owner and a due date, tracked to proof of completion.",
        image: "/images/solutions/by-role/compliance-manager/compliance_manager_platform_story_03_compliance_gap_identification.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Explore",
            href: "/how-it-works/action",
        }
    },
]

export const productHighlightData = [
    {
        icon: magnifyingGlassIcon,
        eyebrow: "Audits",
        title: "Run digital audits and inspections on site.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: certificateIcon,
        eyebrow: "Martyn's Law compliance",
        title: "Evidence your Martyn's Law obligations.",
        linkText: "Explore",
        link: "/products/operational-excellence/martyns-law",
    },
    {
        icon: userCheckIcon,
        eyebrow: "Task management",
        title: "Turn insight into assigned, tracked tasks.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Knowledge Base",
        title: "Keep policies and procedures in one place.",
        linkText: "Explore",
        link: "/products/operational-excellence/knowledge-base",
    },
    {
        icon: aiIcon,
        eyebrow: "EVA",
        title: "Ask which sites are due or at risk, fast.",
        linkText: "Meet EVA",
        link: "/eva",
    },
]

export const moduleStatsData = [
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "100",
        numberSuffix: "%",
        description: "Compliance rate",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "95",
        numberSuffix: "%",
        description: "Sites covered",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "90",
        numberSuffix: "+h",
        description: "Evidence on request",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "200",
        numberSuffix: "+",
        description: "Training completion",
    }
]

export const challengeFrameData = [
    {
        eyebrow: "01 | Lack of evidence",
        title: "When someone asks for evidence, you need it now, for every site, not next week.",
        description: "Serve First keeps a timestamped audit trail for every site, so proof is ready on request, for any location and any date, without a scramble.",
        tags: [
            {
                tag: "Compliance checklists",
            },
        ]
    },
    {
        eyebrow: "02 | Lack of action",
        title: "Checks happen, but the evidence is scattered or missing.",
        description: "Evidence is captured as the work is done, with photos, records and sign-offs attached to each check, so the trail is complete by default.",
        tags: [
            {
                tag: "Timestamped evidence",
            },
        ]
    },
    {
        eyebrow: "03 | Lack of insight",
        title: "A gap is found, but nothing guarantees it gets closed.",
        description: "Every failed check raises a corrective action with an owner and a due date, tracked to proof of completion, so obligations are met, not just noted.",
        tags: [
            {
                tag: "Audit trails",
            },
        ]
    }
]

export const faqData = [
    {
        question: "How does Serve First help with Martyn's Law?",
        answer: "It turns your Martyn's Law duties into structured checklists run at every venue, captures the evidence as the work is done and keeps an audit trail, so you can demonstrate your protection measures on request."
    },
    {
        question: "Is the evidence good enough for an audit?",
        answer: "Every check is timestamped, attributed and stored with its photos and sign-offs, so the audit trail shows what was done, by whom and when, across every site."
    },
    {
        question: "What happens when a check fails?",
        answer: "A corrective action is raised automatically, routed to an owner with a due date and tracked to proof of completion, so gaps are closed and documented."
    },
    {
        question: "Can I prove compliance across every site at once?",
        answer: "Yes. Every site reports into one operating picture, so you can see compliance status across the estate and produce evidence for any location immediately."
    }
]