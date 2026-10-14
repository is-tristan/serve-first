// Components
import LpBanner from "@/components/screens/lp/lp-banner/lp-banner";
import LogoBar from "@/components/sections/logo-bar/logo-bar";
import Testimonials from "@/components/sections/testimonials/testimonials";
import { getPageMetadata } from "@/seo/seo-map-data";

export async function generateMetadata() {
    const metadata = await getPageMetadata("/get-a-demo");
    const title = "Book a Demo | See Serve First Across Your Locations";
    const description = "Book a personalized Serve First demo and see how it works with your data and your teams across every location you run.";

    return {
        ...metadata,
        title,
        description,
        openGraph: {
            ...metadata.openGraph,
            title,
            description,
        },
        twitter: {
            ...metadata.twitter,
            title,
            description,
        },
    };
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