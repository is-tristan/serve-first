"use client";

// Motion
import { motion } from "motion/react";

// Components
import Heading from "@/components/content/text";
import ComingSoonForm from "./coming-soon-form";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/screens/products/operational-excellence/vision/coming-soon.module.scss";

export default function ComingSoonContent({ isInView }) {

    return (

        <motion.div
            className={`content ${styles.content}`}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={isInView ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >

            <Heading
                alignment="centered"
                hasAnimation={false}
                titleTag="h1"
                headingClass="pageTitle"
                title="Be one of the first to experience the future of operational excellence"
                description="For some time, we have had a vision of what the future of operational excellence looks like, now we have the answer. Join the waitlist to be one of the first to see our vision come to life."
            />

            <div className={styles.contentFooter}>

                <Button text="View VISION" href="/products/operational-excellence/vision" class="primary" hasAnimation={false} />

            </div>

        </motion.div>

    )

}
