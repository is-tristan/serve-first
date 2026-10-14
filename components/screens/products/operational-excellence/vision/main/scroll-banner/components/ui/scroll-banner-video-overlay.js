"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import ScrollBannerTimestamp from "./scroll-banner-timestamp";

// Styles
import styles from "@/styles/components/screens/products/operational-excellence/vision/components/scroll-banner-ui.module.scss";

// Borders
const borderTopLeft = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"> <path d="M32 2.16216V0H0V32H2.16216V2.16216H32Z" fill="white"/> </svg>';
const borderTopRight = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"> <path d="M29.8378 32L32 32L32 0L-7.7486e-07 -1.39876e-06L-8.69371e-07 2.16216L29.8378 2.16216L29.8378 32Z" fill="white"/> </svg>';
const borderBottomRight = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"> <path d="M-5.85838e-07 29.8378L-7.7486e-07 32L32 32L32 -7.7486e-07L29.8378 -9.63883e-07L29.8378 29.8378L-5.85838e-07 29.8378Z" fill="white"/> </svg>';
const borderBottomLeft = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"> <path d="M2.16216 -8.69372e-07L-1.39876e-06 -7.7486e-07L0 32L32 32L32 29.8378L2.16216 29.8378L2.16216 -8.69372e-07Z" fill="white"/> </svg>';

const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
};

const cornerTransition = (delay) => ({
    duration: 0.55,
    delay,
    ease: [0.22, 1, 0.36, 1],
});

export default function ScrollBannerVideoOverlay({ frameActive = 1 }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });
    const isInitiated = frameActive === 1;
    const isLive = frameActive >= 2;

    return (

        <div
            className={styles.scrollBannerVideoOverlay}
            ref={ref}
            data-live={isLive ? true : undefined}
            aria-hidden="true"
        >

            <div className={styles.overlayContainer}>

                <motion.div
                    className={`${styles.overlayContent} ${styles.overlayTopLeft}`}
                    initial={scaleIn.hidden}
                    animate={isInView ? scaleIn.visible : scaleIn.hidden}
                    transition={cornerTransition(0.1)}
                    style={{ transformOrigin: "top left" }}
                >

                    <div className={styles.border} dangerouslySetInnerHTML={{ __html: borderTopLeft }} />

                    <div className={styles.overlayText}>

                        <span>{isInitiated ? "VISION - Initiated" : "VISION - Analyzing"}</span>

                        {isLive && <span className={styles.elipsis} aria-hidden="true"></span>}

                    </div>

                </motion.div>

                <motion.div
                    className={`${styles.overlayContent} ${styles.overlayTopRight}`}
                    initial={scaleIn.hidden}
                    animate={isInView ? scaleIn.visible : scaleIn.hidden}
                    transition={cornerTransition(0.2)}
                    style={{ transformOrigin: "top right" }}
                >

                    <div className={styles.border} dangerouslySetInnerHTML={{ __html: borderTopRight }} />

                    <ScrollBannerTimestamp isLive={isLive} />

                </motion.div>

                <motion.div
                    className={`${styles.overlayContent} ${styles.overlayBottomLeft}`}
                    initial={scaleIn.hidden}
                    animate={isInView ? scaleIn.visible : scaleIn.hidden}
                    transition={cornerTransition(0.3)}
                    style={{ transformOrigin: "bottom left" }}
                >

                    <div className={styles.border} dangerouslySetInnerHTML={{ __html: borderBottomLeft }} />

                    {isLive ? (

                        <div className={`${styles.overlayText} ${styles.recordingContent}`}>

                            <span className={styles.recordingIcon} aria-hidden="true" />

                            <span>Rec</span>

                        </div>

                    ) : (

                        <div className={`${styles.overlayText} ${styles.notRecordingContent}`}>

                            <span>Not Recording</span>

                        </div>

                    )}

                </motion.div>

                <motion.div
                    className={`${styles.overlayContent} ${styles.overlayBottomRight}`}
                    initial={scaleIn.hidden}
                    animate={isInView ? scaleIn.visible : scaleIn.hidden}
                    transition={cornerTransition(0.4)}
                    style={{ transformOrigin: "bottom right" }}
                >

                    <div className={styles.border} dangerouslySetInnerHTML={{ __html: borderBottomRight }} />

                    <div className={styles.overlayText}>

                        <span className={styles.trackingStatus}>
                            {isLive ? "Tracking · Active" : "Tracking · Standby"}
                        </span>

                    </div>

                </motion.div>

            </div>

        </div>

    );

}
