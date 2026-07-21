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
    testimonialData,
    faqData
} from "./data";

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
                    href: "/how-it-works/analyse",
                }}
                buttonSecondary={{
                    text: null
                }}
            />

            <FeatureList
                data={featureListData}
            />

            <RoleContext
                eyebrow="Knowledge Base capability"
                title="Keep every team on the current answer"
                description="Keep SOPs, policies and training in one searchable place, so frontline teams find the current answer in seconds without asking around."
                data={roleContextData}
                btnPrimary={{
                    text: "Get a demo",
                    href: "/get-a-demo",
                }}
            />

            <HowItWorks
                eyebrow="How knowledge works"
                title="Knowledge that stays current and found"
                description="Knowledge that stays current and stays found."
                data={howItWorksData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Procedures exist, but no one finds them"
                data={challengeFrameData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "EVA AI",
                    "title": "Ask, and get the answer from your own docs",
                    "description": "Ask EVA a policy or procedure question and get the right answer, cited straight from your documentation.",
                    "image": "/images/products/operational-excellence/knowledge-base/knowledge-base-eva.png",
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
                title="More of the platform your teams can use."
                description="Knowledge Base sits in the same platform as the rest of Serve First, so the right answer is linked to the work it supports."
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
                data={testimonialData}
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Knowledge Base, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See what Serve First can do for your teams"
                description="Book a personalised demo and we will show you how Knowledge Base keeps every site working to the same answer."
            />

        </>

    )

}