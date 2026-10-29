// Components
import Banner from "@/components/sections/banner/banner";
import EvaSpotlight from "@/components/sections/eva-spotlight/eva-spotlight";
import FeatureList from "@/components/sections/feature-list/feature-list";
import Testimonials from "@/components/sections/testimonials/testimonials";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import FAQ from "@/components/sections/faq/faq";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Data
import {
    featureListData,
    howItWorksData,
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";


export async function generateMetadata() {
    const metadata = await getPageMetadata("/eva");
    const title = "EVA: AI Analyst For Multi-Location Operations - Serve First";
    const description = "EVA does the analysis, so you aren't juggling reports. Ask in plain language and EVA gives you the latest status across every location";
    return {
        ...metadata,
        title,
        description,
        openGraph: {
            ...metadata.openGraph,
            title,
            description,
        },
        twitter: {
            ...metadata.twitter,
            title,
            description,
        },
    };
}

export default function Eva() {

    return (

        <>

            <Banner
                eyebrow="EVA, your always-on analyst"
                title="Know what is happening. Know what to do next"
                description="EVA does the analysis, so you aren't juggling reports. Ask in plain language and EVA gives you the latest status across every location, what needs your attention, and a plan of action shaped by your role."
                image="/images/eva/eva-cover.png"
                imageSizing="contain"
                buttonSecondary={{ text: null }}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "Meet EVA",
                    "title": "More than a chat bot. An analyst that hands you a plan",
                    "htmlDescription": "<p>EVA does the analysis across every location, so you start from the answer, not a pile of reports.</p> <p>Ask in plain language. EVA gives the status, what is driving it and the next actions by role.</p>",
                    "image": "/images/eva/eva-eva.png",
                    "imageWidth": 600,
                    "imageHeight": 600,
                    "imageSizing": "contain",
                    "button": {
                        "text": "Request a demo",
                        "href": "/get-a-demo",
                    }
                }}
            />

            <FeatureList
                eyebrow="What EVA can do"
                title="Know what is happening<span class='colorPrimary'>.</span> Know what to do next"
                data={featureListData}
            />

            <HowItWorks
                eyebrow="How EVA works"
                title="From a question to a grounded answer"
                description="Three steps, every single time you ask EVA."
                data={howItWorksData}
                imageSizing="contain"
            />

            <Testimonials btnPrimary={null} />

            <FAQ
                eyebrow="Questions CX leaders ask"
                title="EVA<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See EVA turn your results into a plan of action"
                description="Book a personalized demo and we'll let EVA analyze your results and show you the plan it builds for your team."
            />

        </>

    )

}