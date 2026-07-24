"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/industry-cards.module.scss";

export default function IndustryCard({
    index,
    eyebrow,
    title,
    image,
    imageFit = "contain",
    number,
    numberText,
    button
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div
            key={index}
            className={styles.industryCardContainer} ref={ref}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 + (index * 0.075) }}
        >

            <div className={styles.industryCard}>

                {image && (

                    <div className={styles.industryCardImage}>

                        <Image
                            src={image}
                            alt={title}
                            width={471}
                            height={202}
                            loading="lazy"
                            quality={90}
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            style={{ objectFit: imageFit }}
                        />

                    </div>

                )}

                <div className={`${styles.industryCardContent}`}>

                    <div className={styles.industryCardHeader}>

                        {eyebrow && (<Eyebrow hasAnimation={false} text={eyebrow} />)}

                        {title && (<h3>{title}</h3>)}

                    </div>

                    <div className={styles.industryCardNumbers}>

                        {number && (<span className={styles.industryCardNumber}>{number}</span>)}

                        {numberText && (<span>{numberText}</span>)}

                    </div>

                    <div className={styles.industryCardFooter}>

                        {button && (<Button className="textLink colorPrimary" text={button.text} href={button.href} target={button.target} hasAnimation={false} />)}

                    </div>

                </div>

                {button && (<Link href={button.href} target={button.target} className={`colLink`} aria-label={button.text} />)}

            </div>

        </motion.div>

    )

}