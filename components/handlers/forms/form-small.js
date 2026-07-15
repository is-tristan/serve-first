"use client";

// React
import { useState, useRef } from 'react';

// Motion
import { motion, useInView } from 'motion/react';

// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/handlers/form.module.scss";

// Icons
import { shieldTick } from "@/utils/icons";

export default function FormSmall({ theme = "primary", hasDemoLink = true, formBtnText = "Send Message" }) {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "43a999f2-ecbe-4116-b748-6416a2e176e5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Your request has been submitted successfully! We will get back to you as soon as possible.");
            event.target.reset();
        } else {
            setResult("There was an error submitting your request. Please try again.");
        }
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.33 });

    return (

        <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: 0.25 }}>

            <form className={`${styles.form}`} data-theme={theme} onSubmit={onSubmit}>

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

                <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="subject">

                    <legend className={styles.legend}>What is this about? <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="text" name="subject" required autoComplete="false" placeholder="Demo, sales, support or something else." aria-required="true" />

                    </div>

                </fieldset>

                <fieldset className={styles.fieldset} data-name="comments">

                    <legend className={styles.legend}>Your message <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <textarea name="comments" required placeholder="A line or two on how we can help." aria-required="true" />

                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldset} ${styles.consent}`} data-name="terms">

                    <legend className={styles.legend}>Consent <span className={styles.required}>*</span></legend>

                    <div className={styles.field}>

                        <input type="checkbox" name="terms" id="terms" required aria-required="true" />

                        <label htmlFor="terms" style={{ color: theme === "primary" ? "var(--light)" : "var(--dark)" }}>I have read and agree to your <Link href="/privacy-policy" target="_blank" className={theme === "primary" ? "colorSecondary" : "colorPrimaryAlt"} style={{ textDecoration: "underline" }}>privacy policy</Link>.</label>

                    </div>

                </fieldset>

                <div className={styles.formFooter}>

                    <div className={`buttons`} style={{ gap: "1rem" }}>

                        <button style={{ width: hasDemoLink ? "auto" : "100%" }} className={styles.submit} type="submit">{formBtnText}</button>

                        {hasDemoLink && (<Link href="/get-a-demo" className={`textLink ${styles.demoLink}`}>Or, book a demo</Link>)}

                    </div>

                    <div className={styles.formFooterText}>

                        <div style={{ color: theme === "primary" ? "var(--light)" : "var(--primaryAlt)" }} className={styles.formFooterTextIcon} dangerouslySetInnerHTML={{ __html: shieldTick }} />

                        <span style={{ color: theme === "primary" ? "var(--light)" : "var(--dark)" }}>No obligation. We will not pass your details on.</span>

                    </div>

                    <div className={styles.result}>

                        <span>{result}</span>

                    </div>

                </div>

            </form >

        </motion.div>

    );

}