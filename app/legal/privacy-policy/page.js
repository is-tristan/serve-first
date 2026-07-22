// Components
import Banner from "@/components/sections/banner/banner";

// Data
import { privacyPolicySections } from "./data";

// Styles
import styles from "@/styles/pages/legal-pages.module.scss";

export default function PrivacyPolicy() {

    return (

        <>

            <Banner
                eyebrow="Privacy Policy"
                title="Privacy Policy"
                description="This privacy policy explains how we collect, use, and share your personal information when you use our website and services."
                image={null}
            />

            <div className={`container ${styles.privacyPolicyContainer}`}>

                <div className={styles.privacyPolicySection}>

                    <h2>Serve First Privacy Policy</h2>

                    <p>Last updated: 22 July 2026</p>

                    <p>Contact us at <a href="mailto:info@servefirst.ai">info@servefirst.ai</a> if you have any questions about this policy.</p>

                </div>

                {privacyPolicySections.map((section) => (

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
