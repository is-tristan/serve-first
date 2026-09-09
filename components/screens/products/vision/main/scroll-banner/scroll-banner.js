"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

import ScrollBannerVideoOverlay from "./components/ui/scroll-banner-video-overlay";
import ScrollBannerFrame1 from "./components/frames/scroll-banner-frame-1";
import ScrollBannerFrame2 from "./components/frames/scroll-banner-frame-2";
import ScrollBannerFrame3 from "./components/frames/scroll-banner-frame-3";
import ScrollBannerPagination from "./components/ui/scroll-banner-pagination";
import ScrollBannerBackground from "./components/scrollBannerBackground";

import styles from "@/styles/components/screens/products/vision/components/scroll-banner-section.module.scss";

const frameCount = 3;

const frameAnnouncements = {
    1: "Frame 1 of 3: Vision introduction",
    2: "Frame 2 of 3: Vision analysing and detecting an issue",
    3: "Frame 3 of 3: Vision raising a task from the detected issue",
};

function getPinState(section) {

    const rect = section.getBoundingClientRect();

    if (rect.top > 0) {
        return "before";
    }

    if (rect.bottom <= window.innerHeight) {
        return "after";
    }

    return "pinned";

}

export default function ScrollBanner() {

    const sectionRef = useRef(null);
    const lenisRef = useRef(null);
    const [frameActive, setFrameActive] = useState(1);
    const [pinState, setPinState] = useState("before");

    useEffect(() => {

        const header = document.getElementById("header");

        if (!header) {
            return;
        }

        header.dataset.bannerFrame = String(frameActive);

        return () => {
            delete header.dataset.bannerFrame;
        };

    }, [frameActive]);

    useLenis((lenis) => {

        lenisRef.current = lenis;

        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const nextPinState = getPinState(section);

        setPinState((current) => current === nextPinState ? current : nextPinState);

        const range = section.offsetHeight - window.innerHeight;

        if (range <= 0) {
            return;
        }

        const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / range));
        let nextFrame = 1;

        if (progress >= 0.55) {
            nextFrame = 3;
        } else if (progress >= 0.22) {
            nextFrame = 2;
        }

        setFrameActive((current) => current === nextFrame ? current : nextFrame);

    });

    const scrollToFrame = (frame) => {

        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const start = window.scrollY + section.getBoundingClientRect().top;
        const range = section.offsetHeight - window.innerHeight;
        const frameProgress = {
            1: 0,
            2: 0.22,
            3: 0.55,
        };
        const target = start + frameProgress[frame] * range;

        if (lenisRef.current) {
            lenisRef.current.scrollTo(target, { duration: 1.15 });
            return;
        }

        window.scrollTo({ top: target, behavior: "smooth" });

    };

    return (

        <section
            className={styles.scrollBanner}
            ref={sectionRef}
            data-frame={frameActive}
            aria-roledescription="carousel"
            aria-label="Vision product introduction"
        >

            <div className="visuallyHidden" aria-live="polite" aria-atomic="true">
                {frameAnnouncements[frameActive]}
            </div>

            <div className={styles.scrollBannerPin} data-pin={pinState}>

                <ScrollBannerFrame1 isActive={frameActive === 1} />

                <ScrollBannerFrame2 isActive={frameActive === 2} />

                <ScrollBannerFrame3 isActive={frameActive === 3} />

                <ScrollBannerPagination
                    frameActive={frameActive}
                    frameCount={frameCount}
                    onSelect={scrollToFrame}
                />

                <ScrollBannerVideoOverlay frameActive={frameActive} />

                <ScrollBannerBackground />

            </div>

        </section>

    );

}
