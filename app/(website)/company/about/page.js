// Components
import Banner from "@/components/sections/banner/banner";
import PlatformStory from "@/components/sections/platform-story/platform-story";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import Testimonials from "@/components/sections/testimonials/testimonials";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";
import { getPageMetadata } from "@/seo/seo-map-data";

// Data
import { platformStoryData } from "./data";

export const metadata = getPageMetadata("/company/about");

export default function About() {

    return (

        <>

            <Banner
                bannerType="company"
                eyebrow="About Serve First, in short"
                title="Built for the people who serve"
                description="We help multi-site operators turn every customer signal into action. Not another dashboard to watch, but a platform that does something about what it sees."
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
                description="Book a personalised demo and see how Serve First works with your estate, your data and your whole team."
                buttonPrimary={
                    {
                        text: "Get a demo",
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