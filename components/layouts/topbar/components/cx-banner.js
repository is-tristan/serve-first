"use client";

// React
import { useEffect, useRef } from "react";

// Fonts
import { fontVariables } from "@/components/cx-is-broken/fonts/fonts";

// Styles
import styles from "@/styles/components/layouts/topbar/cx-banner.module.scss";

const cellSize = 6;
const dotSize = 4;
const framesPerSecond = 24;
const strength = 0.6;
const inkColor = "#0A0A0A";
const bayerMatrix = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((value) => (value + 0.5) / 16);
const shades = ["#2A2A2A", "#383838", "#474747", "#575757", "#686868", "#7A7A7A"];

function getFieldValue(x, y, time) {

    const value = 0.5
        + 0.28 * Math.sin(x * 0.011 + time * 0.35)
        + 0.20 * Math.sin(x * 0.0043 - time * 0.22 + y * 0.09)
        + 0.14 * Math.sin((x * 0.6 + y) * 0.031 + time * 0.6)
        + 0.08 * Math.sin(x * 0.083 - y * 0.12 - time * 0.9);

    return value * strength;

}

export default function CxBanner({ href = "/cx-is-broken" }) {

    const bannerRef = useRef(null);

    const canvasRef = useRef(null);

    useEffect(() => {

        const banner = bannerRef.current;
        const canvas = canvasRef.current;

        if (!banner || !canvas?.getContext) {
            return;
        }

        const context = canvas.getContext("2d");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const startTime = performance.now();

        let width = 0;
        let height = 0;
        let running = false;
        let visible = true;
        let frameId = 0;
        let lastFrame = 0;

        function draw(time) {

            context.fillStyle = inkColor;
            context.fillRect(0, 0, width, height);

            const columns = Math.ceil(width / cellSize);
            const rows = Math.ceil(height / cellSize);
            const topShade = shades.length - 1;

            for (let row = 0; row < rows; row++) {

                for (let column = 0; column < columns; column++) {

                    const value = getFieldValue(column * cellSize, row * cellSize, time);
                    const threshold = bayerMatrix[(row & 3) * 4 + (column & 3)];

                    if (value > threshold) {

                        const shade = Math.min(topShade, Math.max(0, Math.floor((value - threshold) * 2.2 * shades.length)));

                        context.fillStyle = shades[shade];
                        context.fillRect(column * cellSize, row * cellSize, dotSize, dotSize);

                    }

                }

            }

        }

        function resize() {

            const rect = banner.getBoundingClientRect();
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

            width = Math.max(1, Math.round(rect.width));
            height = Math.max(1, Math.round(rect.height));
            canvas.width = width * pixelRatio;
            canvas.height = height * pixelRatio;
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

            draw((performance.now() - startTime) / 1000);

        }

        function loop(now) {

            frameId = 0;

            if (!running) {
                return;
            }

            if (now - lastFrame >= 1000 / framesPerSecond) {
                lastFrame = now;
                draw((now - startTime) / 1000);
            }

            frameId = window.requestAnimationFrame(loop);

        }

        function update() {

            const shouldRun = !reduceMotion && visible && !document.hidden;

            if (shouldRun && !running) {
                running = true;
                frameId = window.requestAnimationFrame(loop);
            }

            if (!shouldRun && running) {
                running = false;

                if (frameId) {
                    window.cancelAnimationFrame(frameId);
                }

                frameId = 0;
            }

        }

        const resizeObserver = new ResizeObserver(resize);

        const intersectionObserver = new IntersectionObserver((entries) => {
            visible = entries[0].isIntersecting;
            update();
        });

        resizeObserver.observe(banner);
        intersectionObserver.observe(banner);
        document.addEventListener("visibilitychange", update);

        resize();
        update();

        return () => {

            running = false;

            if (frameId) {
                window.cancelAnimationFrame(frameId);
            }

            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            document.removeEventListener("visibilitychange", update);

        };

    }, []);

    return (

        <section
            ref={bannerRef}
            className={`${styles.cxBanner} ${fontVariables}`}
            aria-label="CX is Broken report"
        >

            <canvas ref={canvasRef} className={styles.cxBannerBg} aria-hidden="true" />

            <div className={styles.cxBannerText}>

                <p className={styles.cxBannerHeading}>

                    <span>CX is</span>

                    <span className={styles.cxBannerBlock}>Broken</span>

                </p>

                <p className={styles.cxBannerTagline}>Stop fixing. Start preventing.</p>

            </div>

            <a className={styles.cxBannerCta} href={href}>

                <span className={styles.cxBannerCtaLabel}>

                    Read the <span className={styles.cxBannerCtaLong}>full </span>report

                </span>

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">

                    <path d="M5 12h14" />

                    <path d="M13 6l6 6-6 6" />

                </svg>

            </a>

        </section>

    );

}
