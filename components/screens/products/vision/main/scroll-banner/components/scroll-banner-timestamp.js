"use client";

// Imports
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

// Styles
import styles from "@/styles/components/screens/products/vision/components/scroll-banner-section.module.scss";

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

export default function ScrollBannerTimestamp() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(() => {
        if (!isInView) {
            return;
        }

        const intervalId = setInterval(() => {
            setElapsedSeconds((current) => current + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isInView]);

    const timestamp = getTimestampParts(elapsedSeconds);

    return (

        <div className={styles.overlayText} ref={ref}>

            <span className={`${styles.timestamp} ${styles.hours}`}>
                {formatTimestampPart(timestamp.hours)}
            </span>

            <span className={styles.timestampDivider}>:</span>

            <span className={`${styles.timestamp} ${styles.minutes}`}>
                {formatTimestampPart(timestamp.minutes)}
            </span>

            <span className={styles.timestampDivider}>:</span>

            <span className={`${styles.timestamp} ${styles.seconds}`}>
                {formatTimestampPart(timestamp.seconds)}
            </span>

        </div>

    );

}
