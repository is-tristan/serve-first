"use client";

// React
import { useState, useRef } from "react";

// Motion
import { motion, useInView } from "motion/react";

// Next
import Link from "next/link";

// Components
import FormComplete from "@/components/handlers/forms/form-complete";

// Styles
import styles from "@/styles/components/handlers/form.module.scss";

// Icons
import { shieldTick } from "@/utils/icons";

// Utils
import { splitFullName } from "@/utils/forms";

export default function FormSmall({
    theme = "primary",
    hasDemoLink = true,
    formBtnText = "Send message",
    formTitle = null,
    formSmallText = "No obligation. We will not pass your details on.",
    hasAnimation = true,
    formId = "6c85505f-8f36-4de2-8618-47a73caf8144" }) {
    const [result, setResult] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const form = event.target;
        const { firstname, lastname } = splitFullName(form.name.value);
        form.firstname.value = firstname;
        form.lastname.value = lastname;
        const formData = new FormData(form);
        formData.append("pageUri", window.location.href);
        formData.append("pageName", document.title);

        const response = await fetch("/api/forms/hubspot", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("");
            setIsComplete(true);
        } else {
            setResult("There was an error submitting your request. Please try again.");
        }
    };

    const handleSendAnother = () => {
        setIsComplete(false);
        setResult("");
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.33 });

    return (

        <motion.div
            ref={ref}
            animate={hasAnimation ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }) : { opacity: 1, y: 0 }}
            initial={hasAnimation ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
            transition={hasAnimation ? { duration: 0.5, delay: 0.5 } : undefined}
            className={`${styles.formContainer}`}
        >

            {isComplete ? (

                <FormComplete onSendAnother={handleSendAnother} />

            ) : (

                <>

                    {formTitle && (<span className={styles.formTitle}>{formTitle}</span>)}

                    <form className={`${styles.form}`} data-theme={theme} onSubmit={onSubmit}>

                        <input type="hidden" name="hubspot-form-id" value={formId} />

                        <input type="hidden" name="firstname" defaultValue="" />

                        <input type="hidden" name="lastname" defaultValue="" />

                        <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="name">

                            <legend className={styles.legend}>Full Name <span className={styles.required}>*</span></legend>

                            <div className={styles.field}>

                                <input type="text" name="name" required autoComplete="name" placeholder="So we know who we are replying to." aria-required="true" />

                            </div>

                        </fieldset>

                        <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="email">

                            <legend className={styles.legend}>Work Email <span className={styles.required}>*</span></legend>

                            <div className={styles.field}>

                                <input type="email" name="email" required autoComplete="email" placeholder="Where we will send our reply." aria-required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

                            </div>

                        </fieldset>

                        <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="company">

                            <legend className={styles.legend}>Company <span className={styles.required}>*</span></legend>

                            <div className={styles.field}>

                                <input type="text" name="company" required autoComplete="company" placeholder="The business or group you run." aria-required="true" />

                            </div>

                        </fieldset>

                        <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="notes">

                            <legend className={styles.legend}>What is this about? <span className={styles.required}>*</span></legend>

                            <div className={styles.field}>

                                <select name="notes" required defaultValue="" aria-required="true" aria-label="What is this about?">

                                    <option value="" disabled>Select a topic</option>

                                    <option value="Demo">Demo</option>

                                    <option value="Sales">Sales</option>

                                    <option value="Support">Support</option>

                                    <option value="Something else">Something else</option>

                                </select>

                            </div>

                        </fieldset>

                        <fieldset className={styles.fieldset} data-name="notes">

                            <legend className={styles.legend}>Your message <span className={styles.required}>*</span></legend>

                            <div className={styles.field}>

                                <textarea name="notes" required placeholder="A line or two on how we can help." aria-required="true" />

                            </div>

                        </fieldset>

                        <fieldset className={`${styles.fieldset} ${styles.consent}`} data-name="terms">

                            <legend className={styles.legend}>Consent <span className={styles.required}>*</span></legend>

                            <div className={styles.field}>

                                <input type="checkbox" name="terms" id="terms" required aria-required="true" />

                                <label htmlFor="terms" style={{ color: theme === "primary" ? "var(--light)" : "var(--dark)" }}>I have read and agree to your <Link href="/legal/privacy-policy" target="_blank" className={theme === "primary" ? "colorSecondary" : "colorPrimaryAlt"} style={{ textDecoration: "underline" }}>privacy policy</Link>.</label>

                            </div>

                        </fieldset>

                        <div className={styles.formFooter}>

                            <div className={`buttons`} style={{ gap: "1rem" }}>

                                <button style={{ width: hasDemoLink ? "auto" : "100%" }} className={styles.submit} type="submit">{formBtnText}</button>

                                {hasDemoLink && (<Link href="/get-a-demo" className={`textLink ${styles.demoLink}`}>Or, book a demo</Link>)}

                            </div>

                            <div className={styles.formFooterText}>

                                <div style={{ color: theme === "primary" ? "var(--light)" : "var(--primaryAlt)" }} className={styles.formFooterTextIcon} dangerouslySetInnerHTML={{ __html: shieldTick }} />

                                {formSmallText && <span style={{ color: theme === "primary" ? "var(--light)" : "var(--dark)" }}>{formSmallText}</span>}

                            </div>

                            <div className={styles.result}>

                                <span>{result}</span>

                            </div>

                        </div>

                    </form>

                </>

            )}

        </motion.div>

    );

}
