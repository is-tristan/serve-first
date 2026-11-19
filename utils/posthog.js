import posthog from "posthog-js";

import { getCookieConsent, hasAnalyticsConsent } from "@/utils/cookie-consent";

export function trackFormSubmissionSuccess({ formName, email } = {}) {
    if (typeof window === "undefined") {
        return;
    }

    if (!hasAnalyticsConsent(getCookieConsent())) {
        return;
    }

    if (!posthog?.__loaded) {
        return;
    }

    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

    if (normalizedEmail) {
        posthog.identify(normalizedEmail);
    }

    posthog.capture("form_submitted", {
        form_name: formName || "website form",
    });
}
