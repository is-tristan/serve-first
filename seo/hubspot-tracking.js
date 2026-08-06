"use client";

import { useEffect } from "react";

export default function HubspotTracking() {

    useEffect(() => {

        if (document.getElementById("hs-script-loader")) {

            return;

        }

        const script = document.createElement("script");

        script.type = "text/javascript";

        script.id = "hs-script-loader";

        script.async = true;

        script.defer = true;

        script.src = "//js-eu1.hs-scripts.com/7545654.js";

        document.body.appendChild(script);

    }, []);

    return null;

}
