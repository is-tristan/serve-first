"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/challenge-frame.module.scss";

export default function ChallengeFrameItem({
    index,
    eyebrow,
    title,
    subheading,
    description,
    tags,
    button
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div
            className={styles.challengeFrameItem}
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 + (index * 0.12) }}
        >

            <div className={styles.challengeFrameEyebrow}>

                {eyebrow && (<Eyebrow type="secondary" hasAnimation={false} text={eyebrow} />)}

            </div>

            <div className={styles.challengeFrameContent}>

                <div className={styles.challengeFrameHeader}>

                    {title && (<h3>{title}</h3>)}

                    {subheading && (<p className="fw700">{subheading}</p>)}

                    {description && (<p>{description}</p>)}

                </div>

                <div className={styles.challengeFrameFooter}>

                    {tags.length > 0 && (

                        <div className={styles.challengeFrameTags}>

                            {tags.map((tag, index) => (

                                <span key={index} className={styles.challengeFrameTag}>{tag.tag}</span>

                            ))}

                        </div>

                    )}

                    {button && (<Button dataName="challengeFrameButton" className="textLink colorPrimary fw400" text={button.text} href={button.href} target={button.target} hasAnimation={false} />)}

                </div>

            </div>

        </motion.div>

    )
}