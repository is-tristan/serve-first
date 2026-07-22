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

import { getPageMetadata } from "@/data/seo-map-data";


export const metadata = getPageMetadata("/solutions/by-role/cx-leaders");

export default function CXLeader() {

    return (

        <>

            <Banner
                eyebrow="For customer experience leaders"
                title="Own the customer experience across every site"
                description="Serve First gives CX leaders one live view of customer sentiment across every location, and the tools to turn it into action, so you move from measuring experience to improving it."
                image="/images/solutions/by-role/cx-leaders/cx-leaders-cover.png"
                imageSizing="Contain"
            />

            <RoleContext
                eyebrow="Built for CX leaders"
                title="Not measuring experience. Improving it"
                btnPrimary={null}
                data={roleContextData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From customer signal to closed loop"
                description="Three stages run every signal from capture to a fix."
                data={howItWorksData}
                imageSizing="Contain"
            />

            <ProductHighlight
                eyebrow="What you get"
                title="The toolkit for customer experience leaders"
                description="The functions CX leaders rely on most, connected so insight turns into action."
                linkText={null}
                data={productHighlightData}
            />

            <ModuleStats
                eyebrow="The difference"
                title="What changes when CX leads with action"
                description="The outcomes CX leaders see once feedback connects to the fix."
                data={moduleStatsData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="You can see the score. Can you see the cause?"
                hasFullStop={false}
                data={challengeFrameData}
            />

            <FAQ
                eyebrow="Questions CX leaders ask"
                title="Customer experience management, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerContact
                theme="primary"
                title="See what Serve First can do for customer experience"
                description="Book a personalised demo and we will show you how CX leaders turn estate-wide feedback into action at every site, on your data."
            />

        </>

    )

}