"use client";

// React
import { useEffect, useState } from "react";

// Styles
import styles from "@/styles/components/screens/products/operational-excellence/vision/coming-soon.module.scss";

const countdownEndDate = new Date("2026-09-15T09:00:00Z");

function getCountdownParts(endDate) {
    const remainingMs = Math.max(0, endDate.getTime() - Date.now());
    const totalSeconds = Math.floor(remainingMs / 1000);

    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
    };
}

function formatCountdownValue(value) {
    return String(value).padStart(2, "0");
}

export default function ComingSoonCountdown() {

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            setCountdown(getCountdownParts(countdownEndDate));
        };

        updateCountdown();

        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (

        <div className={styles.countdown}>

            <div className={styles.countdownItem} data-value="days">

                <div className={styles.countdownItemValue}>{formatCountdownValue(countdown.days)}</div>

                <div className={styles.countdownItemLabel}>Days</div>

            </div>

            <div className={styles.countdownItem} data-value="hours">

                <div className={styles.countdownItemValue}>{formatCountdownValue(countdown.hours)}</div>

                <div className={styles.countdownItemLabel}>Hours</div>

            </div>

            <div className={styles.countdownItem} data-value="minutes">

                <div className={styles.countdownItemValue}>{formatCountdownValue(countdown.minutes)}</div>

                <div className={styles.countdownItemLabel}>Minutes</div>

            </div>

            <div className={styles.countdownItem} data-value="seconds">

                <div className={styles.countdownItemValue}>{formatCountdownValue(countdown.seconds)}</div>

                <div className={styles.countdownItemLabel}>Seconds</div>

            </div>

        </div>

    )
}
