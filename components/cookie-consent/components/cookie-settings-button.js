"use client";

// Utils
import { openCookieSettings } from "@/utils/cookie-consent";

export default function CookieSettingsButton({ className }) {

    return (

        <button
            type="button"
            className={className}
            onClick={openCookieSettings}
        >

            Cookie Settings

        </button>

    );

}
