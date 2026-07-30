import {
    aiIcon,
    clipBoardCheckIcon,
    messageAlertSquareIcon,
    userRightIcon,
    messageSmileSquareIcon,
} from "@/utils/icons";

export const featureListData = [
    {
        eyebrow: "Ask in plain language",
        title: "Answers from your data",
        description: "Ask the way you would ask a colleague. EVA reads NPS, locations, surveys, users and activity across every site, and answers with the numbers.",
        image: "/images/eva/eva-plain.png",
        imageWidth: 576,
        imageHeight: 576,
        list: [
            {
                text: "NPS and CSAT",
            },
            {
                text: "Locations and sites",
            },
            {
                text: "Surveys and activity",
            },
            {
                text: "Users and permissions",
            },
        ],
        button: {
            text: "Show me",
            href: "/get-a-demo",
            target: "_self",
        }
    },
    {
        eyebrow: "From your procedures",
        title: "Answers from your Knowledge Base",
        description: "Ask how something should be done. EVA draws from the procedures you have uploaded and shows the source documents behind the answer.",
        image: "/images/eva/eva-procedures.png",
        imageWidth: 768,
        imageHeight: 768,
        list: [
            {
                text: "Policies and SOPs",
            },
            {
                text: "Grounded in your docs",
            },
            {
                text: "Sources shown",
            },
            {
                text: "Answers you can trust",
            },
        ],
        button: {
            text: "Show me",
            href: "/get-a-demo",
            target: "_self",
        }
    },
    {
        eyebrow: "More than answers",
        title: "A plan shaped by your role",
        description: "EVA pulls its findings into the next actions that matter to your role, so you leave with a plan, not just a number.",
        image: "/images/eva/eva-answers.png",
        imageWidth: 600,
        imageHeight: 600,
        list: [
            {
                text: "Shaped by role",
            },
            {
                text: "The next actions",
            },
            {
                text: "Across every site",
            },
            {
                text: "Built to do more over time",
            },
        ],
        button: {
            text: "Show me",
            href: "/get-a-demo",
            target: "_self",
        }
    }
]
export const howItWorksData = [
    {
        number: "01",
        title: "Ask",
        description: "Type your question in plain language, with the company, region and dates you are viewing already in context.",
        image: "/images/eva/eva-ask.png",
        imageWidth: 500,
        imageHeight: 500,
        button: null
    },
    {
        number: "02",
        title: "Understand",
        description: "EVA works out what you are asking, then reads the right source: your live data, your Knowledge Base, or both.",
        image: "/images/eva/eva-understand.png",
        imageWidth: 500,
        imageHeight: 500,
        button: null
    },
    {
        number: "03",
        title: "Answer",
        description: "EVA replies in plain English, with the numbers and the source documents behind the answer, in seconds.",
        image: "/images/eva/eva-answer.png",
        imageWidth: 500,
        imageHeight: 500,
        button: null
    },
]

export const faqData = [
    {
        question: "What is EVA?",
        answer: "EVA is the AI analyst inside Serve First. You ask in plain language and EVA reads your results across every site, explains what is happening and points to the next actions for your role, so you leave with a plan rather than just a number."
    },
    {
        question: "What can I ask EVA?",
        answer: "Ask the way you would ask a colleague: how a region is doing, which sites are slipping, what your NPS or survey results show, or how a procedure should be followed. EVA answers from your live data and from the Knowledge Base you have uploaded."
    },
    {
        question: "Where do EVA's answers come from?",
        answer: "From your own data and your own documents. EVA reads your live results, NPS, locations, surveys, users and activity, and your uploaded procedures, and shows the source documents behind a Knowledge Base answer, so you can see what it is based on."
    },
    {
        question: "Does EVA just give numbers, or tell me what to do?",
        answer: "Both. EVA explains what is happening, then points to the next actions that matter to your role. It recommends; your team decides what to assign and to whom, so you stay in control of the work."
    },
    {
        question: "Is EVA accurate and can I trust the answers?",
        answer: "EVA answers from your data and your documents rather than guessing, and Knowledge Base answers come with the source shown, so you can check the basis of any reply. It is built to do more over time as the platform grows."
    },
    {
        question: "Does EVA work across all our sites?",
        answer: "Yes. EVA reads your results across every site, so you can ask about one location, a region or the whole estate and get an answer with the context of what you are viewing already applied."
    }
]