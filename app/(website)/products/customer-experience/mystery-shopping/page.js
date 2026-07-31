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
    contentGridData2,
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";


export const metadata = getPageMetadata("/products/customer-experience/mystery-shopping");

export default async function MysteryShopping() {

    return (

        <>

            <Banner
                eyebrow="Customer experience platform"
                title="See your locations the way customers do"
                description="Serve First mystery shopping puts a trained assessor in your locations, scoring the experience against your standards and showing you exactly where service slips."
                image="/images/products/customer-experience/mystery-shopping/mystery-shopping-cover.png"
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
                eyebrow="Mystery shopping capability"
                title="See your sites the way customers do"
                description="Send trained assessors into every site, score the real experience against your standards, and see exactly where service slips."
                data={roleContextData}
                btnPrimary={{
                    text: "Get a demo",
                    href: "/get-a-demo",
                }}
            />

            <HowItWorks
                eyebrow="How a visit works"
                title="Every visit<span class='colorPrimary'>,</span> scored to your standard"
                description="From scenario to scorecard, every visit follows your standards."
                data={howItWorksData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Visits that score you<span class='colorPrimary'>,</span> but rarely change you"
                data={challengeFrameData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "EVA",
                    "title": "Ask what your visits are really revealing",
                        "description": "Ask EVA what your visits reveal across the estate and get a clear, evidence-backed answer in seconds.",
                    "image": "/images/products/customer-experience/mystery-shopping/mystery-shopping-eva.png",
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
                title="Mystery shopping<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See what Serve First can do for your locations"
                description="Book a personalised demo and we will show you how mystery shopping fits your estate and your standards."
            />

        </>

    )

}