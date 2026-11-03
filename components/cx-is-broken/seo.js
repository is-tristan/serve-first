import { getCanonicalSiteUrl, getCanonicalUrl } from "@/seo/site-url";

const siteName = "CX is Broken · Serve First";

const siteDescription =
  "Why Operational Excellence is the future of customer experience. Insights from 250 CX leaders, plus a free benchmark to see how your CX stacks up.";

const ogImage = "/cx-is-broken/og-image.png";

export const cxIsBrokenPath = "/cx-is-broken";

export const cxIsBrokenMetadata = {
  metadataBase: new URL(getCanonicalSiteUrl()),
  title: siteName,
  description: siteDescription,
  alternates: {
    canonical: getCanonicalUrl(cxIsBrokenPath),
  },
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description:
      "Why Operational Excellence is the future of customer experience. Insights from 250 CX leaders.",
    url: getCanonicalUrl(cxIsBrokenPath),
    images: [
      {
        url: ogImage,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [ogImage],
  },
};

export const cxIsBrokenViewport = {
  themeColor: "#0A0A0A",
};
