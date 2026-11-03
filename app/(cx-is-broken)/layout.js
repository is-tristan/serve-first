// Styles
import "@/components/cx-is-broken/styles/cx-is-broken.scss";

// Components
import SmoothScroll from "@/components/handlers/smooth-scroll";
import CxIsBrokenCookieConsent from "@/components/cx-is-broken/cookie-consent/cookie-consent";

export default function CxIsBrokenLayout({ children }) {

    return (

        <>

            <SmoothScroll />

            {children}

            <CxIsBrokenCookieConsent />

        </>

    );

}
