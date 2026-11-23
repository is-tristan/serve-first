// Components
import Banner from "@/components/sections/banner/banner";
import RoleContext from "@/components/sections/role-context/role-context";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import FAQ from "@/components/sections/faq/faq";
import CtaBannerContact from "@/components/sections/cta-banners/cta-banner-contact";

// Data
import {
    roleContextData,
    howItWorksData,
    productHighlightData,
    moduleStatsData,
    challengeFrameData,
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";


export async function generateMetadata() {
    return getPageMetadata("/solutions/by-challenge/siloed-tools-and-data");
}

export default function SiloedToolsAndData() {

    return (

        <>

            <Banner
                eyebrow="Solutions by challenge"
                title="One operating picture, not ten logins"
                description="Serve First connects your customer and operational signals in one place. See the whole picture instead of piecing it together from five different tools."
                image="/images/solutions/by-challenge/siloed-tools-and-data/siloed-tools-and-data-cover.png"
                imageSizing="contain"
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Your data is everywhere<span class='colorPrimary'>,</span> so the truth is nowhere"
                data={challengeFrameData}
            />

            <RoleContext
                eyebrow="Who feels it"
                title="One picture<span class='colorPrimary'>,</span> shaped around each role"
                description="Disconnected tools cost every role differently. Serve First puts customer, operational and market signals in one operating picture, shaped around each seat."
                btnPrimary={null}
                data={roleContextData}
                colCount={3}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From scattered tools to one picture"
                description="Three connected stages, no manual stitching."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What you use"
                title="The toolkit for one connected picture"
                description="The functions that bring every signal into one place, connected so insight turns into action."
                linkText={null}
                data={productHighlightData}
            />

            <ModuleStats
                eyebrow="The difference"
                title="What changes with one picture"
                description="The outcomes teams see once every source is connected in one place."
                data={moduleStatsData}
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="One connected picture<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerContact
                theme="primary"
                title="See every location in one view"
                description="Book a personalized demo and we'll bring your sources into one operating picture, using your data and your locations."
            />

        </>

    )

}