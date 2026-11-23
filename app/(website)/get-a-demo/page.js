// Components
import LpBanner from "@/components/screens/lp/lp-banner/lp-banner";
import LogoBar from "@/components/sections/logo-bar/logo-bar";
import Testimonials from "@/components/sections/testimonials/testimonials";
import { getPageMetadata } from "@/seo/seo-map-data";

export async function generateMetadata() {
    return getPageMetadata("/get-a-demo");
}

export default function GetADemo() {

    return (

        <>

            <LpBanner
                bannerType="company"
                eyebrow="Book a personalized demo"
                title="See Serve First across your locations"
                description="A personalized walkthrough with your locations, your data and your team in mind. No generic tour, just the platform working the way it would for you."
                formType="full"
                formName="demo request"
                formBtnText="Request my demo"
                hasDemoLink={false}
                buttonPrimary={
                    {
                        text: null
                    }
                }
                buttonSecondary={
                    {
                        text: null
                    }
                }
            />

            <LogoBar />

            <Testimonials theme="primary" btnPrimary={null} />

        </>

    )

}