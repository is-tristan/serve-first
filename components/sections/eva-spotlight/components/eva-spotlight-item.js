"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Image from "next/image";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/eva-spotlight.module.scss";

export default function EvaSpotlightItem({
    item = {}
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.article ref={ref} className={`colorLight ${styles.evaSpotlightItem}`} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} initial={{ opacity: 0, y: 16 }} transition={{ duration: 0.5, delay: 0.25 }}>

            {item.image && (

                <div className={styles.evaSpotlightItemImage}>

                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ "objectFit": "cover" }} />

                </div>

            )}

            <div className={styles.evaSpotlightItemContent}>

                <div className={styles.evaSpotlightItemHeader}>

                    {item.eyebrow && (

                        <div className={styles.evaSpotlightItemEyebrow}>

                            <span>{item.eyebrow}</span>

                        </div>

                    )}

                    {item.title && (

                        <h3>{item.title}</h3>

                    )}

                </div>

                {item.description && (<p>{item.description}</p>)}

                {item.button && (

                    <Button hasAnimation={false} text={item.button.text} href={item.button.href} target={item.button.target} className="secondary" />

                )}

            </div>

        </motion.article>

    )

}