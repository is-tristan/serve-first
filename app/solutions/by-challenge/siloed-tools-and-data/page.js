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

export default function SiloedToolsAndData() {

    return (

        <>

            <Banner
                eyebrow="Solutions by challenge"
                title="One operating picture, not ten logins"
                description="When every tool holds a piece of the picture, no one sees the whole. Serve First connects your customer and operational signals in one operating picture, so the answer is ready when you ask."
                image="/images/solutions/by-challenge/siloed-tools-and-data/siloed_tools_and_data_hero_all_signals_one_view.png"
                imageSizing="Contain"
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Your data is everywhere, so the truth is nowhere"
                data={challengeFrameData}
            />

            <RoleContext
                eyebrow="Who feels it"
                title="One picture, shaped around each role"
                description="Disconnected tools cost every role differently. Serve First puts customer, operational and market signals in one operating picture, shaped around each seat."
                btnPrimary={null}
                data={roleContextData}
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
                title="One connected picture, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerContact
                theme="primary"
                title="See your whole estate in one view"
                description="Book a personalised demo and we will bring your sources into one operating picture, on your data and your sites."
            />

        </>

    )

}