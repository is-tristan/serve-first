// React
import { Suspense } from "react";

// Components
import Banner from "@/components/sections/banner/banner";
import LogoBar from "@/components/sections/logo-bar/logo-bar";
import IntroSection from "@/components/screens/home/intro-section";
import PlatformStory from "@/components/sections/platform-story/platform-story";
import ProductHighlight from "@/components/sections/product-highlight/product-highlight";
import Testimonials from "@/components/sections/testimonials/testimonials";
import EvaSpotlight from "@/components/sections/eva-spotlight/eva-spotlight";
import ContentGrid from "@/components/sections/content-grid/content-grid";
import IndustryCards from "@/components/sections/industry-cards/industry-cards";
import BlogGrid from "@/components/dynamic-sections/blog-grid";
import IsLoading from "@/components/handlers/is-loading";
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Data
import {
  platformStoryData,
  productHighlightData,
  contentGridData,
  industryCardsData,
} from "./data.js";

import { getPageMetadata } from "@/seo/seo-map-data.js";
import { getCanonicalUrl } from "@/seo/site-url";


export async function generateMetadata() {
  return getPageMetadata("/");
}

export default function Home() {

  return (

    <>

      <link rel="canonical" href={getCanonicalUrl("/")} />

      <Banner
        eyebrow="Operational intelligence for customer experience"
        title="Catch every issue before your customers feel it"
        description="Serve First connects your customer, operational and market signals across every location, then turns them into the actions that fix them."
        image="/images/home/home-cover.png"
        imageSizing="contain"
        buttonSecondary={{
          text: "See how it works",
          href: "/how-it-works/capture",
        }} />

      <LogoBar />

      <IntroSection />

      <PlatformStory
        eyebrow={null}
        title="The fastest way from feedback to fixed"
        description={null}
        data={platformStoryData}
      />

      <ProductHighlight
        eyebrow="One platform"
        title="One connected picture"
        description="The customer and the operation, finally in the same view."
        linkText={null}
        data={productHighlightData}
      />

      <Testimonials btnPrimary={null} />

      <EvaSpotlight
        eyebrow={null}
        title={null}
        description={null}
        item={{
          "eyebrow": "Meet EVA",
          "title": "The always-on analyst for every location",
          "description": null,
          "htmlDescription": "<p><strong class='fw700'>EVA reads the signals across every location and hands you the next actions, no dashboard hunting.</strong></p> <p>EVA sits across every signal in one operating picture, finds what needs attention and tells you the action to take, where and why. No digging through dashboards to work out your next move.</p>",
          "image": "/images/home/home-eva.png",
          "imageWidth": 575,
          "imageHeight": 576,
          "imageSizing": "contain",
          "button": {
            "text": "Meet EVA",
            "href": "/eva",
          }
        }} />

      <ContentGrid
        eyebrow="By challenge"
        title="Solve the problem you came here with"
        button={null}
        data={contentGridData}
      />

      <IndustryCards
        eyebrow="By industry"
        title="Built for every multi-location business"
        description="One platform, tuned to the standards and signals your sector runs on."
        button={null}
        data={industryCardsData}
        btnPrimary={null}
        btnSecondary={null}
        industryCardsContainerClass="noPaddingTop"
      />

      <Suspense fallback={<IsLoading />}>

        <BlogGrid containerTopClass="noPaddingTop" />

      </Suspense>

      <CtaBannerOne
        theme="primary"
        title="See it at your locations"
        description="A personalized walkthrough with your locations, teams and data."
      />

    </>

  );

}