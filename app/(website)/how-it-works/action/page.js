import { Suspense } from "react";

// Components
import Banner from "@/components/sections/banner/banner";
import ChallengeFrame from "@/components/sections/challenge-frame/challenge-frame";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import ContentGrid from "@/components/sections/content-grid/content-grid";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import IndustryCards from "@/components/sections/industry-cards/industry-cards";
import Testimonials from "@/components/sections/testimonials/testimonials";
import BlogGrid from "@/components/dynamic-sections/blog-grid";
import IsLoading from "@/components/handlers/is-loading";
import FAQ from "@/components/sections/faq/faq";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Data
import {
    challengeFrameData,
    howItWorksData,
    contentGridData,
    productHighlightData,
    howItWorksData2,
    industryCardsData,
    faqData
} from "./data";

import { getPageMetadata } from "@/seo/seo-map-data";

export async function generateMetadata() {
    return getPageMetadata("/how-it-works/action");
}

export default function Action() {

    return (

        <>

            <Banner
                eyebrow="How it works · Action"
                title="Insight is not the finish line. Action is"
                description="Action is stage three. Serve First does not stop at a screen full of insights. It turns what you learn into role-based plans and tasks, routed to the right person and tracked to proof of completion, across every site."
                image="/images/how-it-works/action/action-cover.png"
                imageSizing="contain"
            />

            <ChallengeFrame
                eyebrow="The action problem"
                title="Most tools stop at telling you"
                description="Plenty of platforms will hand you scores, dashboards and a long list of insights. Then they stop. The hard part, deciding who does what, by when, and proving it got done, is left to spreadsheets, inboxes and good intentions. So the same issues come back, and nobody can show what actually changed."
                data={challengeFrameData}
            />

            <HowItWorks
                containerClass={null}
                eyebrow="The model"
                title="Capture<span class='colorPrimary'>,</span> analyse<span class='colorPrimary'>,</span> action<span class='colorPrimary'>.</span> This is stage three"
                titleClass="sectionTitleConstrained"
                description="Everything Serve First does runs on one loop. Capture brings the signals in. Analyse makes sense of them. Action puts things right."
                data={howItWorksData}
            />

            <ContentGrid
                eyebrow="How action works"
                title="From a recommendation to a fix that sticks"
                button={null}
                data={contentGridData}
            />

            <ProductHighlight
                eyebrow="What does the acting"
                title="The tools that turn insight into a fix"
                linkText={null}
                data={productHighlightData}
            />

            <HowItWorks
                eyebrow={null}
                title={null}
                description={null}
                data={howItWorksData2}
                btnPrimary={null}
                btnSecondary={null}
            />

            <IndustryCards
                eyebrow="Action, in your world"
                title="Every sector has a fix worth proving"
                description="One platform, tuned to the standards and signals your sector runs on."
                button={null}
                data={industryCardsData}
                btnPrimary={null}
                btnSecondary={null}
                industryCardsContainerClass="noPaddingTop"
            />

            <Testimonials />

            <Suspense fallback={<IsLoading />}>

                <BlogGrid />

            </Suspense>

            <FAQ
                eyebrow="Common questions"
                title="Frequently asked questions"
                button={{
                    text: "Still have questions? Contact us",
                    href: "/company/contact-us",
                }}
                data={faqData}
            />

            <CtaBannerOne
                title="Stop at insight<span class='colorPrimary'>,</span> or actually fix it"
                description="See how Serve First captures, analyses and actions every signal across your sites, in one connected platform."
            />

        </>

    );

}