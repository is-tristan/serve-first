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


export const metadata = getPageMetadata("/solutions/by-role/operations-directors");

export default function OperationsDirector() {

    return (

        <>

            <Banner
                eyebrow="For operations directors"
                title="Consistent execution across every site"
                description="Serve First gives operations directors one view of standards, tasks and performance across the estate, and routes every issue to the person who can resolve it, so execution is something you can prove."
                image="/images/solutions/by-role/operations-directors/operations-directors-cover.png"
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
                btnPrimary={{
                    text: "See it in action",
                    href: "/get-a-demo",
                }}
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Too many sites, too many tools, not enough proof"
                data={challengeFrameData}
            />

            <FAQ
                eyebrow="Questions ops leaders ask"
                title="Operations, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerContact
                theme="primary"
                title="See what Serve First can do for your operation"
                description="Book a personalised demo and we will show you how operations directors hold every site to the same standard, on your data."
            />

        </>

    )

}