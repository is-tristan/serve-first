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

export const metadata = getPageMetadata("/how-it-works/capture");

export default function Capture() {

    return (

        <>

            <Banner
                eyebrow="How it works · Capture"
                title="Every signal, every site, in one place"
                description="Capture is where it starts. Serve First brings every customer, operational and market signal into a single operating picture, in real time, across every location you run."
                image="/images/how-it-works/capture/capture-cover.png"
                imageSizing="contain"
            />

            <ChallengeFrame
                eyebrow="The capture problem"
                title="You cannot fix what you never captured"
                description="Most multi-site operators are not short of feedback. They are short of feedback in one place. Signals arrive across terminals, surveys, reviews, audits and inboxes, sit in separate tools, and never meet. By the time anyone joins the dots, the moment to act has passed."
                data={challengeFrameData}
            />

            <HowItWorks
                containerClass={null}
                eyebrow="The model"
                title="Capture, analyse, action. This is stage one"
                titleClass="sectionTitleConstrained"
                description="Everything Serve First does runs on one loop. Capture brings the signals in. Analyse makes sense of them. Action puts things right."
                data={howItWorksData}
            />

            <ContentGrid
                eyebrow="How capture works"
                title="From every channel to one connected record"
                button={null}
                data={contentGridData}
            />

            <ProductHighlight
                eyebrow="What does the capturing"
                title="The tools that bring every signal in"
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
                eyebrow="Capture, in your world"
                title="Built for every multi-site business"
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
                title="Start catching every signal worth acting on"
                description="See how Serve First captures, analyses and actions every signal across your sites, in one connected platform."
            />

        </>

    );

}