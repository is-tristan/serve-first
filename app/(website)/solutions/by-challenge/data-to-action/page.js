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
    return getPageMetadata("/solutions/by-challenge/data-to-action");
}

export default function DataToAction() {

    return (

        <>

            <Banner
                eyebrow="Solutions by challenge"
                title="Stop reporting problems. Start resolving them"
                description="Most platforms stop at a dashboard. Serve First turns every signal into the next action, routed to an owner and tracked to done, so insight leads to a fix, not just another report."
                image="/images/solutions/by-challenge/data-to-action/data-to-action-cover.png"
                imageSizing="contain"
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Plenty of dashboards<span class='colorPrimary'>,</span> not nearly enough done"
                data={challengeFrameData}
            />

            <RoleContext
                eyebrow="Who feels it"
                title="Action that lands with the right people"
                description="Insight that goes nowhere frustrates every role. Serve First routes each signal to the person who can resolve it, shaped around how each team works."
                btnPrimary={null}
                data={roleContextData}
                colCount={3}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From signal to fix<span class='colorPrimary'>,</span> not signal to report"
                description="Three connected stages, built to end in action."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What you use"
                title="The toolkit for turning insight into action"
                description="The functions that carry a signal all the way to a fix, connected so nothing stalls."
                linkText={null}
                data={productHighlightData}
            />

            <ModuleStats
                eyebrow="The difference"
                title="What changes when data drives action"
                description="The outcomes teams see once every signal ends in a tracked fix."
                data={moduleStatsData}
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Insight to action<span class='colorPrimary'>,</span> answered"
                button={null}
                data={faqData}
            />

            <CtaBannerContact
                theme="primary"
                title="See insight turn into action on your sites"
                description="Book a personalised demo and we will show you how Serve First closes the loop from signal to fix, on your data."
            />

        </>

    )

}