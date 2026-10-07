"use client";

// Next
import Image from "next/image";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Button from "@/components/handlers/buttons";

// Utils
import { exploreLabel } from "@/utils/explore-label";

// Styles
import styles from "@/styles/components/sections/content-grid.module.scss";

// Icons
import { clock } from "@/utils/icons";

export default function ContentGridItem({
    index,
    item = {},
    imageAspectRatio
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });
    const resolvedButtonText = item.button
        ? exploreLabel(item.title, item.button.text)
        : null;

    return (

        <motion.article
            ref={ref}
            className={styles.contentGridItemContainer}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }} transition={{ duration: 0.5, delay: 0.25 + (index * 0.033) }}
        >

            <div className={styles.contentGridItem} data-has-link={item.button ? true : false}>

                <div className={styles.contentGridItemContent}>

                    {item.image && (

                        <div className={styles.contentGridItemImage} style={{ "aspectRatio": imageAspectRatio ? imageAspectRatio : "2.75" }}>

                            <Image src={item.image} alt={item.title} fill loading="lazy" quality={90} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" style={{ "objectFit": "cover" }} />

                        </div>

                    )}

                    <div className={styles.contentGridItemHeader}>

                        {item.category && (<span className={styles.contentGridItemCategory}>{item.category}</span>)}

                        {item.title && (<h3>{item.title}</h3>)}

                    </div>

                    {item.description && (<p>{item.description}</p>)}

                </div>

                <div className={styles.contentGridItemFooter}>

                    {item.button && (

                        <Button hasAnimation={false} text={resolvedButtonText} href={item.button.href} target={item.button.target} className={`textLink ${styles.contentGridItemButton}`} />

                    )}

                    {item.readTime && (

                        <div className={styles.contentGridItemReadTime}>

                            <div className={styles.contentGridItemReadTimeIcon} dangerouslySetInnerHTML={{ __html: clock }} />

                            {item.readTime && (<span className={styles.contentGridItemReadTime}>{item.readTime} min read</span>)}

                        </div>

                    )}

                </div>

            </div>

        </motion.article >

    )

}
