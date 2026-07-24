import {
    checkCircleBrokenIcon,
    messageAlertSquareIcon,
    notificationTextIcon
} from "@/utils/icons";

export const challengeFrameData = [
    {
        eyebrow: "Challenge 01",
        title: "Insight with no owner",
        description: "A list of findings is not a plan. Without an owner and a deadline, the fix never gets picked up.",
        tags: []
    },
    {
        eyebrow: "Challenge 02",
        title: "Actions lost across tools",
        description: "Tasks scattered across email, chat and spreadsheets mean things slip, and no one has the full picture.",
        tags: []
    },
    {
        eyebrow: "Challenge 03",
        title: "No proof it got done",
        description: "When the issue returns, you cannot show what was done, by whom, or whether it ever closed.",
        tags: []
    }
]

export const howItWorksData = [
    {
        number: "01",
        title: "Capture",
        description: "Bring every customer, operational and market signal into one place, across all your sites.",
        image: "/images/how-it-works/capture/capture-capture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: {
            text: "See how capture works",
            href: "/how-it-works/capture",
        }
    },
    {
        number: "02",
        title: "Analyse",
        description: "EVA reads every signal as it lands, scores sentiment and surfaces the themes that matter, in plain English.",
        image: "/images/how-it-works/capture/capture-analyse.png",
        imageWidth: 768,
        imageHeight: 768,
        button: {
            text: "See how analysis works",
            href: "/how-it-works/analyse",
        }
    },
    {
        number: "03",
        title: "Action",
        description: "Insight becomes tasks, workflows and proof of completion, routed to the right person on the frontline.",
        image: "/images/how-it-works/capture/capture-action.png",
        imageWidth: 768,
        imageHeight: 768,
        button: {
            text: "See how action works",
            href: "/get-a-demo",
        }
    },
]

export const contentGridData = [
    {
        title: "Turn insight into a plan",
        description: "EVA recommends the next step and Serve First shapes it into a role-based plan, so the right action lands with the right role at the right site.",
        image: "/images/how-it-works/capture/capture-collect-everywhere.svg",
        button: null
    },
    {
        title: "Route to the right person",
        description: "Each task is assigned to the team or person who can resolve it and reaches them on the frontline, not buried in an inbox, with a clear owner and deadline.",
        image: "/images/how-it-works/capture/capture-capture-realtime.svg",
        button: null
    },
    {
        title: "Track to proof of completion",
        description: "Every action is tracked through to done, with proof of completion, so nothing is marked closed without evidence.",
        image: "/images/how-it-works/capture/capture-tie-it-to-the-site.svg",
        button: null
    },
    {
        title: "Close the loop",
        description: "The result flows back into the operating picture, so you can see the score move after the fix and prove what changed.",
        image: "/images/how-it-works/capture/capture-hand-it-to-analysis.svg",
        button: null
    },
]

export const productHighlightData = [
    {
        icon: messageAlertSquareIcon,
        eyebrow: "Action Plans",
        title: "Turn what you learn into a structured improvement plan, with steps, owners and progress tracked through to resolution.",
        linkText: "Explore",
        link: "/get a demo",
    },
    {
        icon: checkCircleBrokenIcon,
        eyebrow: "Task management",
        title: "Turn any insight into a task with an owner, a deadline and proof of completion, routed to the right site and role.",
        linkText: "Explore",
        link: "/products/operational-excellence/task-management",
    },
    {
        icon: notificationTextIcon,
        eyebrow: "Helpdesk",
        title: "Bring customer messages, survey responses and issues into one inbox, so every case is owned, answered and resolved.",
        linkText: "Explore",
        link: "/products/operational-excellence/helpdesk",
    },
]

export const howItWorksData2 = [
    {
        eyebrow: "Built to close the loop",
        eyebrowHasDash: true,
        title: "Role-based plans",
        description: "Insight becomes a plan shaped around each role, so people get the actions that are theirs to own.",
        image: "/images/how-it-works/action/action-role-based-plans.png",
        imageWidth: 768,
        imageHeight: 384,
        button: null
    },
    {
        eyebrow: "Built to close the loop",
        eyebrowHasDash: true,
        title: "Routed to the frontline",
        description: "Every action lands with the person who can resolve it, with a clear owner and deadline.",
        image: "/images/how-it-works/action/action-routed-to-the-frontline.png",
        imageWidth: 768,
        imageHeight: 576,
        button: null
    },
    {
        eyebrow: "Built to close the loop",
        eyebrowHasDash: true,
        title: "Proof of completion",
        description: "Nothing is closed without evidence, so you can show what was done and when.",
        image: "/images/how-it-works/action/action-proof-of-completion.png",
        imageWidth: 768,
        imageHeight: 576,
        button: null
    }, {
        eyebrow: "Built to close the loop",
        eyebrowHasDash: true,
        title: "Closed loop",
        description: "The result feeds back into the operating picture, so you see the score move after the fix.",
        image: "/images/how-it-works/action/action-closed-loop.png",
        imageWidth: 768,
        imageHeight: 576,
        button: null
    },
    {
        eyebrow: "Built to close the loop",
        eyebrowHasDash: true,
        title: "One operating picture",
        description: "Capture, analysis and action joined up, so the loop closes in one place, not across tools.",
        image: "/images/how-it-works/action/action-one-operating-picture.png",
        imageWidth: 768,
        imageHeight: 576,
        button: null
    },
    {
        eyebrow: "Built to close the loop",
        eyebrowHasDash: true,
        title: "EVA recommends, you decide",
        description: "EVA suggests the next step and the reason. Your team decides, assigns and owns it.",
        image: "/images/how-it-works/action/action-eva-recommends-you-decide.png",
        imageWidth: 768,
        imageHeight: 420,
        button: null
    }
]

export const industryCardsData = [
    {
        eyebrow: "Retail",
        title: "Route store fixes to the right manager and prove they closed, site by site.",
        image: "/images/home/home-retail.png",
        imageFit: "cover",
        button: {
            text: "Explore Retail",
            href: "/solutions/by-industry/retail",
            target: "_self",
        }
    },
    {
        eyebrow: "Leisure & hospitality",
        title: "Act on guest issues while they are still on site, with a clear owner for each fix.",
        image: "/images/home/home-leisure-and-hospitality.png",
        button: {
            text: "Explore Leisure & hospitality",
            href: "/solutions/by-industry/leisure-and-hospitality",
            target: "_self",
        }
    },
    {
        eyebrow: "Restaurants",
        title: "Assign fixes by site and shift, and prove standards were put right.",
        image: "/images/home/home-restaurants.png",
        button: {
            text: "Explore Restaurants",
            href: "/solutions/by-industry/restaurants",
            target: "_self",
        }
    },
    {
        eyebrow: "Healthcare",
        title: "Turn patient and visitor feedback into owned actions, tracked to completion across every site.",
        image: "/images/home/home-healthcare.png",
        button: {
            text: "Explore Healthcare",
            href: "/solutions/by-industry/healthcare",
            target: "_self",
        }
    },
    {
        eyebrow: "Facilities management",
        title: "Route service and standards actions across a dispersed estate, tracked to done.",
        image: "/images/home/home-facilities-management.png",
        button: {
            text: "Explore Facilities management",
            href: "/solutions/by-industry/facilities-management",
            target: "_self",
        }
    },
    {
        eyebrow: "Venues & events",
        title: "Act on issues live during an event, with owners and proof for every fix.",
        image: "/images/home/home-venue-and-events.png",
        button: {
            text: "Explore Venues & events",
            href: "/solutions/by-industry/venues-and-events",
            target: "_self",
        }
    },
]

export const faqData = [
    {
        question: "What does action mean in Serve First?",
        answer: "Action is the third stage of the Serve First loop. It turns insight into role-based plans and tasks, routed to the right person on the frontline, tracked through to proof of completion, so the loop closes and you can show what changed."
    },
    {
        question: "How is this different from a tool that just gives insights?",
        answer: "Most tools stop at the insight. Serve First takes the next step: it shapes the insight into a role-based plan, assigns each action with an owner and deadline, and tracks it to proof of completion, so knowing actually becomes doing."
    },
    {
        question: "Does EVA carry out actions on its own?",
        answer: "No. EVA is advisory. It recommends the next step and the reason why. Your team decides whether to act, assigns the task and owns it. Nothing is actioned automatically without a person."
    },
    {
        question: "What is proof of completion?",
        answer: "It means an action is only closed with evidence that it was done, such as a note, photo or check, rather than just marking a task complete. Records are time-stamped and site-tagged, so they are available as evidence when you need them."
    },
    {
        question: "Can I see whether the fix actually worked?",
        answer: "Yes. Once an action closes, the result feeds back into the operating picture, so you can see the score move after the fix and prove the change, by site and across the estate."
    },
    {
        question: "Does it work across many sites and roles?",
        answer: "Yes. Serve First is built for multi-site operators. Actions are routed by site and role, so each location and each team gets the fixes that are theirs to own, all tracked in one operating picture."
    }
]