// Components
import Banner from "@/components/sections/banner/banner";
import CtaBannerContact from "@/components/sections/cta-banners/cta-banner-contact";

export default function GetADemo() {

    return (

        <>

            <Banner
                bannerType="Get in touch with us"
                eyebrow="Talk to the real people behind it"
                title="Built for the people who serve"
                description="Whether you want a demo, have a question or need support, you will reach a real person who knows the platform, not a ticket queue."
                buttonPrimary={
                    {
                        text: "See how it works",
                        href: "/how-it-works/capture",
                    }
                }
                buttonSecondary={
                    {
                        text: null
                    }
                }
            />

            <CtaBannerContact hasDemoLink={true} formBtnText="Send message" fullForm={false} theme="primary" />

        </>

    )

}