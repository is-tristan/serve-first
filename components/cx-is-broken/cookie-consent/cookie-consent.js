import CookieConsent from "@/components/cookie-consent/cookie-consent";

import styles from "./cookie-consent.module.scss";

export default function CxIsBrokenCookieConsent() {
  return (
    <div className={styles.consent}>
      <CookieConsent />
    </div>
  );
}
