import Script from "next/script";

import { GoogleTagManager } from "@next/third-parties/google";

export default function GoogleTracking() {

    return (

        <>

            <GoogleTagManager gtmId="GTM-5SFCP9R8" />

            <Script
                id="gtagJs"
                src="https://www.googletagmanager.com/gtag/js?id=G-RQ0NBZ2L7D"
                strategy="afterInteractive"
            />

            <Script id="gtagInit" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag("js", new Date());
                    gtag("config", "G-RQ0NBZ2L7D");
                    gtag("config", "AW-17651147189");
                `}
            </Script>

        </>

    );

}
