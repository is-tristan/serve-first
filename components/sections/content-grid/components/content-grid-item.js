"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/content-grid.module.scss";

// Icons
import { clock } from "@/utils/icons";

export default function ContentGridItem({
    index,
    item = {}
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.article
            ref={ref}
            className={styles.contentGridItem}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }} transition={{ duration: 0.5, delay: 0.25 + (index * 0.075) }}
        >

            <div className={styles.contentGridItemContent}>

                {item.image && (

                    <div className={styles.contentGridItemImage}>

                        <Image src={item.image} alt={item.title} fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" style={{ "objectFit": "cover" }} />

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

                    <Button hasAnimation={false} text={item.button.text} href={item.button.href} target={item.button.target} className="textLink" />
                    
                )}

                {item.readTime && (

                    <div className={styles.contentGridItemReadTime}>

                        <div className={styles.contentGridItemReadTimeIcon} dangerouslySetInnerHTML={{ __html: clock }} />

                        {item.readTime && (<span className={styles.contentGridItemReadTime}>{item.readTime} min read</span>)}

                    </div>

                )}

            </div>

            <Link
                href={item.button.href}
                target={item.button.target}
                className="colLink"
                aria-label={item.button.text || item.title || "Read more"}
            ></Link>

        </motion.article >

    )

}