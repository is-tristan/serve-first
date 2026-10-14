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

export default function LpClientConnect() {

    return (

        <>

            <LpBanner
                eyebrow="B2B client feedback"
                title="Know an account is unhappy before they tell you"
                description="Client Connect runs branded feedback programs across your B2B accounts, so account teams see the risk early, not at the renewal conversation."
                hasButtons={false}
                formSmallText="See it on your own locations. No slides, no obligation."
                utmMedium="LP Client Connect"
                checkList={[
                    "Branded invitations, per account",
                    "Every send tracked to a response",
                    "At-risk accounts flagged early"
                ]}
            />

            <LogoBar />

            <Testimonials />

            <Faq
                eyebrow="Common questions"
                title="What account teams ask before they start"
                data={faqData}
            />

            <HowItWorks
                eyebrow="How it works"
                title="From invitation to a saved renewal"
                description="Everything Serve First does runs on one loop. Capture brings the signals in. Analyze makes sense of them. Action fixes things."
                data={howItWorksData}
            />

            <CtaBannerOne
                title="See the risk before the renewal call"
                description="See it on your own accounts. No slides, no obligation."
                buttonPrimary={
                    {
                        text: "Show me a program",
                        href: "#banner",
                    }
                }
                buttonSecondary={null}
            />

        </>

    )

}