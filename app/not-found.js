// Components
import Banner from "@/components/sections/banner/banner";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Images
import notFoundImage from "@/public/images/error-404/error_404_image.png";

export default function NotFound() {

    return (

        <>

            <Banner
                eyebrow="404 - Page Not Found"
                title="This page has failed its audit"
                description="We checked the site, scored the page and marked it non-compliant. It is either missing, moved or never existed. Either way, it did not meet the standard."
                image={notFoundImage}
                imageSizing="Contain"
                buttonPrimary={{
                    text: "Back to safety",
                    href: "/",
                }}
                buttonSecondary={{
                    text: null,
                }}
            />

            <CtaBannerOne
                theme="primary"
                title="Corrective action needed: head back home"
                description="The homepage passed inspection. Start there, or talk to us and we will point you to the right place."
                buttonPrimary={{
                    text: "Go to homepage",
                    href: "/",
                }}
                buttonSecondary={{
                    text: "Talk to us",
                    href: "/company/contact",
                }}
            />

        </>

    );

}