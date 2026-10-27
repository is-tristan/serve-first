"use client";

// React
import { useEffect, useState } from "react";

// SEO
import AnalyticsTracking from "@/seo/analytics-tracking";
import GoogleTracking from "@/seo/google-tracking";

// Components
import CookieBanner from "./components/cookie-banner";
import CookieOverlay from "./components/cookie-overlay";

// Utils
import {
    getCookieConsent,
    hasAnalyticsConsent,
    openCookieSettingsEventName,
    setCookieConsent,
    updateGoogleConsent,
} from "@/utils/cookie-consent";

export default function CookieConsent() {

    const [preferences, setPreferences] = useState(null);

    const [hasCheckedConsent, setHasCheckedConsent] = useState(false);

    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

    useEffect(() => {

        const savedPreferences = getCookieConsent();

        if (savedPreferences) {

            updateGoogleConsent(savedPreferences);

        }

        setPreferences(savedPreferences);

        setHasCheckedConsent(true);

    }, []);

    useEffect(() => {

        const handleOpenCookieSettings = () => setIsPreferencesOpen(true);

        window.addEventListener(openCookieSettingsEventName, handleOpenCookieSettings);

        return () => window.removeEventListener(openCookieSettingsEventName, handleOpenCookieSettings);

    }, []);

    const handleConsentSave = (nextPreferences) => {

        const savedPreferences = {
            necessary: true,
            measurement: Boolean(nextPreferences.measurement),
            marketing: Boolean(nextPreferences.marketing),
        };

        const isRevokingAnalytics = hasAnalyticsConsent(preferences) && !hasAnalyticsConsent(savedPreferences);

        setCookieConsent(savedPreferences);

        updateGoogleConsent(savedPreferences);

        if (isRevokingAnalytics) {

            window.location.reload();

            return;

        }

        setPreferences(savedPreferences);

    };

    if (!hasCheckedConsent) {

        return null;

    }

    return (

        <>

            <GoogleTracking />

            {hasAnalyticsConsent(preferences) ? <AnalyticsTracking /> : null}

            {!preferences ? (

                <CookieBanner
                    onConsentSave={handleConsentSave}
                    onManagePreferences={() => setIsPreferencesOpen(true)}
                />

            ) : null}

            <CookieOverlay
                isOpen={isPreferencesOpen}
                currentPreferences={preferences}
                onClose={() => setIsPreferencesOpen(false)}
                onConsentSave={handleConsentSave}
            />

        </>

    );

}
