"use client";

// React
import { useRef } from "react";

// Motion
import { useInView } from "motion/react";

// Components
import ComingSoonContent from "./components/coming-soon-content";

// Styles
import styles from "@/styles/components/screens/products/operational-excellence/vision/coming-soon.module.scss";

// Imports
const videoUrl = "/videos/products/operational-excellence/vision/video-vision.mp4";
const videoPosterUrl = "/videos/products/operational-excellence/vision/vision-video-poster.avif";

export default function ComingSoon() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <section ref={ref} className={`row ${styles.comingSoonSection}`}>

            <div className={`container ${styles.container}`}>

                <ComingSoonContent isInView={isInView} />

            </div>

            <video
                src={videoUrl}
                poster={videoPosterUrl}
                autoPlay
                muted
                loop
                playsInline
                className={`${styles.video}`}
                preload="none"
            />

        </section>

    )

}
