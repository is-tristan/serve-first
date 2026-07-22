// Components
import Banner from "@/components/sections/banner/banner";

// Data
import { termsAndConditionsSections } from "./data";

// Styles
import styles from "@/styles/pages/legal-pages.module.scss";

export default function TermsAndConditions() {

    return (

        <>

            <Banner
                eyebrow="Terms and Conditions"
                title="Terms and Conditions"
                description="These terms and conditions explain the rules for using our website and related online materials."
                image={null}
            />

            <div className={`container ${styles.privacyPolicyContainer}`}>

                <div className={styles.privacyPolicySection}>

                    <h2>Serve First Terms and Conditions</h2>

                    <p>Last updated: 22 July 2026</p>

                    <p>Contact us at <a href="mailto:info@servefirst.ai">info@servefirst.ai</a> if you have any questions about these terms.</p>

                </div>

                {termsAndConditionsSections.map((section) => (

                    <div className={styles.privacyPolicySection} key={section.title}>

                        <h3>{section.title}</h3>

                        {section.paragraphs.map((paragraph) => (

                            <p key={paragraph}>{paragraph}</p>

                        ))}

                    </div>

                ))}

            </div>

        </>

    );

}
