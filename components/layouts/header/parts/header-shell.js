"use client";

// Next
import { usePathname } from "next/navigation";

// Components
import Topbar from "@/components/layouts/topbar/topbar";

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";

const topbarPath = "/products/customer-experience/mystery-shopping";

export default function HeaderShell({ children }) {

    const pathname = usePathname();

    const hasTopbar = pathname === topbarPath;

    return (

        <>

            {hasTopbar && <Topbar />}

            <header id="header" className={styles.header} role="banner" data-has-topbar={hasTopbar}>

                {children}

            </header>

        </>

    )

}
