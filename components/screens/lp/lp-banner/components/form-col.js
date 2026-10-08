"use client";

// Imports  
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import FormFull from "@/components/handlers/forms/form-full";
import FormSmall from "@/components/handlers/forms/form-small";
import FormLanding from "@/components/handlers/forms/form-landing";

// Styles
import styles from "@/styles/components/screens/lp/lp.module.scss";

export default function FormCol({ formBtnText, formSmallText, formType = "small", hasDemoLink, utmMedium }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <motion.div
            className={`${styles.formCol}`}
            ref={ref}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            initial={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.5, delay: 0.25 }}
        >

            {formType === "full" && (

                <FormFull
                    utmMedium={utmMedium}
                    formTitle="Book a 20-minute demo"
                    formBtnText={formBtnText}
                    theme="light"
                    hasAnimation={false}
                    formSmallText={formSmallText}
                    hasDemoLink={hasDemoLink}
                />

            )}

            {formType === "small" && (
                <FormSmall
                    utmMedium={utmMedium}
                    formTitle="Book a 20-minute demo"
                    formBtnText={formBtnText}
                    theme="light"
                    hasAnimation={false}
                    formSmallText={formSmallText}
                    hasDemoLink={hasDemoLink}
                />
            )}

            {formType === "landing" && (
                <FormLanding
                    utmMedium={utmMedium}
                    formTitle="Book a 20-minute demo"
                    formBtnText={formBtnText}
                    theme="light"
                    hasAnimation={false}
                    formSmallText={formSmallText}
                    hasDemoLink={hasDemoLink}
                />
            )}


        </motion.div>

    )
}