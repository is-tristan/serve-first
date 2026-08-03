import { Special_Gothic_Expanded_One, Poppins } from "next/font/google";

import "@/styles/main.scss";

import { getPageMetadata } from "@/seo/seo-map-data";

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

export const metadata = getPageMetadata("/");

export default function RootLayout({ children }) {

  return (

    <html lang="en" className={`${specialGothicExpandedOne.variable} ${poppins.variable}`} data-scroll-behavior="smooth">

      <body>

        {children}

      </body>

    </html>

  );

}
