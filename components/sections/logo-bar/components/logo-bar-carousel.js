"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

import styles from "@/styles/components/sections/logo-bar.module.scss";

export default function LogoBarCarousel({ data = [] }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const renderLogos = (isDuplicate = false) => (

        data.map((logo, index) => (

            <div
                key={`${isDuplicate ? "duplicate" : "original"}-${index}`}
                className={styles.logoCarouselItem}
                aria-hidden={isDuplicate ? "true" : undefined}
            >

                <Image
                    src={logo.src}
                    alt={isDuplicate ? "" : logo.alt}
                    width={250}
                    height={100}
                    loading="lazy"
                />

            </div>

        ))

    );

    return (

        <motion.div
            className={styles.logoCarousel}
            ref={ref}
            style={{ "--logoCount": data.length }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 }}
        >

            <div className={styles.logoCarouselTrack}>

                {renderLogos(false)}

                {renderLogos(true)}

            </div>

        </motion.div>

    );

}
