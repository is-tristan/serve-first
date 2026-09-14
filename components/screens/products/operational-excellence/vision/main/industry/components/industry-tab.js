"use client";

// Imports
import { motion } from "motion/react";

// Components
import Image from "next/image";
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/screens/products/operational-excellence/vision/components/industry-section.module.scss";

export default function IndustryTab({
    id,
    labelledBy,
    isActive = false,
    isInView = false,
    image,
    imageAlt,
    eyebrow,
    title,
    listItems = [],
}) {

    const shouldAnimate = isActive && isInView;

    return (

        <div
            id={id}
            className={styles.industryTab}
            role="tabpanel"
            aria-labelledby={labelledBy}
            data-active={isActive ? true : undefined}
            aria-hidden={!isActive}
            inert={!isActive ? true : undefined}
            tabIndex={isActive ? 0 : -1}
        >

            <motion.div
                className={styles.industryTabImageContainer}
                animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                initial={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >

                <div className={styles.industryTabImage}>

                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 55vw"
                    />

                </div>

            </motion.div>

            <motion.div
                className={styles.industryTabContent}
                animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                initial={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >

                <Eyebrow text={eyebrow} hasAnimation={false} hasDash={false} textColor={`colorSecondary`} />

                <Text titleTag="h3" hasAnimation={false} headingClass={`colorLight ${styles.industryTabTitle}`} title={title} />

                <ul className={styles.industryTabList}>

                    {listItems.map((item, index) => (

                        <li key={index} className={styles.industryTabListItem}>

                            <span className={styles.industryTabListItemLine} aria-hidden="true"></span>

                            {typeof item === "string" ? item : item.label}

                        </li>

                    ))}

                </ul>

            </motion.div>

        </div>
    )

}
