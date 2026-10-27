export const cookieConsentName = "cookieConsent";

export const cookieConsentMaxAgeSeconds = 60 * 60 * 24 * 182;

export const openCookieSettingsEventName = "openCookieSettings";

export const defaultCookiePreferences = {
    necessary: true,
    measurement: false,
    marketing: false,
};

export function parseCookieConsent(rawValue) {

    if (!rawValue) {

        return null;

    }

    try {

        const preferences = JSON.parse(decodeURIComponent(rawValue));

        if (
            typeof preferences !== "object"
            || preferences === null
            || typeof preferences.necessary !== "boolean"
            || typeof preferences.measurement !== "boolean"
            || typeof preferences.marketing !== "boolean"
        ) {

            return null;

        }

        return {
            necessary: true,
            measurement: preferences.measurement,
            marketing: preferences.marketing,
        };

    } catch {

        return null;

    }

}

export function getCookieConsent() {

    if (typeof document === "undefined") {

        return null;

    }

    const cookieEntry = document.cookie
        .split("; ")
        .find((entry) => entry.startsWith(`${cookieConsentName}=`));

    if (!cookieEntry) {

        return null;

    }

    return parseCookieConsent(cookieEntry.slice(cookieConsentName.length + 1));

}

export function setCookieConsent(preferences) {

    if (typeof document === "undefined") {

        return;

    }

    const value = encodeURIComponent(JSON.stringify({
        necessary: true,
        measurement: Boolean(preferences.measurement),
        marketing: Boolean(preferences.marketing),
    }));

    document.cookie = [
        `${cookieConsentName}=${value}`,
        `Max-Age=${cookieConsentMaxAgeSeconds}`,
        "Path=/",
        "SameSite=Lax",
    ].join("; ");

}

export function openCookieSettings() {

    if (typeof window === "undefined") {

        return;

    }

    window.dispatchEvent(new Event(openCookieSettingsEventName));

}

export function hasAnalyticsConsent(preferences) {

    return Boolean(preferences?.measurement && preferences?.marketing);

}

export function getGoogleConsentState(preferences) {

    const measurementState = preferences?.measurement ? "granted" : "denied";

    const marketingState = preferences?.marketing ? "granted" : "denied";

    return {
        ad_storage: marketingState,
        ad_user_data: marketingState,
        ad_personalization: marketingState,
        analytics_storage: measurementState,
        personalization_storage: marketingState,
        functionality_storage: "granted",
        security_storage: "granted",
    };

}

export function updateGoogleConsent(preferences) {

    if (typeof window === "undefined") {

        return;

    }

    window.dataLayer = window.dataLayer || [];

    window.gtag = window.gtag || function gtag() {

        window.dataLayer.push(arguments);

    };

    window.gtag("consent", "update", getGoogleConsentState(preferences));

}
