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
import styles from "@/styles/components/sections/feature-list.module.scss";

// Icons
import { checkmark } from "@/utils/icons";

export default function FeaturedListItem({
    index = 0,
    theme = "light",
    image,
    imageSizing = "Contain",
    imageWidth = 576,
    imageHeight = 384,
    eyebrow,
    title,
    description,
    htmlDescription = false,
    list = [],
    button
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div
            ref={ref}
            className={styles.featureListItem}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 + (index * 0.075) }}
        >

            <div className={styles.colRight}>

                <Image
                    className={styles.featureListItemImage}
                    src={image || "/decoration/how-it-works-placeholder.png"}
                    alt={title || "How it works image"}
                    width={imageWidth}
                    height={imageHeight}
                    loading="lazy"
                    quality={90}
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    style={{ objectFit: imageSizing === "Contain" ? "contain" : "cover" }}
                />
            </div>

            <div className={`${styles.colLeft} ${styles.featureListItemContent}`}>

                <div className={`hasFullStop ${styles.featureListItemHeader}`}>

                    {eyebrow && (<Eyebrow hasAnimation={false} textColor={`${theme === "primary" ? "colorSecondary" : "colorPrimary"}`} text={eyebrow} />)}

                    {title && (<h2 className={`sectionTitle ${theme === "primary" ? "colorLight" : "colorPrimaryAlt"}`}>{title}</h2>)}

                </div>

                {description && (<p>{description}</p>)}

                {list.length > 0 && (

                    <div className="iconList">

                        {list.map((listItem, listIndex) => (

                            <div key={listIndex} className="iconListItem">

                                <div className={`icon ${theme === "primary" ? "colorSecondary" : "colorPrimary"}`} dangerouslySetInnerHTML={{ __html: checkmark }} />

                                {htmlDescription ? (<div dangerouslySetInnerHTML={{ __html: listItem.text }} />) : (<span>{listItem.text}</span>)}

                            </div>

                        ))}

                    </div>

                )}

                <div className={styles.featuredItemFooter}>

                    {button && button.text && (<Button className={`textLink ${theme === "primary" ? "colorSecondary" : "colorPrimary"}`} text={button.text} href={button.href} target={button.target} hasAnimation={false} />)}

                </div>

            </div>

        </motion.div>

    );

}
