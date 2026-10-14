import { Suspense } from "react";

// Components
import Banner from "@/components/sections/banner/banner";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import ContentGrid from "@/components/sections/content-grid/content-grid";
import EvaSpotlight from "@/components/sections/eva-spotlight/eva-spotlight";
import IndustryCards from "@/components/sections/industry-cards/industry-cards";
import Testimonials from "@/components/sections/testimonials/testimonials";
import BlogGrid from "@/components/dynamic-sections/blog-grid";
import IsLoading from "@/components/handlers/is-loading";
import FAQ from "@/components/sections/faq/faq";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Data
import {
    challengeFrameData,
    howItWorksData,
    contentGridData,
    howItWorksData2,
    industryCardsData,
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";

export async function generateMetadata() {
    const metadata = await getPageMetadata("/how-it-works/analyze");
    const title = "Analyze Customer Feedback and Find the Cause | Serve First";
    const description = "Go from scores to the reason behind them. Serve First scores sentiment in real time and surfaces themes per location and across your business.";

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

export default function Analyze() {

    return (

        <>

            <Banner
                eyebrow="How it works · Analyze"
                title="From scores to the reason behind them"
                description="Analyze is stage two. EVA reads every signal as it lands, scores sentiment and surfaces the themes that matter, in plain English, so you see not just what happened across your locations but why."
                image="/images/how-it-works/analyse/analyse-cover.png"
                imageSizing="contain"
            />

            <ChallengeFrame
                eyebrow="The analysis problem"
                title="A pile of data isn't an answer"
                description="Capturing every signal is only half the job. Most multi-location operators end up with dashboards full of scores and no time to work out what they mean. The number tells you something dropped. It doesn't tell you why, where, or what to do next. So the insight sits unread until the next review, and by then the moment has passed."
                data={challengeFrameData}
            />

            <HowItWorks
                containerClass={null}
                eyebrow="The model"
                title="Capture<span class='colorPrimary'>,</span> analyze<span class='colorPrimary'>,</span> action<span class='colorPrimary'>.</span> This is stage two"
                titleClass="sectionTitleConstrained"
                description="Everything Serve First does runs on one loop. Capture brings the signals in. Analyze makes sense of them. Action makes things right."
                data={howItWorksData}
            />

            <ContentGrid
                eyebrow="How analysis works"
                title="From raw signal to a reason you can act on"
                button={null}
                data={contentGridData}
            />

            <EvaSpotlight
                titleContainerClass="noPaddingTop"
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "Meet EVA",
                    "title": "The always-on analyst for every location",
                    "description": null,
                    "htmlDescription": "<p class='fw700'>EVA reads the signals across every location and hands you the reason behind the score, in plain English, no dashboard hunting.</p> <p>Unlike dashboards that show you a score, EVA shows you the reason, and what to do about it.</p> <p>EVA sits across every signal in one operating picture, scores sentiment as it lands, groups the themes that matter and tells you what needs attention, where and why. No digging through dashboards to work out your next move. EVA recommends; your team decides and assigns.</p>",
                    "image": "/images/how-it-works/analyse/analyse-eva.png",
                    "imageWidth": 768,
                    "imageHeight": 768,
                    "imageSizing": "contain",
                    "button": {
                        "text": "Meet EVA",
                        "href": "/eva",
                    }
                }} />

            <HowItWorks
                eyebrow={null}
                title={null}
                description={null}
                data={howItWorksData2}
                btnPrimary={null}
                btnSecondary={null}
            />

            <IndustryCards
                eyebrow="Analysis, in your world"
                title="Every sector has a reason behind the score"
                description="One platform, tuned to the standards and signals your sector runs on."
                button={null}
                data={industryCardsData}
                btnPrimary={null}
                btnSecondary={null}
                industryCardsContainerClass="noPaddingTop"
            />

            <Testimonials />

            <Suspense fallback={<IsLoading />}>

                <BlogGrid />

            </Suspense>

            <FAQ
                eyebrow="Common questions"
                title="Frequently asked questions"
                button={{
                    text: "Still have questions? Contact us",
                    href: "/company/contact-us",
                }}
                data={faqData}
            />

            <CtaBannerOne
                title="See the reason behind every score"
                description="See how Serve First captures, analyzes and acts on every signal across your locations, in one connected platform."
            />

        </>

    );

}