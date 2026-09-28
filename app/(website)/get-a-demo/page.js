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
                eyebrow="Book a personalised demo"
                title="See Serve First on your estate"
                description="A personalised walkthrough with your sites, your data and your team in mind. No generic tour, just the platform working the way it would for you."
                formType="full"
                formBtnText="Book my demo"
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