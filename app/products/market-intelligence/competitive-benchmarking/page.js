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
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";


export const metadata = getPageMetadata("/products/market-intelligence/competitive-benchmarking");

export default async function ReviewMonitoring() {

    return (

        <>

            <Banner
                eyebrow="Market intelligence platform"
                title="See how each of your sites compares to the competition next door"
                description="Serve First looks at the public reviews for your locations and their nearby rivals, then shows you, site by site, where you are ahead, where you are behind and what is driving the difference."
                image="/images/products/market-intelligence/competitive-benchmarking/competitive-benchmarking-cover.png"
                imageSizing="Contain"
                buttonPrimary={{
                    text: "See it in action",
                    href: "/get-a-demo",
                }}
                buttonSecondary={{
                    text: null
                }}
            />

            <ChallengeFrame
                eyebrow="The problem"
                title="You know your own scores. You cannot see the shop next door"
                data={challengeFrameData}
            />

            <FeatureList
                data={featureListData}
            />

            <RoleContext
                eyebrow="How the benchmark works"
                title="See how each site compares locally"
                description="See how every location compares with its real local rivals, built for you from public sources you can check, with no surveys to send."
                data={roleContextData}
                btnPrimary={{
                    text: "Get a demo",
                    href: "/get-a-demo",
                }}
            />

            <HowItWorks
                eyebrow="From comparison to a fix"
                title="Benchmarking is only useful if it changes something"
                description="Serve First does not stop at the chart. It turns the gap into something each site can act on."
                data={howItWorksData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "EVA",
                    "title": "Just ask how you compare",
                    "description": "Ask EVA where you lead and where rivals are winning, and get a plain answer with the reason behind it. EVA recommends where to focus; your team decides what to do.",
                    "image": "/images/products/market-intelligence/competitive-benchmarking/competitive-benchmarking-eva.png",
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
                eyebrow="Part of the platform"
                title="It connects to the rest of Serve First"
                description="The functions CX leaders rely on most, connected so insight turns into action."
                linkText={null}
                data={productHighlightData}
            />

            <ContentGrid
                eyebrow="By industry"
                title="See it in your sector"
                button={null}
                colCount={3}
                data={contentGridData}
            />

            <Testimonials btnPrimary={null} />

            <Suspense fallback={<IsLoading />}>

                <BlogGrid />

            </Suspense>

            <FAQ
                eyebrow="Common questions"
                title="Competitive benchmarking, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                title="See how your sites compare in their local market"
                description="Book a demo and we will benchmark your locations against the rivals that matter to them."
            />

        </>

    )

}