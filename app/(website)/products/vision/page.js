// Components
import ScrollBanner from "@/components/screens/products/vision/main/scroll-banner/scroll-banner";
import IndustrySection from "@/components/screens/products/vision/main/industry/industry-section";
import PlatformStory from "@/components/sections/platform-story/platform-story";
import ProblemSolutions from "@/components/screens/products/vision/main/problem-solutions/problem-solutions";
import Faq from "@/components/sections/faq/faq";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Data
import {
    platformStoryData,
    visionFaqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";

export const metadata = getPageMetadata("/products/vision");

export default function VisionPage() {

    return (

        <div style={{ backgroundColor: "var(--dark)" }}>

            <ScrollBanner />

            <IndustrySection />

            <PlatformStory
                itemClass={"visionPlatformStory"}
                theme="dark"
                eyebrow="Why Vision, not just another camera platform"
                title="Intelligent video analytics, built on the standards you already run"
                titleAlignment="center"
                eyebrowColor="colorSecondary"
                textColor="colorLight"
                description={null}
                btn={
                    {
                        text: "See how it works",
                        href: "/products/vision",
                    }
                }
                data={platformStoryData}
            />

            <ProblemSolutions />

            <Faq
                theme="dark"
                eyebrow="Intelligent video analytics, answered"
                eyebrowColor="colorSecondary"
                title="Common questions about Vision"
                data={visionFaqData}
                button={null}
            />

            <CtaBannerOne
                name="visionCtaBanner"
                theme="dark"
                eyebrow="See it on your own floor"
                eyebrowColor="colorSecondary"
                title="See Vision read your standards, live"
                description="See it read a live standard on a real store feed. In closed beta now."
                buttonSecondary={null}
            />

        </div>

    );

}