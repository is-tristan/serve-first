// Components
import LpBanner from "@/components/screens/lp/lp-banner/lp-banner";
import LogoBar from "@/components/sections/logo-bar/logo-bar";
import Testimonials from "@/components/sections/testimonials/testimonials";
import Faq from "@/components/sections/faq/faq";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Data
import {
    faqData,
    howItWorksData
} from "./data";

export default function LpAudit() {

    return (

        <>

            <LpBanner
                eyebrow="Operational excellence"
                title="Catch the unhappy customer before they leave"
                description="Serve First replaces paper inspections with digital audits, photo evidence and a corrective task the moment a check fails, across every site you run."
                hasButtons={false}
                formSmallText="See it on your own sites. No slides, no obligation."
                checkList={[
                    "Every site scored against one standard",
                    "A failed check becomes a fix, automatically",
                    "Live pass rates across the whole estate"
                ]}
            />

            <LogoBar />

            <Testimonials />

            <Faq
                eyebrow="Common questions"
                title="What multi-site teams ask us first"
                data={faqData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From standard to proof<span class='colorPrimary'>,</span> every site"
                description="Everything Serve First does runs on one loop. Capture brings the signals in. Analyse makes sense of them. Action puts things right."
                data={howItWorksData}
            />

            <CtaBannerOne
                title="Bring every site up to one standard"
                description="See it on your own sites. No slides, no obligation."
                buttonPrimary={
                    {
                        text: "Show me my sites",
                        href: "#banner",
                    }
                }
                buttonSecondary={null}
            />

        </>

    )

}