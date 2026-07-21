import {
    clipBoardCheckIcon,
    fileSearchIcon,
    clockRefreshIcon,
    userEditBrokenIcon,
    usersCheckIcon,
    checkCircleBrokenIcon,
    fileCheckIcon,
    notificationTextIcon,
    certificateIcon
} from "@/utils/icons";

export const featureListData = [
    {
        eyebrow: "Answers where they work",
        title: "The right procedure, on demand, anywhere",
        description: "Bring SOPs, policies and training into one searchable home. Version control keeps a single current answer live, and role-based access means each team sees what applies to them and nothing out of date.",
        image: "/images/products/operational-excellence/knowledge-base/knowledge-base-feature-list-image.png",
        imageWidth: 768,
        imageHeight: 576,
        list: [
            {
                text: "Centralised content and search",
            },
            {
                text: "Version control keeps it current",
            },
            {
                text: "Role-based access controls",
            },
            {
                text: "Built-in training modules",
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
        icon: fileSearchIcon,
        eyebrow: "One home",
        title: "Centralised content and search",
        description: "Keep SOPs, policies and training in one searchable home, so teams find the answer in seconds.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: clockRefreshIcon,
        eyebrow: "Always current",
        title: "Version control built in",
        description: "Version control keeps one answer live and retires the old, so teams never work from stale guidance.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: userEditBrokenIcon,
        eyebrow: "Right access",
        title: "Role-based access controls",
        description: "Give each team the guidance that applies to their role, so a manager and a lead see the right thing.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    },
    {
        icon: usersCheckIcon,
        eyebrow: "Training built in",
        title: "Built-in training modules",
        description: "Training sits beside the procedures it supports, so teams learn and check the standard in one place.",
        button: {
            text: "See it in action",
            href: "/get-a-demo",
        }
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Procedures, policies and training are captured in one place, organised by type and the teams who need them.",
        image: "/images/products/operational-excellence/knowledge-base/knowledge-base-capture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Explore capture",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "Version control keeps one current answer live, with role-based access controlling exactly who sees what.",
        image: "/images/products/operational-excellence/knowledge-base/knowledge-base-analyse.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See how access works",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Teams find the right guidance in seconds, linked from the tickets and tasks they are already working on.",
        image: "/images/products/operational-excellence/knowledge-base/knowledge-base-action.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "Put guidance into action",
            href: "/how-it-works/action",
        }
    },
]

export const challengeFrameData = [
    {
        eyebrow: "Challenge 01",
        title: "Teams work from old documents because the current answer is hard to find.",
        subheading: "How Serve First solves it",
        description: "Serve First keeps one current, searchable answer with role-based access and links it from the tasks and tickets teams use, so the right guidance is always to hand.",
        tags: [
            {
                tag: "One current answer",
            },
            {
                tag: "Role-based access",
            },
            {
                tag: "Found in context",
            },
        ]
    }
]

export const productHighlightData = [
    {
        icon: fileCheckIcon,
        eyebrow: "Audits",
        title: "Check the standard is being followed.",
        linkText: "Explore",
        link: "/products/operational-excellence/audits",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Link guidance to the work itself.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: notificationTextIcon,
        eyebrow: "Helpdesk",
        title: "Answer tickets from your own docs.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
    },
    {
        icon: certificateIcon,
        eyebrow: "Martyn's Law compliance",
        title: "Keep duty-of-care guidance current.",
        linkText: "Explore",
        link: "/products/operational-excellence/martyns-law-compliance",
    },
    {
        icon: clipBoardCheckIcon,
        eyebrow: "Survey",
        title: "Hear where guidance is unclear.",
        linkText: "Explore",
        link: "/products/customer-experience/survey",
    }
]

export const contentGridData = [
    {
        category: "By Industry",
        title: "Retail",
        description: "Keep store procedures in one place.",
        image: "/images/products/shared/retail-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/retail",
        }
    },
    {
        category: "By Industry",
        title: "Leisure & hospitality",
        description: "Give every site the same playbook.",
        image: "/images/products/shared/hospitality-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/leisure-and-hospitality",
        }
    },
    {
        category: "By Industry",
        title: "Restaurants",
        description: "Keep restaurant SOPs current and found.",
        image: "/images/products/shared/restaurant-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/restaurants",
        }
    },
    {
        category: "By Industry",
        title: "Healthcare",
        description: "Keep clinical and site procedures current.",
        image: "/images/products/shared/healthcare-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/healthcare",
        }
    },
    {
        category: "By Industry",
        title: "Facilities management",
        description: "Standardise procedures across every contract.",
        image: "/images/products/shared/facilities-management-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/facilities-management",
        }
    },
    {
        category: "By Industry",
        title: "Venues & events",
        description: "Keep venue procedures current and searchable.",
        image: "/images/products/shared/venues-events-industry-icon.svg",
        button: {
            text: "Explore",
            href: "/solutions/by-industry/venues-and-events",
        }
    }
]

export const contentGridData2 = [
    {
        title: "Inconsistent standards",
        description: "Hold every site to the same standard.",
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

export const testimonialData = [
    {
        rating: 5,
        name: "Emma Bijker",
        position: "Senior Customer Experience & Training Specialist, The Body Shop",
        quote: "Serve First has transformed how we manage customer experience, giving us clear insights that have driven tangible results for our business.",
    }
]

export const faqData = [
    {
        question: "What is knowledge base software?",
        answer: "Knowledge base software keeps procedures, policies and training in one searchable place, so teams find the right answer without asking around. Serve First adds version control and role-based access, so each team sees the current answer that applies to them."
    },
    {
        question: "How does it keep content current?",
        answer: "Version control keeps a single current answer live, so old guidance is retired rather than left to confuse, and teams are never working from an out-of-date document."
    },
    {
        question: "Can different teams see different content?",
        answer: "Yes. Role-based access means each team sees what applies to them and nothing out of date, so a site manager and a regional lead each get the guidance relevant to their role."
    },
    {
        question: "How do teams find the right answer quickly?",
        answer: "Content is centralised and searchable, and guidance links straight from the tickets and tasks teams are already working on, so the answer is found in seconds, in context."
    },
    {
        question: "Can EVA answer from our documentation?",
        answer: "Yes. You can ask EVA a policy or procedure question and get the answer drawn from your own documentation, with the source shown, so you can trust where it came from."
    },
    {
        question: "Does it work across multiple sites?",
        answer: "Serve First is built for multi-site operations. Every site works from the same current answer in one place, so standards stay consistent however many locations you run."
    }
]