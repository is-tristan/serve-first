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
    return getPageMetadata("/solutions/by-industry/facilities-management");
}

export default function FacilitiesManagement() {

    return (

        <>

            <Banner
                eyebrow="Solutions by industry"
                title="Every contract, every site, on standard"
                description="Facilities management lives on SLAs and proof. Serve First connects audits, issues and feedback across every client site, so you hold standards and show clients exactly what was done."
                image="/images/solutions/by-industry/facilities-management/fm-cover.png"
                imageSizing="contain"
            />

            <LogoBar eyebrow="Trusted by" />

            <ChallengeFrame
                eyebrow="The facilities challenge"
                title="Proving the standard across every contract"
                data={challengeFrameData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From SLA to proof for the client"
                description="Three connected stages, from check to proof."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What facilities teams use"
                title="One toolkit for every contract"
                description="The functions that hold standards and prove them to clients, connected so insight turns into action."
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
                description="The challenges providers bring to Serve First, and where to read more."
                data={contentGridData}
                colCount={4}
            />

            <FAQ
                eyebrow="Common questions"
                title="Facilities management<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See every contract on one operating picture"
                description="Book a personalized demo and we'll show you how Serve First works across your contracts, using your data."
            />
        </>

    )

}