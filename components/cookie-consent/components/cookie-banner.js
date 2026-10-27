"use client";

// Styles
import styles from "@/styles/components/cookie-consent/cookie-banner.module.scss";

export default function CookieBanner({ onConsentSave, onManagePreferences }) {

    const handleAcceptAll = () => {

        onConsentSave({
            necessary: true,
            measurement: true,
            marketing: true,
        });

    };

    return (

        <div className={styles.cookieBanner}>

            <div className={styles.cookieBannerContainer}>

                <p>We use cookies to ensure you get the best experience on our website. By clicking "Accept all", you agree to the use of cookies.</p>

                <div className={`buttons ${styles.cookieOverlayButtons}`}>

                    <button
                        type="button"
                        className={`btn primary ${styles.btnAccept}`}
                        onClick={handleAcceptAll}
                    >

                        Accept all

                    </button>

                    <button
                        type="button"
                        className={`btn ${styles.btnManage}`}
                        onClick={onManagePreferences}
                    >

                        Manage preferences

                    </button>

                </div>

            </div>

        </div>

    );

}
