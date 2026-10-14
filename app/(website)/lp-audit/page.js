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

export default function LpAudit() {

    return (

        <>

            <LpBanner
                eyebrow="Digital audits and inspections"
                title="Find the failed check before the inspector does"
                description="Serve First Audits put every audit, inspection, and checklist in one app, flags failed items the moment they're logged, and assigns the fix to the right person."
                hasButtons={false}
                formSmallText="See it on your own locations. No slides, no obligation."
                utmMedium="LP Audit"
                checkList={[
                    "Custom checklists with photos, notes, and signatures",
                    "Branded reports the moment an audit ends",
                    "Works offline, syncs when you're back online"
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
                title="Audit. Assign. Fix."
                description="Run custom checklists, get instant branded reports, and turn every failed item into a tracked fix."
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
                type="audit"
                eyebrow="AuditPro:360"
                title="Fix it before the inspector finds it."
                description="Get a short demo to see how AuditPro:360 runs audits, builds reports, and gets failed items fixed."
                image="/images/lp/audit/lp-audit-cta.png"
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