// Styles
import "@/styles/main.scss";

// Components
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import SmoothScroll from "@/components/handlers/smooth-scroll";
import CookieConsent from "@/components/cookie-consent/cookie-consent";
import PageHeadingProvider from "@/components/content/page-heading-provider";
import PageSchema from "@/seo/page-schema";

// Sanity
import { SanityLive } from "@/sanity/lib/live";
import { getPageHeadings } from "@/sanity/lib/queries";

export default async function WebsiteLayout({ children }) {

  const headings = await getPageHeadings();

  return (

    <>

      <PageSchema />

      <div id="app" className="app">

        <SmoothScroll />

        <Header />

        <main id="main" className="main" aria-label="Main content">

          <PageHeadingProvider headings={headings}>

            {children}

          </PageHeadingProvider>

        </main>

        <Footer />

      </div>

      <CookieConsent />

      <SanityLive />

    </>

  );

}
