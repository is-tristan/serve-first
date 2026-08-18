"use client"

import { useState } from "react"

import Button from "@/components/handlers/buttons"
import HeaderMobileMenu from "@/components/layouts/header/parts/header-mobile-menu"

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss"
import stylesMobileMenu from "@/styles/components/layouts/header/header-mobile-menu.module.scss"

// Icons
import { chevronRightAlt } from "@/utils/icons"

export default function HeaderActions({ menuAds }) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (

        <>

            <div className={`${styles.headerActions}`}>

                <div className={`${styles.headerButtons}`}>

                    <Button text="Sign in" href="https://app.servefirst.co.uk/user/login" target="_blank" rel="noopener noreferrer" className={`textLink colorDark ${styles.textLinkBtn}`} hasAnimation={false} icon={null} />

                    <Button text="Book a demo" href="/get-a-demo" className={`primary ${styles.primaryBtn}`} icon={chevronRightAlt} hasAnimation={false} />

                </div>

                <div className={`hidden-xxl ${stylesMobileMenu.mobileMenuToggle}`} onClick={toggleMobileMenu} data-name="mobileMenuToggle">

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                </div>

            </div>

            <HeaderMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} menuAds={menuAds} />

        </>

    )

}