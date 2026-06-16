"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Next
import Image from "next/image";
import Link from "next/link";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/product-highlight.module.scss";

export default function ProductHighlightItem({
    index = 0,
    theme = "light",
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
            transition={{ duration: 0.5, delay: 0.25 + (index * 0.12) }}
        >

            <div className={styles.productHighlightItemInner}>

                {icon && (

                    <div className={styles.productHighlightItemIcon} style={{ transition: "var(--ease)", position: "relative", zIndex: 1 }}>

                        <Image src={icon} alt={title} width={24} height={24} />

                    </div>
                )}

                <div className={styles.productHighlightItemContent}>

                    {eyebrow && (<Eyebrow hasAnimation={false} type="secondary" textColor={theme === "dark" ? "colorLight" : "colorDark"} text={eyebrow} />)}

                    {title && (<h3>{title}</h3>)}

                    {link && (<Button text={linkText} href={link} hasAnimation={false} target={target} className="textLink colorPrimary fw400" />)}

                </div>

                {link && <Link href={link} target={target} className={"colLink"}></Link>}

            </div>

        </motion.div>

    );

}
