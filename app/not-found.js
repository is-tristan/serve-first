// Styles
import "@/styles/main.scss";

// Components
import Banner from "@/components/sections/banner/banner";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import SmoothScroll from "@/components/handlers/smooth-scroll";
import notFoundImage from "@/public/images/error-404/error_404_image.png";

export default function NotFound() {

    return (

        <div id="app" className="app">

            <SmoothScroll />

            <Header />

            <main id="main" className="main" aria-label="Main content">

                <Banner
                    eyebrow="404 - Page Not Found"
                    title="This page has failed its audit"
                    description="We checked the site, scored the page and marked it non-compliant. It is either missing, moved or never existed. Either way, it didn't meet the standard."
                    image={notFoundImage}
                    imageSizing="contain"
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
                    description="The homepage passed inspection. Start there, or talk to us and we'll point you to the right place."
                    buttonPrimary={{
                        text: "Go to homepage",
                        href: "/",
                    }}
                    buttonSecondary={{
                        text: "Talk to us",
                        href: "/company/contact-us",
                    }}
                />

            </main>

            <Footer />

        </div>

    );

}
