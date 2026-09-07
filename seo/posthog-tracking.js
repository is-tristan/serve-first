"use client";

import { useEffect } from "react";

import posthog from "posthog-js";

export default function PosthogTracking() {

    useEffect(() => {

        if (posthog.__loaded) {

            return;

        }

        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
            defaults: "2026-05-30",
        });

    }, []);

    return null;

}
