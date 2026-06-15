// Next
import Link from "next/link";
import Image from "next/image";

// Icons
const logo = "/static/logo/logo-light.svg";

// Styles
import styles from "@/styles/components/layouts/header.module.scss";

export default function HeaderLogo() {

    return (

        <Link href="/" className={styles.logo} aria-label="Home">

            <Image src={logo} alt="Logo" fill loading="eager" />

        </Link>

    )

}