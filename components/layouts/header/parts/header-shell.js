"use client"

import { usePathname } from "next/navigation"

import { getHeaderType } from "@/components/layouts/header/get-header-type"

import styles from "@/styles/components/layouts/header/header.module.scss"

export default function HeaderShell({ children }) {

    const headerType = getHeaderType(usePathname())

    return (

        <header id="header" className={styles.header} data-header-type={headerType} role="banner">

            {children}

        </header>

    )

}
