// Components
import Banner from "@/components/sections/banner/banner";
import LogoBar from "@/components/sections/logo-bar/logo-bar";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import EvaSpotlight from "@/components/sections/eva-spotlight/eva-spotlight";
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


export const metadata = getPageMetadata("/solutions/by-industry/venues-and-events");

export default function VenuesAndEvents() {

    return (

        <>

            <Banner
                eyebrow="Solutions by industry"
                title="Safe, smooth, sold-out, every event"
                description="Venues juggle safety, crowds and experience at once. Serve First connects safety checks, guest feedback and issues on the night, so every event runs to standard and you can prove it."
                image="/images/solutions/by-industry/venues-and-events/venues-and-events-cover.png"
                imageSizing="Contain"
            />

            <LogoBar eyebrow="Trusted by" />

            <ChallengeFrame
                eyebrow="The venues challenge"
                title="High stakes, big crowds, no second chances"
                data={challengeFrameData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From readiness to evidence"
                description="Three connected stages, from check to proof."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What venues use"
                title="One toolkit for every event"
                description="The functions that keep events safe and smooth, connected so insight turns into action."
                linkText={null}
                data={productHighlightData}
            />

            <EvaSpotlight
                eyebrow={null}
                title={null}
                description={null}
                item={{
                    "eyebrow": "Martyn's Law",
                    "title": "Meet your Martyn's Law duties at every venue",
                    "description": "Turn your Martyn's Law obligations into checklists, training records and evidence, documented across every venue.",
                    "image": "/decoration/no-image-placeholder.webp",
                    "button": {
                        "text": "See Martyn's Law",
                        "href": "/products/operational-excellence/martyns-law",
                    }
                }}
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
                title="Venue safety and experience, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                theme="primary"
                title="See every event run safe and smooth"
                description="Book a personalised demo and we will show you how Serve First works across your venues, on your data."
            />
        </>

    )

}