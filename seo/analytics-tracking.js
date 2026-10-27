import HubspotTracking from "@/seo/hubspot-tracking";

import PosthogTracking from "@/seo/posthog-tracking";

export default function AnalyticsTracking() {

    return (

        <>

            <HubspotTracking />

            <PosthogTracking />

        </>

    );

}
