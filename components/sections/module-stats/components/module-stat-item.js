"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Styles
import styles from "@/styles/components/sections/module-stats.module.scss";

// Utils
import { useNumberCounter } from "@/utils/number-counter";

export default function ModuleStatItem({
    index,
    numberPrefix,
    startNumber,
    endNumber,
    numberSuffix,
    description,
    hasAnimation = true
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const currentNumber = useNumberCounter({
        startNumber,
        endNumber,
        isActive: hasAnimation && isInView
    });
    const displayNumber = hasAnimation ? currentNumber : endNumber;

    return (

        <motion.div
            key={index}
            className={styles.moduleStatItem}
            ref={ref}
            animate={hasAnimation ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }) : { opacity: 1, y: 0 }}
            initial={hasAnimation ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + (index * 0.12) }}
        >

            <div className={styles.moduleStatItemNumbers}>

                {numberPrefix && numberPrefix !== "" && (<span>{numberPrefix}</span>)}

                <span className={styles.moduleStatItemNumber}>{displayNumber}</span>

                {numberSuffix && (<span>{numberSuffix}</span>)}

            </div>

            {description && (<p>{description}</p>)}

        </motion.div>

    )
}