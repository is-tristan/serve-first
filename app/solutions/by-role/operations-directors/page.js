// Components
import Banner from "@/components/sections/banner/banner";
import RoleContext from "@/components/sections/role-context/role-context";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import FAQ from "@/components/sections/faq/faq";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Data
import {
    roleContextData,
    howItWorksData,
    productHighlightData,
    moduleStatsData,
    challengeFrameData,
    faqData
} from "./data";

export default function OperationsDirector() {

    return (

        <>

            <Banner
                eyebrow="For operations directors"
                title="Consistent execution across every site"
                description="Serve First gives operations directors one view of standards, tasks and performance across the estate, and routes every issue to the person who can resolve it, so execution is something you can prove."
                image="/images/solutions/by-role/operations-directors/ops_director_hero_estate_execution_score_overview.png"
                imageSizing="Contain"
            />

            <RoleContext
                eyebrow="Built for operations directors"
                title="Standards mean nothing until met everywhere"
                description="You set the standard. The hard part is knowing it is met at every site, and fixing it when it is not. Serve First brings audits, tasks and performance into one picture."
                btnPrimary={null}
                data={roleContextData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From the standard you set to the standard met"
                description="Three stages keep execution visible, check to proof."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What you get"
                title="The toolkit for operations directors"
                description="The functions ops leaders run on, connected so insight turns into action."
                linkText={null}
                data={productHighlightData}
            />

            <ModuleStats
                eyebrow="The difference"
                title="What changes when execution is visible"
                description="The outcomes ops directors see once standards are scored and gaps are routed."
                data={moduleStatsData}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Too many sites, too many tools, not enough proof."
                hasFullStop={false}
                data={challengeFrameData}
            />

            <FAQ
                eyebrow="Questions ops leaders ask"
                title="Operations, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerOne
                title="See what Serve First can do for your operation"
                description="Book a personalised demo and we will show you how operations directors hold every site to the same standard, on your data."
            />

        </>

    )

}