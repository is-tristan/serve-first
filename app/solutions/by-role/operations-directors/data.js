import {
    routeIcon,
    aiIcon,
    checkDoneIcon,
    FlagAltIcon,
    chartBreakoutIcon,
    magnifyingGlassIcon,
    userCheckIcon,
    shoppingBagSimpleIcon,
    notificationTextIcon,
    usersCheckedIcon,
} from "@/utils/icons";

export const roleContextData = [
    {
        icon: checkDoneIcon,
        title: "Prove the standard",
        description: "Run digital Audits and Mystery shopping across every site, with scores you can compare."
    },
    {
        icon: routeIcon,
        title: "Close the gaps",
        description: "Failed checks raise Task management actions automatically, routed to the right owner."
    },
    {
        icon: chartBreakoutIcon,
        title: "See it in one view",
        description: "See customer and operational data together in one view, so you can prove what is improving."
    },
    {
        icon: FlagAltIcon,
        title: "Manage by exception",
        description: "EVA flags the sites that need you, so your attention goes where it matters most."
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Digital Audits, Mystery shopping and Helpdesk capture how every site is really running, scored the same way everywhere.",
        image: "/images/solutions/by-role/operations-directors/ops_director_platform_story_01_digital_audit_and_comparison.png",
        button: {
            text: "Explore",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "Every site is compared like for like, and EVA flags the locations slipping and the standard behind the slip.",
        image: "/images/solutions/by-role/operations-directors/ops_director_platform_story_02_failed_checks_task_creation.png",
        button: {
            text: "Explore",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Failed checks raise corrective tasks routed to an owner with a due date, tracked to proof of completion.",
        image: "/images/solutions/by-role/operations-directors/ops_director_platform_story_03_network_performance_summary.png",
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
        icon: userCheckIcon,
        eyebrow: "Task management",
        title: "Turn insight into assigned, tracked tasks.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: shoppingBagSimpleIcon,
        eyebrow: "Mystery shopping",
        title: "See your sites the way your customers do.",
        linkText: "Explore",
        link: "/products/customer-experience/mystery-shopping",
    },
    {
        icon: notificationTextIcon,
        eyebrow: "Helpdesk",
        title: "Turn every issue into a tracked, resolved ticket.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
    },
    {
        icon: usersCheckedIcon,
        eyebrow: "Knowledge Base",
        title: "Keep procedures and training in one place.",
        linkText: "Explore",
        link: "/products/operational-excellence/knowledge-base",
    },
    {
        icon: aiIcon,
        eyebrow: "EVA AI",
        title: "Ask how the estate is doing, get next actions.",
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
        description: "Audit pass rate",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "95",
        numberSuffix: "%",
        description: "Task completion",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "90",
        numberSuffix: "+h",
        description: "Time saved a week",
    },
    {
        numberPrefix: "",
        startNumber: "0",
        endNumber: "200",
        numberSuffix: "+",
        description: "Sites on standard",
    }
]

export const challengeFrameData = [
    {
        eyebrow: "01 | Lack of visibility",
        title: "You cannot see which sites are slipping until it shows up in the numbers.",
        description: "Serve First scores every site against your standards in real time, so a slipping location is visible the moment it dips, not at month end.",
        tags: [
            {
                tag: "Live audit scores",
            },
        ]
    },
    {
        eyebrow: "02 | Lack of action",
        title: "A problem gets spotted on a visit, then lost before anyone fixes it.",
        description: "Every failed check raises a corrective task routed to the right owner and tracked to done, so what you find on site is closed, not forgotten.",
        tags: [
            {
                tag: "Routed tasks",
            },
        ]
    },
    {
        eyebrow: "03 | Lack of insight",
        title: "Customer and operational data live in different tools, so proving cause is slow.",
        description: "Serve First brings both into one operating picture, so you can connect a drop in satisfaction to the standard behind it and address the real cause.",
        tags: [
            {
                tag: "One operating picture",
            },
        ]
    }
]

export const faqData = [
    {
        question: "How does Serve First keep standards consistent across sites?",
        answer: "Every site runs the same digital audits and checks, scored the same way, so you can compare locations directly and hold them all to one standard, rather than trusting each site to mark its own work.",
    },
    {
        question: "What happens when a check fails?",
        answer: "A corrective task is raised automatically, routed to the owner who can fix it, with a due date and proof of completion, so the gap is closed and you can see it was."
    },
    {
        question: "Can I see everything in one place?",
        answer: "Yes. Audits, tasks, helpdesk and customer feedback report into one operating picture, so you manage the estate from one view instead of stitching tools together."
    },
    {
        question: "Do I still get reporting without a separate tool?",
        answer: "Outcome tracking is built in. You see standards, completion and the trend over time in one place, with proof of completion behind every fix."
    }
]