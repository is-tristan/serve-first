"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Styles
import styles from "@/styles/components/decoration/eyebrow.module.scss";

export default function Eyebrow({
    hasAnimation = true,
    delay = 0.25,
    type = "primary",
    textColor = "primary",
    hasDash = false,
    text }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div className={styles.eyebrow} data-type={type} data-text-color={textColor} ref={ref} animate={hasAnimation ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }) : { opacity: 1, y: 0 }} initial={hasAnimation ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: delay }}>

            {text && (

                <span className={`${styles.text}`}>

                    {hasDash ? (

                        <>

                            <span className={styles.dash}>-</span> {text}

                        </>

                    ) : (

                        text

                    )}


                </span>

            )}

        </motion.div>
    )
}