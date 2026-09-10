"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Heading from "@/components/content/text";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/screens/thank-you/thank-you.module.scss";

export default function ThankYouContent() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ width: "100%" }}
        >

            <div className={`content`} data-alignment="centered">

                <div className={styles.successAnimation}>

                    <svg
                        className={`${styles.checkmark}${isInView ? ` ${styles.isInView}` : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                    >

                        <circle className={styles.checkmark__circle} cx="26" cy="26" r="25" fill="none" />

                        <path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />

                    </svg>

                </div>

                <Heading
                    title="Thanks<span class='colorPrimary'>,</span> <br/> we'll be in touch very soon<span class='colorPrimary'>!</span>"
                    titleTag="h1"
                    headingClass="pageTitle"
                    hasFullStop={false}
                    hasAnimation={false}
                />

                <div className={`buttons ${styles.buttons}`}>

                    <Button
                        text="Back to Home"
                        href="/"
                        class="primary"
                        icon={null}
                        hasAnimation={false}
                    />

                </div>

            </div>

        </motion.div>

    )

}