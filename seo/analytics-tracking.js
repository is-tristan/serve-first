import HubspotTracking from "@/seo/hubspot-tracking";

import PosthogTracking from "@/seo/posthog-tracking";

import LinkedinTracking from "@/seo/linkedin-tracking";

export default function AnalyticsTracking() {

    return (

        <>

            <HubspotTracking />

            <PosthogTracking />

            <LinkedinTracking />

        </>

    );

}
