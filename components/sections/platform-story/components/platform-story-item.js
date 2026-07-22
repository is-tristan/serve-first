"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Next
import Image from "next/image";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/platform-story.module.scss";

export default function PlatformStoryItem({
    index = 0,
    eyebrow,
    image,
    imageWidth = 384,
    imageHeight = 384,
    imageSizing = "contain",
    title,
    description,
    list = [],
    button = []
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div className={styles.platformStoryItem} ref={ref} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} initial={{ opacity: 0, y: 16 }} transition={{ duration: 0.5, delay: 0.25 + (index * 0.075) }}>

            <div className={styles.platformStoryItemContainer}>

                <div className={styles.platformStoryItemHeader}>

                    {eyebrow && (<Eyebrow hasAnimation={false} type="secondary" text={eyebrow} />)}

                    {image && (

                        <div className={styles.platformStoryItemImage}>

                            <Image
                                src={image}
                                alt={title}
                                width={imageWidth}
                                height={imageHeight}
                                loading="lazy"
                                quality={90}
                                sizes="(max-width: 1023px) 100vw, 33vw"
                                style={{ "objectFit": imageSizing }}
                            />

                        </div>

                    )}

                </div>

                {(title || description || list.length > 0) && (

                    <div className={styles.platformStoryItemContent}>

                        {title && (<h3>{title}</h3>)}

                        {description && (<p>{description}</p>)}

                        {list.length > 0 && (

                            <ul>

                                {list.map((listItem, index) => (

                                    <li key={index}>{listItem.text}</li>

                                ))}

                            </ul>

                        )}

                    </div>

                )}

            </div>

            {button.length > 0 && (

                <div className={styles.platformStoryItemFooter}>

                    {button.map((buttonItem, index) => (

                        <Button
                            key={index}
                            hasAnimation={false}
                            className="textLink colorPrimary"
                            text={buttonItem.text}
                            href={buttonItem.href}
                            target={buttonItem.target}
                        />

                    ))}

                </div>

            )}

        </motion.div>

    );

}
