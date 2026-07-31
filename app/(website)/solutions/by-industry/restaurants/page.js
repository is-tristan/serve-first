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


export const metadata = getPageMetadata("/solutions/by-industry/restaurants");

export default function LeisureAndHospitality() {

    return (

        <>

            <Banner
                eyebrow="Solutions by industry"
                title="Every cover, every site, to standard"
                description="Speed, safety and consistency make or break a multi-site restaurant. Serve First connects what guests feel with how each kitchen and floor runs, so standards hold at every cover."
                image="/images/solutions/by-industry/restaurants/restaurants-cover.png"
                imageSizing="contain"
            />

            <LogoBar eyebrow="Trusted by" />

            <ChallengeFrame
                eyebrow="The restaurant challenge"
                title="Standards slip when every site is flat out"
                data={challengeFrameData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From every shift to standard"
                description="Three connected stages, from check to proof."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What operators use"
                title="One toolkit for every site"
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
                eyebrow="Common Challenges"
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
                title="See safety and service hold at every site"
                description="Book a personalised demo and we will show you how Serve First works across your sites, on your data."
            />
        </>

    )

}