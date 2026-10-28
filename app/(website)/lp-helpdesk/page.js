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

export default function LPHelpDesk() {

    return (

        <>

            <LpBanner
                eyebrow="Helpdesk"
                title="Shared inboxes are where complaints go to die"
                description="Helpdesk turns every survey response, low rating, failed audit, and customer email into a ticket with an owner, so nothing slips through."
                hasButtons={false}
                formSmallText="See it on your own locations. No slides, no obligation."
                utmMedium="LP Audit"
                checkList={[
                    "One inbox for feedback, ratings, and customer messages",
                    "Reply by email or SMS with AI-drafted responses",
                    "Every ticket routed to the right location manager"
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
                eyebrow="Helpdesk"
                title="Answer every customer. Close every ticket."
                description="Get a short demo to see how Helpdesk turns feedback, complaints, and audit failures into tickets your team owns."
                image="/images/lp/helpdesk/lp-helpdesk-cta.png"
            />

        </>

    )

}