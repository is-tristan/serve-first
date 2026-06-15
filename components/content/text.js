"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Button from "../handlers/buttons";

export default function Heading({
    className = undefined,
    headingClass = undefined,
    contentClass = undefined,
    alignment = "default",
    title = null,
    titleTag = "h2",
    descriptionTag = "p",
    description = null,
    btnTextPrimary,
    btnLinkPrimary = "#",
    btnClassPrimary = "primary",
    btnTargetPrimary = "_self",
    btnTextSecondary,
    btnLinkSecondary = "#",
    btnClassSecondary = "transparentDark",
    btnTargetSecondary = "_self"
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <div ref={ref} className={`innerContent ${className}`} data-alignment={alignment}>

            {title && (

                <motion.div
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    initial={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="heading hasFullStop"
                >

                    {(() => {
                        switch (titleTag) {
                            case "h1":
                                return <h1 className={headingClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h2":
                                return <h2 className={headingClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h3":
                                return <h3 className={headingClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h4":
                                return <h4 className={headingClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h5":
                                return <h5 className={headingClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            case "h6":
                                return <h6 className={headingClass} dangerouslySetInnerHTML={{ __html: title }} />;
                            default:
                                return null;
                        }
                    })()}

                </motion.div>

            )}

            {description && (

                <motion.div
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    initial={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className={contentClass}
                >

                    {(() => {
                        switch (descriptionTag) {
                            case "p":
                                return <p dangerouslySetInnerHTML={{ __html: description }} />;
                            case "ul":
                                return <ul dangerouslySetInnerHTML={{ __html: description }} />;
                            default:
                                return null;
                        }

                    })()}
                </motion.div>

            )}

            <motion.div
                className="buttons"
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                initial={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.5, delay: description ? 0.5 : 0.25 }}
            >

                {btnTextPrimary && (<Button text={btnTextPrimary} href={btnLinkPrimary} target={btnTargetPrimary} className={btnClassPrimary} />)}

                {btnTextSecondary && (<Button text={btnTextSecondary} href={btnLinkSecondary} target={btnTargetSecondary} className={btnClassSecondary} />)}

            </motion.div>

        </div>

    )

}