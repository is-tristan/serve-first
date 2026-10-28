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
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";


export async function generateMetadata() {
    const metadata = await getPageMetadata("/products/customer-experience/survey");
    const description = "Build, send and analyze customer surveys across web, kiosk, email and SMS with Serve First. Logic branching, real-time results and sentiment analysis.";

    return {
        ...metadata,
        description,
        openGraph: {
            ...metadata.openGraph,
            description,
        },
        twitter: {
            ...metadata.twitter,
            description,
        },
    };
}

export default async function Survey() {

    return (

        <>

            <Banner
                eyebrow="Customer experience platform"
                title="Ask the right questions, everywhere"
                description="Reach customers on web, kiosk, email and SMS, and Serve First turns every response into structured insight your teams use the same day."
                image="/images/products/customer-experience/survey/survey-cover.png"
                imageSizing="contain"
                buttonPrimary={{
                    text: "See it in action",
                    href: "/get-a-demo",
                }}
                buttonSecondary={{
                    text: null
                }}
            />

            <FeatureList
                data={featureListData}
            />

            <RoleContext
                eyebrow="Survey capabilities"
                title="Ask the right question<span class='colorPrimary'>,</span> on every channel"
                description="Reach customers on web, kiosk, email and SMS, and read what they tell you the same day, not at month end."
                data={roleContextData}
                btnPrimary={{
                    text: "Get a demo",
                    href: "/get-a-demo",
                }}
            />

            <HowItWorks
                eyebrow="How it works"
                title="One platform<span class='colorPrimary'>,</span> from question to insight"
                description="From draft to insight without leaving the platform."
                data={howItWorksData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Plenty of feedback<span class='colorPrimary'>,</span> but no change on the floor"
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

                <BlogGrid path="/products/customer-experience/survey" />

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
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Customer surveys<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See what Serve First can do for your locations"
                description="Book a personalized demo and we'll show you how surveys work across your channels and your locations today."
            />

        </>

    )

}