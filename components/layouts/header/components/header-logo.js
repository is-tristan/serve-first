"use client";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Config
import { getHeaderType } from "@/components/layouts/header/components/header-config";

// Icons
import { logo, visionLogo } from "@/utils/icons";

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";

export default function HeaderLogo() {

    const pathname = usePathname();
    const headerType = getHeaderType(pathname);
    const isProductVisionHeader = headerType === "productVisionHeader";

    return (

        <Link
            href="/"
            className={isProductVisionHeader ? `${styles.logo} ${styles.productVisionLogo}` : styles.logo}
            aria-label="Home"
            dangerouslySetInnerHTML={{ __html: isProductVisionHeader ? visionLogo : logo }}
        />

    )

}
