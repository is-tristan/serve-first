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

export default function LPCustomerSurveys() {

    return (

        <>

            <LpBanner
                eyebrow="Customer surveys"
                title="Stop collecting answers nobody acts on"
                description="Serve First alerts the right manager the moment a score drops, turns it into a ticket someone owns, and tracks it until it's fixed. EVA tells you why it happened."
                hasButtons={false}
                formSmallText="See it on your own locations. No slides, no obligation."
                utmMedium="LP Audit"
                checkList={[
                    "Surveys by QR code, receipt link, email, SMS, or tablet",
                    "Low scores alert a manager by email, SMS, or WhatsApp",
                    "Every location's results, side by side"
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
                title="Capture. Analyze. Action."
                description={null}
                data={howItWorksData}
            />

            <LpFeatureList
                containerClass="noPaddingTop"
                data={lpFeaturedListData2}
            />

            <Testimonials type="alt" />

            <Faq
                eyebrow="Common questions"
                title="What operations teams ask us."
                data={faqData}
                button={null}
            />

            <LpCta
                type="image-contained"
                eyebrow="Customer surveys"
                title="Ask today. Fix it today."
                description="Get a short demo to see how Serve First surveys turn every answer into the right next step."
                image="/images/lp/customer-surveys/lp-customer-surveys-cta.png"
            />

        </>

    )

}