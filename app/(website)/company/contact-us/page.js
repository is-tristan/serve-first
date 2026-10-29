// Components
import LpBanner from "@/components/screens/lp/lp-banner/lp-banner";
import Testimonials from "@/components/sections/testimonials/testimonials";
import { getPageMetadata } from "@/seo/seo-map-data";

export async function generateMetadata() {
    return getPageMetadata("/company/contact-us");
}

export default function GetADemo() {

    return (

        <>

            <LpBanner
                bannerType="Get in touch with us"
                eyebrow="Talk to the real people behind it"
                title="Built for the people who serve"
                description="Whether you want a demo, have a question or need support, you will reach a real person who knows the platform, not a ticket queue."
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

            <Testimonials theme="primary" btnPrimary={null} />

        </>

    )

}