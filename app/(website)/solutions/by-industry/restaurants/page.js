// Components
import Banner from "@/components/sections/banner/banner";
import LogoBar from "@/components/sections/logo-bar/logo-bar";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import Testimonials from "@/components/sections/testimonials/testimonials";
import ContentGrid from "@/components/sections/content-grid/content-grid";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import FAQ from "@/components/sections/faq/faq";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Data
import {
    challengeFrameData,
    howItWorksData,
    productHighlightData,
    moduleStatsData,
    contentGridData,
    faqData,
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";


export async function generateMetadata() {
    const metadata = await getPageMetadata("/solutions/by-industry/restaurants");
    const description = "Keep safety and service up to standard at every table. Serve First connects guest feedback with how each location runs, and turns gaps into action.";
    const keywords = metadata.keywords?.map((keyword) => keyword === "multi-site restaurants" ? "multi-unit restaurants" : keyword);

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

export default function LeisureAndHospitality() {

    return (

        <>

            <Banner
                eyebrow="Solutions by industry"
                title="Every table, every location, up to standard"
                description="Speed, safety and consistency make or break a multi-unit restaurant. Serve First connects what guests feel with how each kitchen and floor runs, so standards hold at every table."
                image="/images/solutions/by-industry/restaurants/restaurants-cover.png"
                imageSizing="contain"
            />

            <LogoBar eyebrow="Trusted by" />

            <ChallengeFrame
                eyebrow="The restaurant challenge"
                title="Standards slip when every location is slammed"
                data={challengeFrameData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From every shift up to standard"
                description="Three connected stages, from check to proof."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What operators use"
                title="One toolkit for every location"
                description="The functions that keep safety and service consistent, connected so insight turns into action."
                linkText={null}
                data={productHighlightData}
            />

            <ModuleStats
                eyebrow="The difference"
                title="What changes when data drives action"
                description="The outcomes teams see once every signal ends in a tracked fix."
                data={moduleStatsData}
                btnPrimary={null}
            />

            <Testimonials
                theme="primary"
                btnPrimary={null}
            />

            <ContentGrid
                eyebrow="Common challenges"
                title="Challenges we solve here"
                description="The challenges retailers bring to Serve First, and where to read more."
                data={contentGridData}
                colCount={4}
            />

            <FAQ
                eyebrow="Common questions"
                title="Restaurant operations<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See safety and service hold at every location"
                description="Book a personalized demo and we'll show you how Serve First works across your locations, using your data."
            />
        </>

    )

}