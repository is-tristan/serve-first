// Components
import Banner from "@/components/sections/banner/banner";
// Styles
import styles from "@/styles/components/screens/legal/legal-pages.module.scss";
// Data
import { privacyPolicySections } from "./data";
import { getPageMetadata } from "@/seo/seo-map-data";

export async function generateMetadata() {
  return getPageMetadata("/legal/privacy-policy");
}

export default function PrivacyPolicy() {
  return (
    <>
      <Banner
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        description="This privacy notice explains how Serve First CX Limited looks after your personal data and tells you about your privacy rights."
        image={null}
      />

      <div className={`container ${styles.privacyPolicyContainer}`}>
        <div className={styles.privacyPolicySection}>
          <h2>Serve First Privacy Policy</h2>

          <p>Last updated: 29 July 2026</p>

          <p>
            Serve First CX respects your privacy and is committed to protecting
            your personal data. This privacy notice explains how we look after
            your personal data when you visit our website and how the law
            protects you.
          </p>

          <p>
            Contact the Data Privacy Manager at{" "}
            <a href="mailto:dpm@servefirst.co.uk">dpm@servefirst.co.uk</a> if
            you have questions about this policy or wish to exercise your legal
            rights.
          </p>
        </div>

        {privacyPolicySections.map((section) => (
          <div className={styles.privacyPolicySection} key={section.title}>
            <h3>{section.title}</h3>

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.items && (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {section.trailingParagraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
