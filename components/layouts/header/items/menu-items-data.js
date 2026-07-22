import {
    aiIcon,
    captureIcon,
    analyseIcon,
    actionIcon,
    byRoleIcon,
    byIndustryIcon,
    byChallengeIcon,
    customerExperienceIcon,
    marketingIntelligenceIcon,
    operationalExcellenceIcon,
    aboutUsIcon, contactUsIcon
} from '@/utils/icons';

export const menuItemsData = [
    {
        label: "How It Works",
        href: "#",
        submenu: [
            {
                label: "Capture",
                href: "/how-it-works/capture",
                icon: captureIcon,
            },
            {
                label: "Analyse",
                href: "/how-it-works/analyse",
                icon: analyseIcon,
            },
            {
                label: "Action",
                href: "/how-it-works/action",
                icon: actionIcon,
            },
        ],
    },
    {
        label: "Solutions",
        href: "#",
        submenu: [
            {
                label: "By Role",
                href: "/solutions/by-role",
                icon: byRoleIcon,
                submenu: [
                    {
                        label: "CX Leaders",
                        href: "/solutions/by-role/cx-leader",
                    },
                    {
                        label: "Operations Directors",
                        href: "/solutions/by-role/operations-directors",
                    },
                    {
                        label: "Compliance Manager",
                        href: "/solutions/by-role/compliance-manager",
                    },
                ]
            },
            {
                label: "By Industry",
                href: "/solutions/by-industry",
                icon: byIndustryIcon,
                submenu: [
                    {
                        label: "Retail",
                        href: "/solutions/by-industry/retail",
                    },
                    {
                        label: "Leisure and Hospitality",
                        href: "/solutions/by-industry/leisure-and-hospitality",
                    },
                    {
                        label: "Restaurants",
                        href: "/solutions/by-industry/restaurants",
                    },
                    {
                        label: "Healthcare",
                        href: "/solutions/by-industry/healthcare",
                    },
                    {
                        label: "Facilities Management",
                        href: "/solutions/by-industry/facilities-management",
                    },
                    {
                        label: "Venues and Events",
                        href: "/solutions/by-industry/venues-and-events",
                    },
                ],
            },
            {
                label: "By Challenge",
                href: "/solutions/by-challenge",
                icon: byChallengeIcon,
                submenu: [
                    {
                        label: "Inconsistent standards across locations",
                        href: "/solutions/by-challenge/inconsistent-standards",
                    },
                    {
                        label: "Too many tools, too many siloed data sources",
                        href: "/solutions/by-challenge/siloed-tools-and-data",
                    },
                    {
                        label: "Struggling to prove what's improving",
                        href: "/solutions/by-challenge/prove-improvement",
                    },
                    {
                        label: "Data that never leads to action",
                        href: "/solutions/by-challenge/data-to-action",
                    },
                ],
            },
        ],
    },
    {
        label: "Products",
        href: "#",
        submenu: [
            {
                label: "Customer Experience",
                href: "/products/customer-experience",
                icon: customerExperienceIcon,
                submenu: [
                    {
                        label: "Feedback Terminals",
                        href: "/products/customer-experience/feedback-terminals",
                    },
                    {
                        label: "Survey",
                        href: "/products/customer-experience/survey",
                    },
                    {
                        label: "Mystery Shopping",
                        href: "/products/customer-experience/mystery-shopping",
                    },
                    {
                        label: "Client Connect",
                        href: "/products/customer-experience/client-connect",
                    },
                ],
            },
            {
                label: "Marketing Intelligence",
                href: "#",
                icon: marketingIntelligenceIcon,
                submenu: [
                    {
                        label: "Competitive Benchmarking",
                        href: "/products/market-intelligence/competitive-benchmarking",
                    },
                    {
                        label: "Review Monitoring",
                        href: "/products/market-intelligence/review-monitoring",
                    },
                ],
            },
            {
                label: "Operational Excellence",
                href: "#",
                icon: operationalExcellenceIcon,
                submenu: [
                    {
                        label: "Audits",
                        href: "/products/operational-excellence/audits",
                    },
                    {
                        label: "Task Management",
                        href: "/products/operational-excellence/task-management",
                    },
                    {
                        label: "Helpdesk",
                        href: "/products/operational-excellence/helpdesk",
                    },
                    {
                        label: "Knowledge Base",
                        href: "/products/operational-excellence/knowledge-base",
                    },
                    {
                        label: "Martyn's Law Compliance",
                        href: "/products/operational-excellence/martyns-law",
                    },
                ],
            },
        ],
    },
    {
        label: "Company",
        href: "#",
        submenu: [
            {
                label: "About Us",
                href: "/company/about",
                icon: aboutUsIcon,
            },
            {
                label: "Contact Us",
                href: "/company/contact-us-us",
                icon: contactUsIcon,
            },
        ],
    },
    {
        label: "Resources",
        href: "#",
        submenu: [
            {
                label: "Blog",
                href: "/resources/blog",
            },
            {
                label: "Media",
                href: "/resources/media",
            },
        ],
    },
    {
        label: "Meet EVA",
        href: "/eva",
        icon: aiIcon,
    }
]