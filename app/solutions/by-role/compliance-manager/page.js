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

export default function ComplianceManager() {

    return (

        <>

            <Banner
                eyebrow="For compliance managers"
                title="Compliance you can evidence, not assume"
                description="Serve First helps compliance managers run checks, capture evidence and prove duty of care across every site, with audit trails ready the moment anyone asks."
                image="/images/solutions/by-role/compliance-manager/compliance_manager_hero_compliance_audit_trail.png"
                imageSizing="Contain"
            />

            <RoleContext
                eyebrow="Built for compliance managers"
                title="If it is not evidenced, it did not happen"
                description="Compliance is about proof, not intentions. Serve First turns your obligations into checklists, captured evidence and audit trails across every site and venue you cover."
                btnPrimary={null}
                data={roleContextData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From obligation to evidence, without the scramble"
                description="Three stages turn duty of care into ready proof."
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
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Could you prove compliance today, at every site?"
                hasFullStop={false}
                data={challengeFrameData}
            />

            <FAQ
                eyebrow="Questions compliance leads ask"
                title="Compliance, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerContact
                theme="primary"
                title="See what Serve First can do for your compliance"
                description="Book a personalised demo and we will show you how compliance managers evidence duty of care across every site, on your data."
            />

        </>

    )

}