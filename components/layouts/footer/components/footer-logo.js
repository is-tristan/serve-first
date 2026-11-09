// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/layouts/footer/footer.module.scss";

// Components
import FooterSocialItems from "@/components/layouts/footer/components/footer-social-items";

// Icons
import { logo, logoDark } from "@/utils/icons";

export default function FooterLogo({ theme }) {

    return (

        <div className={`${styles.footerCol} ${styles.footerColLogo}`}>

            {theme === "dark" ? (

                <Link href="/" className={styles.footerLogo} aria-label="Home" dangerouslySetInnerHTML={{ __html: logoDark }} />

            ) : (

                <Link href="/" className={styles.footerLogo} aria-label="Home" dangerouslySetInnerHTML={{ __html: logo }} />

            )}

            <div className={styles.footerLogoItems}>

                <Link href="mailto:info@servefirst.ai" className={styles.footerEmail}>info@servefirst.ai</Link>

                <FooterSocialItems theme={theme} />

            </div>

        </div>

    )

}