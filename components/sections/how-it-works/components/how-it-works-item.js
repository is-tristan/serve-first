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
import stylesAlt from "@/styles/components/sections/how-it-works.module.scss";

// Icons
import { checkmark } from "@/utils/icons";

export default function HowItWorksItem({
    index = 0,
    eyebrowHasDash = false,
    image,
    imageSizing = "contain",
    imageWidth = 768,
    imageHeight = 384,
    title,
    number,
    eyebrow,
    description,
    list = [],
    button
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const normalizedImageSizing = imageSizing?.toLowerCase() === "contain" ? "contain" : "cover";

    return (

        <motion.div
            ref={ref}
            className={`${styles.featureListItem} ${stylesAlt.howItWorksItem}`}
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
                    style={{ objectFit: normalizedImageSizing }}
                />

            </div>

            <div className={`${styles.colLeft} ${styles.featureListItemContent}`}>

                <div className={`hasFullStop ${styles.featureListItemHeader}`}>

                    {number && (<span className={stylesAlt.featureListItemNumber}>{number}</span>)}

                    {eyebrow && (<Eyebrow text={eyebrow} hasDash={eyebrowHasDash} />)}

                    {title && (<h2 className={`sectionTitle colorPrimaryAlt`}>{title}</h2>)}

                </div>

                {description && (<p>{description}</p>)}

                {Array.isArray(list) && list.length > 0 && (

                    <div className={`iconList ${stylesAlt.howItWorksItemList}`}>

                        {list.map((listItem, listIndex) => (

                            <div key={listIndex} className="iconListItem">

                                <div className="icon colorPrimary" dangerouslySetInnerHTML={{ __html: checkmark }} />

                                <span>{listItem.text}</span>

                            </div>
                        ))}

                    </div>

                )}

                <div className={`${styles.featuredItemFooter} ${stylesAlt.howItWorksItemFooter}`}>

                    {button && (<Button className={stylesAlt.howItWorksItemButton} text={button.text} href={button.href} target={button.target} hasAnimation={false} />)}

                </div>

            </div>

        </motion.div>

    );

}
