"use client";

// Imports
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

// Styles
import styles from "@/styles/components/sections/faq.module.scss";

export default function FaqItem({
    index,
    item = {}
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const [isOpen, setIsOpen] = useState(false);

    return (

        <motion.div
            ref={ref}
            className={styles.faqItem}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 + (index * 0.075) }}
        >

            <div className={styles.faqItemInner}
                onClick={() => setIsOpen(!isOpen)}
                style={{ "--isOpen": isOpen ? 1 : 0 }}
                aria-expanded={isOpen}
                aria-controls={`faq-item-${index}`}
                aria-label={`FAQ Item ${index + 1}`}
            >

                <div className={styles.faqItemQuestionHeader}>

                    <h3>{item.question}</h3>

                    <button className={styles.faqItemButton}></button>

                </div>

                <div className={styles.faqItemQuestionContent}>

                    <p>{item.answer}</p>

                </div>

            </div>

        </motion.div>

    )
}