// Styles
import "@/styles/main.scss";

// Components
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import SmoothScroll from "@/components/handlers/smooth-scroll";
import CookieConsent from "@/components/cookie-consent/cookie-consent";
import PageSchema from "@/seo/page-schema";

// Sanity
import { SanityLive } from "@/sanity/lib/live";

export default function WebsiteLayout({ children }) {

  return (

    <>

      <PageSchema />

      <div id="app" className="app">

        <SmoothScroll />

        <Header />

        <main id="main" className="main" aria-label="Main content">

          {children}

        </main>

        <Footer />

      </div>

      <CookieConsent />

      <SanityLive />

    </>

  );

}
