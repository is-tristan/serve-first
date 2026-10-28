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

export default function LpClientConnect() {

    return (

        <>

            <LpBanner
                eyebrow="Client Connect"
                title="Your client's renewal is decided long before the renewal meeting"
                description="Client Connect hears from every stakeholder on the contract, weights it by seniority, and shows which accounts are at risk, so you can act before renewal."
                hasButtons={false}
                formSmallText="See it on your own locations. No slides, no obligation."
                utmMedium="LP Audit"
                checkList={[
                    "Every contact heard, weighted by seniority",
                    "A live view of which accounts are at risk",
                    "Branded video invites, from post-meeting to QBR"
                ]}
            />

            <LogoBar
                eyebrow="Trusted by service businesses that run on client relationships"
                eyebrowDash={false}
            />

            <LpFeatureList
                data={lpFeaturedListData}
            />

            <HowItWorks
                containerClass="noPaddingBottom"
                hasFullStop={false}
                eyebrow="How it works"
                title="Send. Track. Act."
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
                title="What account teams ask us"
                data={faqData}
                button={null}
            />

            <LpCta
                type="image-contained"
                eyebrow="Client Connect"
                title="Hear it from the client before the renewal."
                description="Get a short demo to see how Client Connect gets answers from the people who decide your contracts."
                image="/images/lp/client-connect/lp-client-connect-cta.png"
                buttonPrimary={
                    {
                        text: "Show me my locations",
                        href: "#banner",
                    }
                }
            />

        </>

    )

}