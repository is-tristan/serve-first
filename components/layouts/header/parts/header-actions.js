"use client"

import { useState } from "react"

import { usePathname } from "next/navigation"

import Button from "@/components/handlers/buttons"
import HeaderMobileMenu from "@/components/layouts/header/parts/header-mobile-menu"

import { getHeaderType } from "@/components/layouts/header/get-header-type"

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss"
import stylesMobileMenu from "@/styles/components/layouts/header/header-mobile-menu.module.scss"

// Icons
import { chevronRightAlt } from "@/utils/icons"

export default function HeaderActions({ menuAds }) {

    const pathname = usePathname()
    const headerType = getHeaderType(pathname)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (

        <>

            <div className={`${styles.headerActions}`} data-header-type={headerType}>

                <div className={`${styles.headerButtons}`}>

                    <Button text="Sign in" href="#" className={`textLink colorDark ${styles.textLinkBtn}`} hasAnimation={false} icon={null} />

                    <Button text="Book a demo" href="/get-a-demo" className={`primary hidden-s ${styles.primaryBtn}`} icon={chevronRightAlt} hasAnimation={false} />

                </div>

                <div className={`hidden-xxl ${stylesMobileMenu.mobileMenuToggle}`} onClick={toggleMobileMenu}>

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                </div>

            </div>

            <HeaderMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} menuAds={menuAds} />

        </>

    )

}