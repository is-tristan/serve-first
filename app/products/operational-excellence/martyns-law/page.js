// React
import { Suspense } from "react";

// Components
import Banner from "@/components/sections/banner/banner";
import FeatureList from "@/components/sections/feature-list/feature-list";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
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
    challengeFrameData,
    productHighlightData,
    contentGridData,
    contentGridData2,
    testimonialData,
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";


export const metadata = getPageMetadata("/products/operational-excellence/martyns-law");

export default async function MartynsLaw() {

    return (

        <>

            <Banner
                eyebrow="Operational excellence"
                title="Martyn's Law, evidenced at every site"
                description="Serve First helps you meet Martyn's Law obligations with compliance checklists, training records and evidence capture, so duty of care is documented, not assumed."
                image="/images/products/operational-excellence/martyns-law/martyns-law-cover.png"
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
                eyebrow="What the law requires"
                title="New obligations, real accountability for venues"
                data={challengeFrameData}
            />

            <FeatureList
                data={featureListData}
            />

            <HowItWorks
                eyebrow="How it is evidenced"
                title="Obligation to evidence, every venue"
                description="From obligation to evidence, across every venue."
                data={howItWorksData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "EVA",
                    "title": "Ask exactly where each venue really stands",
                    "description": "Ask EVA where each venue stands on compliance and get an evidence-backed answer drawn from your records.",
                    "image": "/images/products/operational-excellence/martyns-law/martyns-law-eva.png",
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
                eyebrow="More from Serve First"
                title="More of the platform your teams can use"
                description="Martyn's Law compliance sits in the same platform as the rest of Serve First, so readiness connects to the checks and evidence behind it."
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
                data={testimonialData}
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Martyn's Law, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See what Serve First can do for compliance"
                description="Book a personalised demo and we will show you how Serve First evidences Martyn's Law across your venues."
            />

        </>

    )

}