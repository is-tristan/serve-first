// Typography
import { Special_Gothic_Expanded_One, Poppins } from "next/font/google";

const specialGothicExpandedOne = Special_Gothic_Expanded_One({
  variable: "--font-special-gothic-expanded-one",
  subsets: ["latin"],
  weight: "400",
  fallback: ["ui-sans-serif", "sans-serif"],
  adjustFontFallback: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Styles
import "@/styles/main.scss";

// Next
import { Analytics } from "@vercel/analytics/next";

// Components
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import SmoothScroll from "@/components/handlers/smooth-scroll";

// Sanity
import { SanityLive } from "@/sanity/lib/live";

import { getPageMetadata } from "@/seo/seo-map-data";

export const metadata = getPageMetadata("/");

export default function RootLayout({ children }) {

  return (

    <html lang="en" className={`${specialGothicExpandedOne.variable} ${poppins.variable}`} data-scroll-behavior="smooth">

      <body>

        <div id="app" className="app">

          <SmoothScroll />

          <Header />

          {children}

          <Footer />

        </div>

        <SanityLive />

        <Analytics />

      </body>

    </html>

  );

}
