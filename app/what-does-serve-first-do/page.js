// Components
import Banner from "@/components/sections/banner/banner";
import PlatformStory from "@/components/sections/platform-story/platform-story";
import FeatureList from "@/components/sections/feature-list/feature-list";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import EvaSpotlight from "@/components/sections/eva-spotlight/eva-spotlight";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";
import Faq from "@/components/sections/faq/faq";

// Data
import { platformStoryData, featureListData, challengeFrameData, moduleStatsData, faqData } from "./data";

export default function WhatDoesServeFirstDo() {

    return (

        <>

            <Banner
                eyebrow="Serve First explained"
                title="What does Serve First do?"
                hasFullStop={false}
                description="The Customer Experience and Operational Intelligence platform for multi-location businesses in retail, hospitality, leisure and healthcare. We capture, analyse and action every signal across every location."
                trustLine="Trusted by retail, hospitality, leisure and healthcare brands across the UK."
                buttonSecondary={
                    {
                        text: "See how it works",
                        href: "/how-it-works/capture",
                    }
                }
            />

            <PlatformStory
                eyebrow="How Serve First works"
                title="Capture. Analyse. Action"
                description="Three connected layers turn scattered signals into the right next step, in one platform."
                data={platformStoryData}
            />

            <FeatureList
                htmlDescription={true}
                data={featureListData}
            />

            <ChallengeFrame
                eyebrow="Why teams choose Serve First"
                title="Built for the problems multi-site teams know too well"
                data={challengeFrameData}
            />

            <EvaSpotlight
                eyebrow="EVA"
                title="The intelligence layer that reads every signal"
                description="EVA reads feedback and operational data as it arrives, clusters themes, scores sentiment and writes plain-English summaries, so teams know what matters without reading dashboards."
                featuredImage="/decoration/no-image-placeholder.webp"
            />

            <ModuleStats
                theme="primary"
                eyebrow="What changes with Serve First"
                title="From scattered signals to a single system of action"
                description={null}
                data={moduleStatsData}
                btnPrimary={null}
            />

            <CtaBannerOne
                title="See what Serve First can do across your locations"
                description="Book a personalised demo and we will show you how the platform works with your estate, your data and your team."
                buttonPrimary={
                    {
                        text: "Book a demo",
                        href: "/get-a-demo",
                    }
                }
                buttonSecondary={null}
            />

            <Faq
                eyebrow="Frequently asked questions"
                title="Answers to the most common questions"
                description={null}
                data={faqData}
                button={
                    {
                        text: "Get a demo",
                        href: "/get-a-demo",
                    }
                }
            />

        </>
    )

}