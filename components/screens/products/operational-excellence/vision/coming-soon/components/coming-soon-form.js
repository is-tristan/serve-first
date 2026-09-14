"use client";

// React
import { useState, useRef } from "react";

// Motion
import { motion, useInView } from "motion/react";

// Next
import { usePathname, useRouter } from "next/navigation";

// Styles
import styles from "@/styles/components/handlers/form.module.scss";
import localStyles from "@/styles/components/screens/products/operational-excellence/vision/coming-soon.module.scss";

// Utils
import { appendHubspotContext, submitHubspotForm } from "@/utils/forms";

// Icons
import { arrowRightShort, emailIcon } from "@/utils/icons";

export default function ComingSoonForm({
    utmMedium = "VISION Coming Soon",
}) {
    const [result, setResult] = useState("");
    const pathname = usePathname();
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        appendHubspotContext(formData);

        const submission = await submitHubspotForm(formData);

        if (submission.success) {
            router.push("/thank-you");
            return;
        }

        setResult(submission.message);
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.33 });

    return (

        <motion.div
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={isInView ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={localStyles.formContainer}
        >

            <form className={`${localStyles.form} ${styles.form}`} data-hs-do-not-collect="true" onSubmit={onSubmit}>

                <input type="hidden" name="hubspot-form-id" value={`fefdfc04-baf0-4832-881b-ff5a47ce4a99`} />

                <input type="hidden" name="utm_source" value={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname} | VISION Coming Soon`} />

                <input type="hidden" name="utm_medium" value={utmMedium} />

                <fieldset className={`${localStyles.email}`} data-name="email">

                    <div className={`${localStyles.field}`}>

                        <div className={localStyles.icon} dangerouslySetInnerHTML={{ __html: emailIcon }} />

                        <input type="email" name="email" required autoComplete="email" placeholder="Enter your email address..." aria-required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

                    </div>

                    <button className={localStyles.formSubmit} type="submit" aria-label="Submit" dangerouslySetInnerHTML={{ __html: arrowRightShort }}></button>

                </fieldset>

                <div className={styles.formFooter}>

                    <div className={styles.result}>

                        <span>{result}</span>

                    </div>

                </div>

            </form>

        </motion.div>

    );

}
