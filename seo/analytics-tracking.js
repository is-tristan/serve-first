import Script from "next/script";

import {
    GoogleTagManager,
    GoogleAnalytics
} from "@next/third-parties/google";

import HubspotTracking from "@/seo/hubspot-tracking";

export default function AnalyticsTracking() {

    return (

        <>

            <GoogleTagManager gtmId="GTM-5SFCP9R8" />

            <GoogleAnalytics gaId="G-RQ0NBZ2L7D" />

            <Script
                id="googleAdsGtag"
                src="https://www.googletagmanager.com/gtag/js?id=AW-17651147189"
                strategy="afterInteractive"
            />

            <Script id="googleAdsGtagInit" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag("js", new Date());
                    gtag("config", "AW-17651147189");
                `}
            </Script>

            <HubspotTracking />

        </>

    );

}
