import { Fragment } from "react";

// Components
import Banner from "@/components/sections/banner/banner";
// Styles
import styles from "@/styles/components/screens/legal/legal-pages.module.scss";
// Data
import { cookiePolicySections } from "./data";
import { getPageMetadata } from "@/seo/seo-map-data";

export async function generateMetadata() {
  return getPageMetadata("/legal/cookie-policy");
}

export default function CookiePolicy() {
  return (
    <>
      <Banner
        eyebrow="Cookies Policy"
        title="Cookies Policy"
        description="This Cookies Policy explains how Serve First CX Limited uses cookies and similar technologies on our website."
        image={null}
      />

      <div className={`container ${styles.privacyPolicyContainer}`}>
        <div className={styles.privacyPolicySection}>
          <h2>Serve First Cookies Policy</h2>

          <p>Effective date: 29 July 2026</p>

          <p>
            This Cookies Policy explains how Serve First CX Limited ("we", "us",
            or "our") uses cookies and similar technologies on our website{" "}
            <a href="https://www.servefirst.ai">www.servefirst.ai</a>{" "}
            ("Website").
          </p>
        </div>

        {cookiePolicySections.map((section) => (
          <div className={styles.privacyPolicySection} key={section.title}>
            <h3>{section.title}</h3>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.items && (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {section.cookieGroups && (
              <div className={styles.tableContainer}>
                <table>
                  <thead>
                    <tr>
                      <th>Cookie Name</th>

                      <th>Provider</th>

                      <th>Type</th>

                      <th>Purpose</th>

                      <th>Duration</th>
                    </tr>
                  </thead>

                  <tbody>
                    {section.cookieGroups.map((group) => (
                      <Fragment key={group.title}>
                        <tr className={styles.cookieGroup}>
                          <th colSpan="5">{group.title}</th>
                        </tr>

                        {group.cookies.map((cookie) => (
                          <tr key={`${group.title}-${cookie.name}`}>
                            <td>{cookie.name}</td>

                            <td>{cookie.provider}</td>

                            <td>{cookie.type}</td>

                            <td>{cookie.purpose}</td>

                            <td>{cookie.duration}</td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.links && (
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            )}

            {section.trailingParagraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.title === "Contact us" && (
              <p>
                <a href="mailto:dpm@servefirst.ai">dpm@servefirst.ai</a>
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
