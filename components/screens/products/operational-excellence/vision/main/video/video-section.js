"use client";

import { useEffect, useRef } from "react";

import styles from "@/styles/components/screens/products/operational-excellence/vision/components/video-section.module.scss";

export default function VideoSection() {

    const sectionRef = useRef(null);

    const videoRef = useRef(null);

    useEffect(() => {

        const section = sectionRef.current;

        const video = videoRef.current;

        if (!section || !video) {

            return;

        }

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    video.play().catch(() => {});

                } else {

                    video.pause();

                }

            },

            { threshold: 0 }

        );

        observer.observe(section);

        return () => observer.disconnect();

    }, []);

    return (

        <section ref={sectionRef} className={styles.videoSection}>

            <div className={styles.videoContainer}>

                <video
                    ref={videoRef}
                    src="/videos/products/operational-excellence/vision/vision-product-banner.webm"
                    poster="/videos/products/operational-excellence/vision/vision-product-banner-poster.avif"
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                    className={styles.video}
                    preload="none"
                />

            </div>

        </section>

    );

}
