// Components
import Banner from "@/components/sections/banner/banner";
import LogoBar from "@/components/sections/logo-bar/logo-bar";
import Testimonials from "@/components/sections/testimonials/testimonials";
import CtaBannerContact from "@/components/sections/cta-banners/cta-banner-contact";

export default function GetADemo() {

    return (

        <>

            <Banner
                bannerType="company"
                eyebrow="Book a personalised demo"
                title="See Serve First on your estate"
                description="A personalised walkthrough with your sites, your data and your team in mind. No generic tour, just the platform working the way it would for you."
                buttonPrimary={
                    {
                        text: "Book now",
                        href: "#book-demo",
                    }
                }
                buttonSecondary={
                    {
                        text: null
                    }
                }
            />

            <LogoBar />

            <Testimonials btnPrimary={null} />

            <CtaBannerContact hasDemoLink={false} formBtnText="Book my demo" fullForm={true} theme="primary" />

        </>

    )

}