// Components
import Banner from "@/components/sections/banner/banner";
import PlatformStory from "@/components/sections/platform-story/platform-story";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import Testimonials from "@/components/sections/testimonials/testimonials";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";
import { getPageMetadata } from "@/seo/seo-map-data";

// Data
import { platformStoryData } from "./data";

export async function generateMetadata() {
    const metadata = await getPageMetadata("/company/about");
    const description = "Serve First helps multi-location operators turn every customer signal into action, not another dashboard. Trusted by brands including The Body Shop.";

    return {
        ...metadata,
        description,
        openGraph: {
            ...metadata.openGraph,
            description,
        },
        twitter: {
            ...metadata.twitter,
            description,
        },
    };
}

export default function About() {

    return (

        <>

            <Banner
                bannerType="company"
                eyebrow="About Serve First, in short"
                title="Built for the people who serve"
                description="We help multi-location operators turn every customer signal into action. Not another dashboard to watch, but a platform that does something about what it sees."
                image="/images/company/about/about-cover.png"
                imageSizing="contain"
            />

            <PlatformStory
                eyebrow="What we believe in here"
                title="Insight on its own is only half the job"
                description={null}
                data={platformStoryData}
            />

            <ModuleStats
                eyebrow="By the numbers"
                title="The Serve First story<span class='colorPrimary'>,</span> so far"
                description="What began as a better way to act on customer feedback has grown into one connected platform for the people who serve."
                btnPrimary={{
                    text: "Talk to us",
                    href: "/company/contact-us",
                }}
            />

            <Testimonials theme="primary" />

            <CtaBannerOne
                title="Experience what it truly means to serve first"
                description="Book a personalized demo and see how Serve First works with your locations, your data and your whole team."
                buttonPrimary={
                    {
                        text: "Request a demo",
                        href: "/get-a-demo",
                    }
                }
                buttonSecondary={
                    {
                        text: "Talk to us",
                        href: "/company/contact-us",
                    }
                }
            />

        </>

    )

}