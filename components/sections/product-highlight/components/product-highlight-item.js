"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Next
import Link from "next/link";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/product-highlight.module.scss";

export default function ProductHighlightItem({
    index = 0,
    icon,
    eyebrow,
    title,
    link,
    linkText,
    target = "_self"
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div
            ref={ref}
            className={styles.productHighlightItem}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 + (index * 0.075) }}
        >

            <div className={styles.productHighlightItemInner}>

                <div className={styles.productHighlightItemContent}>

                    {icon && (

                        <div className={styles.productHighlightItemIcon} style={{ transition: "var(--ease)", position: "relative", zIndex: 1 }}>

                            <span dangerouslySetInnerHTML={{ __html: icon }} style={{ display: "inline-block", width: "24px", height: "24px", color: "var(--primary)", opacity: 0.75 }} />

                        </div>
                    )}

                    {eyebrow && (<Eyebrow hasAnimation={false} type="secondary" textColor="colorDark" text={eyebrow} />)}

                    {title && (<h3>{title}</h3>)}


                </div>

                {link && (<Button text={linkText} href={link} hasAnimation={false} target={target} className="textLink colorPrimary" />)}

                {link && (

                    <Link
                        href={link}
                        target={target}
                        className="colLink"
                        aria-label={linkText || title || "Learn more"}
                    ></Link>

                )}

            </div>

        </motion.div>

    );

}
