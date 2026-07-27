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


export const metadata = getPageMetadata("/solutions/by-industry/leisure-and-hospitality");

export default function LeisureAndHospitality() {

    return (

        <>

            <Banner
                eyebrow="Solutions by industry"
                title="Every guest, every site, looked after"
                description="Your reviews are only as good as your worst site. Serve First connects guest feedback with how each site runs, so a dip is caught and fixed before guests feel it"
                image="/images/solutions/by-industry/leisure-and-hospitality/leisure-and-hospitality-cover.png"
                imageSizing="contain"
            />

            <LogoBar eyebrow="Trusted by" />

            <ChallengeFrame
                eyebrow="The hospitality challenge"
                title="One bad visit can outlive a hundred good ones"
                data={challengeFrameData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From guest feedback to the fix"
                description="Three connected stages, before it hits your reviews."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What operators use"
                title="One toolkit for every site"
                description="The functions that protect the guest experience across your estate, connected so insight turns into action."
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
                title="Guest experience, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See the guest experience improve across sites"
                description="Book a personalised demo and we will show you how Serve First works across your sites, on your data."
            />
        </>

    )

}