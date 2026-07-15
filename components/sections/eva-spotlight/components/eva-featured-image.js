"use client";

// Next
import Image from "next/image";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Styles
import styles from "@/styles/components/sections/eva-spotlight.module.scss";

export default function EvaFeaturedImage({
    featuredImage,
    title,
    aspectRatio = "16/9",
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div
            ref={ref}
            className={styles.evaSpotlightFeaturedImage}
            data-aspect-ratio={aspectRatio}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 }}
        >

            <Image
                src={featuredImage}
                alt={title}
                sizes="100%"
                fill
            />

        </motion.div>

    )

}