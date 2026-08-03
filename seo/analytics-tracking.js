import {
    GoogleTagManager,
    GoogleAnalytics
} from '@next/third-parties/google';

export default function AnalyticsTracking() {

    return (

        <>

            <GoogleTagManager gtmId="GTM-5SFCP9R8" />

            <GoogleAnalytics gaId="G-RQ0NBZ2L7D" />

        </>

    );

}