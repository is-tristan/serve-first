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

            <HubspotTracking />

        </>

    );

}
