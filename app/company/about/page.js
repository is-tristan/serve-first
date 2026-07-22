// Components
import Banner from "@/components/sections/banner/banner";
import PlatformStory from "@/components/sections/platform-story/platform-story";
import ModuleStats from "@/components/sections/module-stats/module-stats";
import Testimonials from "@/components/sections/testimonials/testimonials";
import CtaBannerTwo from "@/components/sections/cta-banners/cta-banner-2";

// Data
import { platformStoryData } from "./data";

export default function About() {

    return (

        <>

            <Banner
                bannerType="company"
                eyebrow="About Serve First, in short"
                title="Built for the people who serve"
                description="We help multi-site operators turn every customer signal into action. Not another dashboard to watch, but a platform that does something about what it sees."
            />

            <PlatformStory
                eyebrow="What we believe in here"
                title="Insight on its own is only half the job"
                description="Most tools stop at telling you what happened. Serve First was built to close the gap between knowing and doing, across every location you run."
                data={platformStoryData}
            />

            <ModuleStats
                eyebrow="By the numbers"
                title="The Serve First story, so far"
            />

            <Testimonials theme="primary" />

            <CtaBannerTwo
                title="See what serving first really looks like"
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