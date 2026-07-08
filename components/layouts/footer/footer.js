// Next
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "@/styles/components/layouts/footer.module.scss";

// Icons
const logo = "/static/logo/logo-light.svg"

// Data
import { data } from "@/data/social-items-data";

export default function Footer() {

    return (

        <footer id="footer" className={styles.footer}>

            <div className={`container ${styles.footerContainer}`}>

                <Link href="/" className={styles.logo} aria-label="Home">

                    <Image src={logo} alt="Logo" fill loading="lazy" />

                </Link>

                <div className={styles.socialItems}>

                    {data.map((item) => (

                        <Link href={item.url} target="_blank" className={styles.socialItem} key={item.name} dangerouslySetInnerHTML={{ __html: item.logo }} />

                    ))}

                </div>

                <p>Copyright &copy; 2026 | The Mooshekh Law Firm P.C. | All Rights Reserved.</p>

            </div>

        </footer>

    )

}