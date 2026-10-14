// Components
import Banner from "@/components/sections/banner/banner";
import FeatureList from "@/components/sections/feature-list/feature-list";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import RoleContext from "@/components/sections/role-context/role-context";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import EvaSpotlight from "@/components/sections/eva-spotlight/eva-spotlight";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import Testimonials from "@/components/sections/testimonials/testimonials";
import ContentGrid from "@/components/sections/content-grid/content-grid";
import FAQ from "@/components/sections/faq/faq";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Data
import {
    howItWorksData,
    featureListData,
    roleContextData,
    challengeFrameData,
    productHighlightData,
    moduleStatsData,
    contentGridData,
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";

export async function generateMetadata() {
    const metadata = await getPageMetadata("/products/customer-experience/client-connect");
    const description = "Automate B2B feedback, relationships and NPS with our enterprise feedback management system: Client Connect. Drive insight, engagement and growth";
    const keywords = metadata.keywords?.map((keyword) => keyword === "B2B feedback programmes" ? "B2B feedback programs" : keyword);

    return {
        ...metadata,
        description,
        keywords,
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

export default async function ClientConnect() {

    return (

        <>

            <Banner
                eyebrow="Customer experience platform"
                title="Hear from the clients you serve"
                description="Client Connect lets you run structured feedback programs for your B2B accounts, sending branded invitations, tracking every send and reporting on the results."
                image="/images/products/customer-experience/client-connect/client-connect-cover.png"
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
                eyebrow="Client Connect capability"
                title="B2B client feedback and NPS programs"
                description="Run structured feedback programs for your B2B accounts, send branded invitations, and read every response beside the delivery behind it."
                data={roleContextData}
                btnPrimary={{
                    text: "Get a demo",
                    href: "/get-a-demo",
                }}
            />

            <HowItWorks
                eyebrow="How a program runs"
                title="One workflow<span class='colorPrimary'>,</span> from invite to outcome"
                description="A managed invitation workflow, built on the survey engine."
                data={howItWorksData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Client feedback that lives apart from delivery"
                data={challengeFrameData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "EVA",
                    "title": "Ask how every account is really trending",
                    "description": "Ask EVA how each account is trending and get a clear, evidence-backed read across your whole client base.",
                    "image": "/images/products/customer-experience/client-connect/client-connect-eva.png",
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

            <ModuleStats
                eyebrow="The difference"
                title="What changes when clients feel heard"
                description="The outcomes teams see once client feedback sits next to what you delivered."
                data={moduleStatsData}
                btnPrimary={null}
            />

            <Testimonials
                theme="primary"
                btnPrimary={null}
            />

            <ContentGrid
                eyebrow="By challenge"
                title="Solve the problem you came here with"
                button={null}
                data={contentGridData}
            />

            <FAQ
                eyebrow="Common questions"
                title="Client Connect<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See what Serve First can do for your accounts"
                description="Book a personalized demo and we'll show you how Client Connect runs feedback across your B2B accounts."
            />

        </>

    )

}