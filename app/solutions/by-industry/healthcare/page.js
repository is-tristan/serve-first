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
    testimonialData,
    contentGridData,
    faqData,
} from "./data";

import { getPageMetadata } from "@/data/seo-map-data";


export const metadata = getPageMetadata("/solutions/by-industry/healthcare");

export default function Healthcare() {

    return (

        <>

            <Banner
                eyebrow="Solutions by industry"
                title="Patient experience, proven at every site"
                description="In healthcare, standards and trust are everything. Serve First connects patient feedback with how each site runs, so you can raise care standards and evidence them when it matters."
                image="/images/solutions/by-industry/healthcare/healthcare-cover.png"
                imageSizing="Contain"
            />

            <LogoBar eyebrow="Trusted by" />

            <ChallengeFrame
                eyebrow="The healthcare challenge"
                title="Care standards you must meet, and prove"
                data={challengeFrameData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From standard to evidence"
                description="Three connected stages, from check to proof."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What providers use"
                title="One toolkit for every site"
                description="The functions that raise care standards and evidence them, connected so insight turns into action."
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
                data={testimonialData}
                btnPrimary={null}
            />

            <ContentGrid
                eyebrow="Common Challenges"
                title="Challenges we solve here"
                description="The challenges providers bring to Serve First, and where to read more."
                data={contentGridData}
                colCount={4}
            />

            <FAQ
                eyebrow="Common questions"
                title="Patient experience, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See care standards you can evidence"
                description="Book a personalised demo and we will show you how Serve First works across your sites, on your data."
            />
        </>

    )

}