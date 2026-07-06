"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/cta-banners.module.scss";

// Background Image
const backgroundImage = "/backgrounds/cta-banner-2-background.svg";

export default function CtaBannerTwo({
    name = "ctaBanner2",
    theme = "light",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    buttonPrimary = {
        text: "Lorem ipsum dolor sit amet.",
        href: "#",
        target: "_self",
    },
    buttonSecondary = {
        text: "Lorem ipsum dolor sit amet.",
        href: "#",
        target: "_self",
    }
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <section
            className={`row ${styles.ctaBanner} ${styles.ctaBannerTwo}`}
            data-theme={theme}
            data-name={name}
        >

            <div className={`container centered ctaCentered`}>

                <motion.div
                    ref={ref}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    initial={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className={styles.ctaBannerContent}
                >

                    <Text hasAnimation={false} headingClass={`sectionTitle colorPrimaryAlt`} title={title} description={description} />

                    <div className="buttons">

                        {buttonPrimary && (<Button hasAnimation={false} text={buttonPrimary.text} href={buttonPrimary.href} target={buttonPrimary.target} className={`primary ${theme === "light" ? "colorPrimary" : undefined}`} />)}

                        {buttonSecondary && (<Button hasAnimation={false} text={buttonSecondary.text} href={buttonSecondary.href} target={buttonSecondary.target} className={`textLink colorPrimary fw500`} />)}

                    </div>

                </motion.div>

            </div>

        </section>

    )

}