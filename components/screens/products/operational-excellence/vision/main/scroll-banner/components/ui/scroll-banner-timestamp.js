"use client";

// Imports
import { useEffect, useState } from "react";

// Styles
import styles from "@/styles/components/screens/products/operational-excellence/vision/components/scroll-banner-ui.module.scss";

function formatTimestampPart(value) {
    return String(value).padStart(2, "0");
}

function getTimestampParts(totalSeconds) {
    return {
        hours: Math.floor(totalSeconds / 3600) % 100,
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
    };
}

export default function ScrollBannerTimestamp({ isLive = false }) {

    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(() => {

        if (!isLive) {
            return;
        }

        const intervalId = setInterval(() => {
            setElapsedSeconds((current) => current + 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [isLive]);

    const timestamp = getTimestampParts(elapsedSeconds);
    const hours = formatTimestampPart(timestamp.hours);
    const minutes = formatTimestampPart(timestamp.minutes);
    const seconds = formatTimestampPart(timestamp.seconds);

    return (

        <div
            className={styles.overlayText}
            role="timer"
            aria-label={`Recording time ${hours} hours ${minutes} minutes ${seconds} seconds`}
            aria-hidden="true"
        >

            <span className={`${styles.timestamp} ${styles.hours}`}>
                {hours}
            </span>

            <span className={styles.timestampDivider} aria-hidden="true">:</span>

            <span className={`${styles.timestamp} ${styles.minutes}`}>
                {minutes}
            </span>

            <span className={styles.timestampDivider} aria-hidden="true">:</span>

            <span className={`${styles.timestamp} ${styles.seconds}`}>
                {seconds}
            </span>

        </div>

    );

}
