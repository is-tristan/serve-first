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
    return getPageMetadata("/products/operational-excellence/task-management");
}

export default async function TaskManagement() {

    return (

        <>

            <Banner
                eyebrow="Operational excellence"
                title="Where insight finally becomes action"
                description="Score every site against your standards on mobile, capture photo proof, and turn each f ailed check into a corrective action with an owner and a deadline."
                image="/images/products/operational-excellence/task-management/task-management-cover.png"
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
                eyebrow="Task management capability"
                title="Turn insight into tracked action"
                description="Assign each fix to a location and owner, set priorities and deadlines, and see progress across every location in one view."
                data={roleContextData}
                btnPrimary={{
                    text: "Request a demo",
                    href: "/get-a-demo",
                }}
            />

            <HowItWorks
                eyebrow="How a task moves to done"
                title="The step other platforms leave out"
                description={null}
                data={howItWorksData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Plenty of insight<span class='colorPrimary'>,</span> but follow-through that slips"
                data={challengeFrameData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "EVA",
                    "title": "Ask what is really still outstanding now",
                    "description": "Ask EVA what is outstanding across your locations and get a clear picture of what still needs to happen.",
                    "image": "/images/products/operational-excellence/task-management/task-management-eva.png",
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
                description="Task management sits in the same platform as the rest of Serve First, so every signal can become a tracked action with an owner."
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

                <BlogGrid path="/products/operational-excellence/task-management" />

            </Suspense>

            <Testimonials
                theme="primary"
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Task management<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See what Serve First can do for follow-through"
                description="Book a personalized demo and we'll show you how tasks move from insight to done across your locations."
            />

        </>

    )

}