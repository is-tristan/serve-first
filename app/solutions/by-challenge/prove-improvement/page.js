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

export default function ProveImprovement() {

    return (

        <>

            <Banner
                eyebrow="Solutions by challenge"
                title="Prove what is working, not just what happened"
                description="Knowing something improved is not the same as proving it. Serve First gives each role an action plan, not just evidence, tying every fix to proof of completion so you can show what changed and why."
                image="/images/solutions/by-challenge/prove-improvement/prove_improvement_hero_improvement_summary_dashboard.png"
                imageSizing="Contain"
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="You know it is better. Can you prove it?"
                hasFullStop={false}
                data={challengeFrameData}
            />

            <RoleContext
                eyebrow="Who feels it"
                title="Proof that works for every seat"
                description="Proving progress matters to every seat at the table. Serve First keeps the action and the outcome together, so each role can evidence its part of the story."
                btnPrimary={null}
                data={roleContextData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From a moving number to clear proof"
                description="Three connected stages, from signal to evidence."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What you use"
                title="The toolkit for proving improvement"
                description="The functions that turn activity into evidence, connected so progress is something you can show."
                linkText={null}
                data={productHighlightData}
            />

            <ModuleStats
                eyebrow="The difference"
                title="What changes when you can prove it"
                description="The outcomes teams see once every action is tied to its result."
                data={moduleStatsData}
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Proving improvement, answered."
                button={null}
                data={faqData}
            />

            <CtaBannerContact
                theme="primary"
                title="See the improvement you can prove"
                description="Book a personalised demo and we will show you how Serve First evidences progress across your sites, on your data."
            />

        </>

    )

}