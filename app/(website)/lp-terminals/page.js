// Components
import LpBanner from "@/components/screens/lp/lp-banner/lp-banner";
import LpFeatureList from "@/components/screens/lp/lp-featured-list/lp-feature-list";
import LogoBar from "@/components/sections/logo-bar/logo-bar";
import Testimonials from "@/components/sections/testimonials/testimonials";
import Faq from "@/components/sections/faq/faq";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import LpCta from "@/components/screens/lp/lp-cta/lp-cta";

// Data
import {
    lpFeaturedListData,
    howItWorksData,
    lpFeaturedListData2,
    faqData,
} from "./data";

export const metadata = {
    robots: "noindex",
};

export default function LpTerminals() {

    return (

        <>

            <LpBanner
                eyebrow="Customer feedback kiosks"
                title="Catch the unhappy customer before they leave"
                description="Branded feedback kiosks capture honest ratings in seconds and alert the right manager the moment a score drops, while there's still time to fix it."
                hasButtons={false}
                formSmallText="See it on your own sites. No slides, no obligation."
                utmMedium="LP Terminals"
                checkList={[
                    "Feedback from every location, every shift",
                    "Low scores alert a manager in real time",
                    "Keeps working offline, syncs automatically"
                ]}
            />

            <LogoBar
                eyebrow="Trusted by multi-location teams in retail, hospitality, and healthcare"
                eyebrowDash={false}
            />

            <LpFeatureList
                data={lpFeaturedListData}
            />

            <HowItWorks
                containerClass="noPaddingBottom"
                hasFullStop={false}
                eyebrow="How it works"
                title="One tap. One alert. One fix."
                description="Everything Serve First does runs on one loop. Capture brings the signals in. Analyse makes sense of them. Action puts things right."
                data={howItWorksData}
            />

            <LpFeatureList
                containerClass="noPaddingTop"
                data={lpFeaturedListData2}
            />

            <Testimonials type="alt" />

            <Faq
                eyebrow="Common questions"
                title="What operations teams ask us"
                data={faqData}
                button={null}
            />

            <LpCta
                eyebrow="Customer feedback kiosks"
                title="Fix it before they walk out"
                description="Get a short demo to see how the kiosks work and how your team acts on every low score."
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