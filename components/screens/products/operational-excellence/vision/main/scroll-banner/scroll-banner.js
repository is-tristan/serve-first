"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

import ScrollBannerVideoOverlay from "./components/ui/scroll-banner-video-overlay";
import ScrollBannerFrame1 from "./components/frames/scroll-banner-frame-1";
import ScrollBannerFrame2 from "./components/frames/scroll-banner-frame-2";
import ScrollBannerFrame3 from "./components/frames/scroll-banner-frame-3";
import ScrollBannerPagination from "./components/ui/scroll-banner-pagination";
import ScrollBannerBackground from "./components/scrollBannerBackground";
import { setScrollBannerVirtualScroll } from "./scroll-banner-virtual-scroll";

import styles from "@/styles/components/screens/products/operational-excellence/vision/components/scroll-banner-section.module.scss";

const frameCount = 3;
const gestureIdleMs = 320;
const snapDuration = 0.8;
const pageSnapDuration = 1.15;

const frameProgress = {
    1: 0,
    2: 0.45,
    3: 0.82,
};

const frameAnnouncements = {
    1: "Frame 1 of 3: VISION introduction",
    2: "Frame 2 of 3: VISION analyzing and detecting an issue",
    3: "Frame 3 of 3: VISION raising a task from the detected issue",
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

function getFrameFromProgress(progress, currentFrame) {

    if (currentFrame <= 1) {
        return progress >= frameProgress[2] ? 2 : 1;
    }

    if (currentFrame === 2) {
        if (progress >= frameProgress[3]) {
            return 3;
        }

        if (progress < frameProgress[2] * 0.5) {
            return 1;
        }

        return 2;
    }

    return progress < (frameProgress[2] + frameProgress[3]) / 2 ? 2 : 3;

}

function getFrameScrollTarget(section, frame) {

    const start = window.scrollY + section.getBoundingClientRect().top;
    const range = Math.max(0, section.offsetHeight - window.innerHeight);

    return start + frameProgress[frame] * range;

}

function isPinnedSection(section) {

    const rect = section.getBoundingClientRect();

    return rect.top <= 1 && rect.bottom > window.innerHeight + 1;

}

export default function ScrollBanner() {

    const sectionRef = useRef(null);
    const lenisRef = useRef(null);
    const frameActiveRef = useRef(1);
    const pinStateRef = useRef("before");
    const snappingRef = useRef(false);
    const gestureUntilRef = useRef(0);
    const deltaAccumRef = useRef(0);
    const scrollToFrameRef = useRef(null);
    const [frameActive, setFrameActive] = useState(1);
    const [pinState, setPinState] = useState("before");

    const scrollToFrame = (frame, duration = pageSnapDuration, onComplete) => {

        const section = sectionRef.current;
        const nextFrame = Math.min(frameCount, Math.max(1, frame));

        if (!section) {
            return;
        }

        snappingRef.current = true;
        frameActiveRef.current = nextFrame;
        setFrameActive(nextFrame);

        const target = getFrameScrollTarget(section, nextFrame);
        let didFinish = false;

        const finish = () => {

            if (didFinish) {
                return;
            }

            didFinish = true;
            snappingRef.current = false;
            onComplete?.();

        };

        const safetyMs = Math.round(duration * 1000) + 250;
        const safetyId = window.setTimeout(finish, safetyMs);

        const onSnapComplete = () => {
            window.clearTimeout(safetyId);
            finish();
        };

        if (lenisRef.current) {
            lenisRef.current.scrollTo(target, {
                duration,
                lock: true,
                force: true,
                onComplete: onSnapComplete,
            });
            return;
        }

        window.scrollTo({ top: target, behavior: "smooth" });
        window.setTimeout(onSnapComplete, duration * 1000);

    };

    scrollToFrameRef.current = scrollToFrame;

    useEffect(() => {

        const isExitDirection = (direction, currentFrame) => {

            return (direction === 1 && currentFrame === frameCount) || (direction === -1 && currentFrame === 1);

        };

        const tickFrame = (direction) => {

            const currentFrame = frameActiveRef.current;
            const nextFrame = currentFrame + direction;

            if (nextFrame < 1 || nextFrame > frameCount) {
                return false;
            }

            gestureUntilRef.current = performance.now() + gestureIdleMs;
            deltaAccumRef.current = 0;
            scrollToFrameRef.current?.(nextFrame, snapDuration);

            return true;

        };

        const shouldHoldGesture = (now) => {

            if (snappingRef.current) {
                return true;
            }

            return now < gestureUntilRef.current;

        };

        const onVirtualScroll = (data) => {

            const section = sectionRef.current;
            const event = data.event;
            const eventType = event?.type;

            if (!section) {
                return true;
            }

            if (eventType === "touchend" || eventType === "touchcancel") {
                gestureUntilRef.current = 0;
                deltaAccumRef.current = 0;
                return !snappingRef.current;
            }

            if (Math.abs(data.deltaX) > Math.abs(data.deltaY)) {
                return true;
            }

            if (data.deltaX === 0 && data.deltaY === 0) {
                return !snappingRef.current;
            }

            if (!isPinnedSection(section)) {
                return true;
            }

            const direction = data.deltaY > 0 ? 1 : -1;
            const currentFrame = frameActiveRef.current;

            if (!snappingRef.current && isExitDirection(direction, currentFrame)) {
                deltaAccumRef.current = 0;
                gestureUntilRef.current = 0;
                return true;
            }

            if (shouldHoldGesture(performance.now())) {
                deltaAccumRef.current = 0;

                if (event?.cancelable) {
                    event.preventDefault();
                }

                return false;
            }

            deltaAccumRef.current += data.deltaY;
            const accumDirection = deltaAccumRef.current > 0 ? 1 : -1;

            if (isExitDirection(accumDirection, currentFrame)) {
                deltaAccumRef.current = 0;
                return true;
            }

            if (event?.cancelable) {
                event.preventDefault();
            }

            if (Math.abs(deltaAccumRef.current) < 48) {
                return false;
            }

            tickFrame(accumDirection);

            return false;

        };

        const onKeyDown = (event) => {

            if (event.defaultPrevented || event.repeat) {
                return;
            }

            const section = sectionRef.current;

            if (!section || !isPinnedSection(section)) {
                return;
            }

            if (event.target instanceof Element && event.target.closest("button, a, input, textarea, select, [contenteditable]")) {
                return;
            }

            const isDown = event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ";
            const isUp = event.key === "ArrowUp" || event.key === "PageUp";

            if (!isDown && !isUp) {
                return;
            }

            const direction = isDown ? 1 : -1;
            const currentFrame = frameActiveRef.current;

            if (!snappingRef.current && isExitDirection(direction, currentFrame)) {
                gestureUntilRef.current = 0;
                return;
            }

            if (shouldHoldGesture(performance.now())) {
                event.preventDefault();
                return;
            }

            event.preventDefault();
            tickFrame(direction);

        };

        setScrollBannerVirtualScroll(onVirtualScroll);
        window.addEventListener("keydown", onKeyDown);

        return () => {
            setScrollBannerVirtualScroll(null);
            window.removeEventListener("keydown", onKeyDown);
        };

    }, []);

    useLenis((lenis) => {

        lenisRef.current = lenis;

        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const nextPinState = getPinState(section);

        if (pinStateRef.current === "before" && nextPinState === "after" && Math.abs(lenis.velocity) > 1) {
            pinStateRef.current = "pinned";
            setPinState("pinned");
            scrollToFrame(1, snapDuration);
            return;
        }

        pinStateRef.current = nextPinState;
        setPinState((current) => current === nextPinState ? current : nextPinState);

        if (snappingRef.current) {
            return;
        }

        const range = section.offsetHeight - window.innerHeight;

        if (range <= 0) {
            return;
        }

        const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / range));
        const nextFrame = getFrameFromProgress(progress, frameActiveRef.current);

        if (nextFrame !== frameActiveRef.current) {
            frameActiveRef.current = nextFrame;
            setFrameActive(nextFrame);
        }

    });

    return (

        <section
            className={styles.scrollBanner}
            ref={sectionRef}
            data-frame={frameActive}
            aria-roledescription="carousel"
            aria-label="VISION product introduction"
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
