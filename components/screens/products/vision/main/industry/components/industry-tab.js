"use client";

// Imports
import { motion } from "motion/react";

// Components
import Image from "next/image";
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/screens/products/vision/components/industry-section.module.scss";

export default function IndustryTab({
    isActive = false,
    isInView = false,
    image,
    imageAlt,
    eyebrow,
    title,
    listItems = [],
}) {

    return (

        <div className={styles.industryTab} data-active={isActive ? true : undefined}>

            <motion.div
                className={styles.industryTabImage}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                initial={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.5, delay: 0.25 }}
            >

                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="768px"
                    className={styles.industryTabImage}
                />

            </motion.div>

            <motion.div
                className={styles.industryTabContent}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                initial={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.5, delay: 0.25 }}
            >

                <Eyebrow text={eyebrow} hasAnimation={false} hasDash={false} textColor={`colorSecondary`} />

                <Text titleTag="h3" hasAnimation={false} headingClass={`colorLight ${styles.industryTabTitle}`} title={title} />

                <div className={styles.industryTabList}>

                    {listItems.map((item, index) => (

                        <div key={index} className={styles.industryTabListItem}>

                            <span className={styles.industryTabListItemLine}></span>

                            {typeof item === "string" ? item : item.label}

                        </div>

                    ))}

                </div>

            </motion.div>

        </div>
    )

}
