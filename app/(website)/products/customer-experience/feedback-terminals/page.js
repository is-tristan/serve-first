// React
import { Suspense } from "react";

// Components
import Banner from "@/components/sections/banner/banner";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import RoleContext from "@/components/sections/role-context/role-context";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import EvaSpotlight from "@/components/sections/eva-spotlight/eva-spotlight";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import ContentGrid from "@/components/sections/content-grid/content-grid";
import BlogGrid from "@/components/dynamic-sections/blog-grid";
import Testimonials from "@/components/sections/testimonials/testimonials";
import FAQ from "@/components/sections/faq/faq";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";
import IsLoading from "@/components/handlers/is-loading";

// Data
import {
    howItWorksData,
    roleContextData,
    challengeFrameData,
    productHighlightData,
    contentGridData,
    contentGridData2,
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";


export const metadata = getPageMetadata("/products/customer-experience/feedback-terminals");

export default async function FeedbackTerminals() {

    return (

        <>

            <Banner
                eyebrow="Customer experience platform"
                title="Capture feedback the moment it happens"
                description="Honest, in-the-moment reactions from every location, routed to the people who can fix them before a customer leaves unhappy."
                image="/images/products/customer-experience/feedback-terminals/feedback-terminals-cover.png"
                imageSizing="contain"
                buttonPrimary={{
                    text: "See it in action",
                    href: "/get-a-demo",
                }}
                buttonSecondary={{
                    text: null
                }}
            />

            <RoleContext
                eyebrow="Terminal capabilities"
                title="Capture honest feedback the moment it happens"
                description="Catch how customers feel at every location the moment they act, and route a low score to the right manager before they leave."
                data={roleContextData}
                btnPrimary={{
                    text: "Get a demo",
                    href: "/get-a-demo",
                }}
            />

            <HowItWorks
                eyebrow="How it works on site"
                title="From the floor to the fix<span class='colorPrimary'>,</span> without delay"
                description="Three connected stages, no manual collection."
                data={howItWorksData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="In-the-moment feedback that goes nowhere"
                data={challengeFrameData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "EVA",
                    "title": "Ask what your scores are really telling you",
                    "description": "EVA reads every terminal response across your estate and answers, in plain English, what is driving your scores.",
                    "image": "/images/products/customer-experience/feedback-terminals/feedback-terminals-eva.png",
                    "imageWidth": 768,
                    "imageHeight": 768,
                    "imageSizing": "contain",
                    "button": {
                        "text": "Meet EVA",
                        "href": "/eva",
                    }
                }}
            />

            <ProductHighlight
                eyebrow="What you get"
                title="The toolkit for customer experience leaders"
                description="The functions CX leaders rely on most, connected so insight turns into action."
                linkText={null}
                colCount={4}
                data={productHighlightData}
            />

            <ContentGrid
                eyebrow="By industry"
                title="See it in your sector"
                button={null}
                colCount={3}
                data={contentGridData}
            />

            <ContentGrid
                eyebrow="By challenge"
                title="Solve the problem you came here with"
                button={null}
                data={contentGridData2}
            />

            <Suspense fallback={<IsLoading />}>

                <BlogGrid />

            </Suspense>

            <Testimonials
                theme="primary"
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Feedback terminals<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See what Serve First can do for your locations"
                description="Book a personalised demo and we will show you how terminals work with your estate, your data and your team."
            />

        </>

    )

}