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


export const metadata = getPageMetadata("/solutions/by-challenge/inconsistent-standards");

export default function InconsistentStandards() {

    return (

        <>

            <Banner
                eyebrow="Solutions by challenge"
                title="The same standard, at every single site"
                description="When standards drift between locations, customers feel it. Serve First scores every site against your standards, routes each gap to an owner and proves the fix."
                image="/images/solutions/by-challenge/inconsistent-standards/inconsistent-standards-cover.png"
                imageSizing="contain"
            />

            <ChallengeFrame
                eyebrow="Common challenges"
                title="Standards that slip the moment you look away"
                description="You can see your own ratings going up or down. What you cannot see is how a competitor down the road is rated, what their customers praise, or why some of your sites lose business locally while others win it. So you are improving in the dark, with no idea whether you are pulling ahead or falling behind in each town."
                data={challengeFrameData}
            />

            <RoleContext
                eyebrow="Who feels it"
                title="One challenge, three seats at the table"
                description="Inconsistent standards land differently depending on your seat. Serve First gives each role its own view of the same picture, so everyone pulls in one direction."
                btnPrimary={null}
                data={roleContextData}
            />

            <HowItWorks
                eyebrow="From comparison to a fix"
                title="From one standard to every single site"
                description="Three connected stages, from check to proof."
                data={howItWorksData}
            />

            <ProductHighlight
                eyebrow="What you use"
                title="The toolkit for consistent standards"
                description="The functions that keep standards consistent everywhere, connected so insight turns into action."
                linkText={null}
                data={productHighlightData}
            />

            <ModuleStats
                eyebrow="The difference"
                title="What changes when standards hold"
                description="The outcomes teams see once every site is scored and gaps are put right."
                data={moduleStatsData}
                btnPrimary={null}
            />

            <FAQ
                eyebrow="Common questions"
                title="Consistent standards, answered"
                button={null}
                data={faqData}
            />

            <CtaBannerContact
                theme="primary"
                title="See every site held to one standard"
                description="Book a personalised demo and we will show you how Serve First keeps standards consistent across your estate, on your data."
            />

        </>

    )

}