// React
import { Suspense } from "react";

// Components
import Banner from "@/components/sections/banner/banner";
import FeatureList from "@/components/sections/feature-list/feature-list";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import RoleContext from "@/components/sections/role-context/role-context";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import EvaSpotlight from "@/components/sections/eva-spotlight/eva-spotlight";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import ContentGrid from "@/components/sections/content-grid/content-grid";
import BlogGrid from "@/components/dynamic-sections/blog-grid";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import Testimonials from "@/components/sections/testimonials/testimonials";
import FAQ from "@/components/sections/faq/faq";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";
import IsLoading from "@/components/handlers/is-loading";

// Data
import {
    howItWorksData,
    featureListData,
    roleContextData,
    challengeFrameData,
    productHighlightData,
    contentGridData,
    contentGridData2,
    moduleStatsData,
    testimonialData,
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";


export const metadata = getPageMetadata("/products/customer-experience/client-connect");

export default async function ClientConnect() {

    return (

        <>

            <Banner
                eyebrow="Customer experience platform"
                title="Hear from the clients you serve"
                description="Client Connect lets you run structured feedback programmes for your B2B accounts, sending branded invitations, tracking every send and reporting on the results."
                image="/images/products/customer-experience/client-connect/client-connect-cover.png"
                imageSizing="Contain"
                buttonPrimary={{
                    text: "See it in action",
                    href: "/get-a-demo",
                }}
                buttonSecondary={{
                    text: null
                }}
            />

            {/* <FeatureList
                data={featureListData}
            />

            <RoleContext
                eyebrow="Survey capabilities"
                title="Ask the right question, on every channel"
                description="Reach customers on web, kiosk, email and SMS, and read what they tell you the same day, not at month end."
                data={roleContextData}
                btnPrimary={{
                    text: "Get a demo",
                    href: "/get-a-demo",
                }}
            />

            <HowItWorks
                eyebrow="How it works"
                title="One platform, from question to insight"
                description="From draft to insight without leaving the platform."
                data={howItWorksData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Plenty of feedback, but no change on the floor"
                data={challengeFrameData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "EVA",
                    "title": "Ask what your customers are really saying",
                    "description": "EVA reads every survey response as it lands and tells you, in plain English, what your customers are saying.",
                    "image": "/images/products/customer-experience/survey/survey-eva-ai.png",
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

            <ModuleStats
                eyebrow="The difference"
                title="What changes when data drives action"
                description="The outcomes teams see once every signal ends in a tracked fix."
                data={moduleStatsData}
                btnPrimary={null}
            />

            <Testimonials
                theme="primary"
                data={testimonialData}
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Customer surveys, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See what Serve First can do for your locations"
                description="Book a personalised demo and we will show you how surveys work across your channels and your sites today."
            /> */}

        </>

    )

}