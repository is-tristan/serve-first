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

export default function LpTerminals() {

    return (

        <>

            <LpBanner
                eyebrow="Customer experience"
                title="Catch the unhappy customer before they leave"
                description="Branded terminals capture honest feedback on site in seconds and alert the right manager the moment a score drops, while you can still put it right."
                hasButtons={false}
                formSmallText="See it on your own sites. No slides, no obligation."
                checkList={[
                    "In-the-moment feedback at every site",
                    "Low scores alert a manager in real time",
                    "Works offline, syncs on its own"
                ]}
            />

            <LogoBar />

            <Testimonials theme="primary" />

            <Faq
                eyebrow="Common questions"
                title="What teams on the floor ask us"
                data={faqData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From the floor to the fix, fast"
                description="Everything Serve First does runs on one loop. Capture brings the signals in. Analyse makes sense of them. Action puts things right."
                data={howItWorksData}
            />

            <CtaBannerOne
                title="Put it right before they walk out"
                description="See it on your own sites. No slides, no obligation."
                buttonPrimary={
                    {
                        text: "Show me my sites",
                        href: "#banner",
                    }
                }
            />

        </>

    )

}