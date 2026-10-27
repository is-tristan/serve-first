import Script from "next/script";

export default function GoogleConsentMode() {

    return (

        <Script id="googleConsentMode" strategy="beforeInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
                window.gtag("consent", "default", {
                    ad_storage: "denied",
                    ad_user_data: "denied",
                    ad_personalization: "denied",
                    analytics_storage: "denied",
                    personalization_storage: "denied",
                    functionality_storage: "granted",
                    security_storage: "granted"
                });
                window.gtag("set", "ads_data_redaction", true);
            `}
        </Script>

    );

}
