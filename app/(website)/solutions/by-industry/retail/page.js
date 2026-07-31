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


export const metadata = getPageMetadata("/solutions/by-industry/retail");

export default function Retail() {

    return (

        <>

            <Banner
                eyebrow="Solutions by industry"
                title="Every store, the same standard"
                description="From the shop floor to head office, Serve First connects what customers feel with how each store runs, so you can raise standards and prove they hold, everywhere you trade."
                image="/images/solutions/by-industry/retail/retail-cover.png"
                imageSizing="contain"
            />

            <LogoBar eyebrow="Trusted by" />

            <ChallengeFrame
                eyebrow="The retail challenge"
                title="Consistency is hard when every store runs itself"
                data={challengeFrameData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From the shop floor to one standard"
                description="Three connected stages, from check to proof."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What you use"
                title="The toolkit for turning insight into action"
                description="The functions that carry a signal all the way to a fix, connected so nothing stalls."
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
                title="Retail customer experience<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See every store held to one standard"
                description="Book a personalised demo and we will show you how Serve First works across your stores, on your data."
            />
        </>

    )

}