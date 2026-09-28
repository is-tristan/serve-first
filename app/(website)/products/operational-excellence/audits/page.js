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


export async function generateMetadata() {
    return getPageMetadata("/products/operational-excellence/audits");
}

export default async function Audits() {

    return (

        <>

            <Banner
                eyebrow="Operational excellence"
                title="Consistent standards at every site"
                description="Serve First task management routes the right action to the right person at every site, with deadlines, ownership and progress you can see, not chase."
                image="/images/products/operational-excellence/audits/audits-cover.png"
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
                eyebrow="Audit capabilities"
                title="Hold every site to one standard"
                description="Score every site against your standards on any device, turn a failed check into a fix, and see which locations need attention now."
                data={roleContextData}
                btnPrimary={{
                    text: "Get a demo",
                    href: "/get-a-demo",
                }}
            />

            <HowItWorks
                eyebrow="How a task moves to done"
                title="The step other platforms leave out"
                description="The last step that most platforms leave out."
                data={howItWorksData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="The standards problem every operator knows"
                data={challengeFrameData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "EVA",
                    "title": "Ask which of your sites are really slipping",
                    "description": "Ask EVA which sites are slipping and get a clear, evidence-backed answer drawn from every audit you run.",
                    "image": "/images/products/operational-excellence/audits/audits-eva.png",
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
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Digital audits<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See what Serve First can do for your standards"
                description="Book a personalised demo and we will show you how audits run across your estate, your sites and your team."
            />

        </>

    )

}