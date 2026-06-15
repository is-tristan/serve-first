"use client";

// React
import { useState } from 'react';

// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/handlers/form.module.scss";

export default function ContactForm({ theme = "dark" }) {
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

    return (

        <form className={`${styles.form}`} data-theme={theme} onSubmit={onSubmit}>

            <fieldset className={styles.fieldset} data-name="name">

                <legend className={styles.legend}>Name <span className={styles.required}>*</span></legend>

                <div className={styles.field}>

                    <input type="text" name="name" required autoComplete="name" placeholder="Enter your name" aria-required="true" />

                </div>

            </fieldset>

            <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="email">

                <legend className={styles.legend}>Email <span className={styles.required}>*</span></legend>

                <div className={styles.field}>

                    <input type="email" name="email" required autoComplete="email" placeholder="Enter your email" aria-required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

                </div>

            </fieldset>

            <fieldset className={`${styles.fieldset} ${styles.half}`} data-name="phone">

                <legend className={styles.legend}>Phone <span className={styles.required}>*</span></legend>

                <div className={styles.field}>

                    <input
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        placeholder="Enter your phone number"
                        aria-required="true"
                        pattern="^(\+?1\s*[-\.]?\s*)?(\(\d{3}\)|\d{3})[\s\-\.]?\d{3}[\s\-\.]?\d{4}$"
                        title="Enter a valid US phone number, e.g. (555) 555-5555 or 555-555-5555"
                    />


                </div>

            </fieldset>

            <fieldset className={styles.fieldset} data-name="comments">

                <legend className={styles.legend}>Comments <span className={styles.required}>*</span></legend>

                <div className={styles.field}>

                    <textarea name="comments" required placeholder="Please explain your case and the key events that took place..." aria-required="true" />

                </div>

            </fieldset>

            <fieldset className={`${styles.fieldset} ${styles.consent}`} data-name="terms">

                <legend className={styles.legend}>Consent <span className={styles.required}>*</span></legend>

                <div className={styles.field}>

                    <input type="checkbox" name="terms" id="terms" required aria-required="true" />

                    <label htmlFor="terms">I have read and agree to your <Link href="/privacy-policy" target="_blank" className="textLink">privacy policy</Link>.</label>

                </div>

            </fieldset>

            <div className={styles.formFooter}>

                <button className={styles.submit} type="submit">Submit Your Request</button>

                <div className={styles.result}>

                    <span>{result}</span>

                </div>

            </div>

        </form >

    );

}