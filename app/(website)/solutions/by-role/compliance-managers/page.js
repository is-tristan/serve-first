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
    return getPageMetadata("/solutions/by-role/compliance-managers");
}

export default function ComplianceManagers() {

    return (

        <>

            <Banner
                eyebrow="For compliance managers"
                title="Compliance you can prove, not assume"
                description="Serve First helps compliance managers run checks, capture evidence and prove compliance across every location, with audit trails ready the moment anyone asks."
                image="/images/solutions/by-role/compliance-managers/compliance-managers-cover.png"
                imageSizing="contain"
            />

            <RoleContext
                eyebrow="Built for compliance managers"
                title="If it isn't documented<span class='colorPrimary'>,</span> it didn't happen"
                description="Compliance is about proof, not intentions. Serve First turns your obligations into checklists, captured evidence and audit trails across every location and venue you cover."
                btnPrimary={null}
                data={roleContextData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From obligation to evidence<span class='colorPrimary'>,</span> without the scramble"
                description="Three stages turn your obligations into ready proof."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What you get"
                title="The toolkit for compliance managers"
                description="The functions compliance leads rely on, connected so evidence and action sit together."
                linkText={null}
                data={productHighlightData}
            />

            <ModuleStats
                eyebrow="The difference"
                title="What changes when proof is built in"
                description="The outcomes compliance leads see once evidence is captured as work is done."
                data={moduleStatsData}
                btnPrimary={{
                    text: "See it in action",
                    href: "/get-a-demo",
                }}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Could you prove compliance today<span class='colorPrimary'>,</span> at every location<span class='colorPrimary'>?</span>"
                hasFullStop={false}
                data={challengeFrameData}
            />

            <FAQ
                eyebrow="Questions compliance leads ask"
                title="Compliance<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerContact
                theme="primary"
                title="See what Serve First can do for your compliance"
                description="Book a personalized demo and we'll show you how compliance managers document compliance across every location, using your data."
            />

        </>

    )

}