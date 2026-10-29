// Components
import Banner from "@/components/sections/banner/banner";

// Data
import { accessibilitySections } from "./data";

// Styles
import styles from "@/styles/components/screens/legal/legal-pages.module.scss";

import { getPageMetadata } from "@/seo/seo-map-data";

export async function generateMetadata() {
    return getPageMetadata("/legal/accessibility");
}

export default function Accessibility() {

    return (

        <>

            <Banner
                eyebrow="Accessibility"
                title="Accessibility"
                description="This accessibility statement explains how we ensure our website is accessible to everyone."
                image={null}
            />

            <div className={`container ${styles.privacyPolicyContainer}`}>

                <div className={styles.privacyPolicySection}>

                    <h2>Serve First Accessibility Statement</h2>

                    <p>Last updated: July 22, 2026</p>

                    <p>Contact us at <a href="mailto:info@servefirst.ai">info@servefirst.ai</a> if you have any questions about this statement.</p>

                </div>

                {accessibilitySections.map((section) => (

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
