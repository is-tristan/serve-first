"use client"

// React & Next
import { useState } from "react"
import { usePathname } from "next/navigation"

// Components
import Button from "@/components/handlers/buttons"
import HeaderMobileMenu from "@/components/layouts/header/components/header-mobile-menu"

// Config
import { getHeaderType } from "@/components/layouts/header/components/header-config"

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss"
import stylesMobileMenu from "@/styles/components/layouts/header/header-mobile-menu.module.scss"

// Icons
import { chevronRightAlt } from "@/utils/icons"

export default function HeaderActions({ menuAds }) {

    const pathname = usePathname()
    const headerType = getHeaderType(pathname)
    const isProductVisionHeader = headerType === "productVisionHeader"
    const isMinimalHeader = headerType === "minimal"

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (

        <>

            {isProductVisionHeader ? (

                <div className={`${styles.headerActions} ${styles.productVisionHeaderActions}`}>

                    <div className={`${styles.productVisionHeaderButtons}`}>

                        <Button text="Back to Serve First" href="/" className={`textLink colorLight ${styles.textLinkBtn}`} hasAnimation={false} />

                    </div>

                </div>

            ) : isMinimalHeader ? (

                <div className={`${styles.headerActions}`}>

                    <div className={`${styles.headerButtons}`}>

                        <Button text="Request a demo" href="/get-a-demo" className={`light ${styles.primaryBtn}`} icon={chevronRightAlt} hasAnimation={false} />

                    </div>

                </div>

            ) : (

                <div className={`${styles.headerActions}`}>

                    <div className={`${styles.headerButtons}`}>

                        <Button text="Sign in" href="https://app.servefirst.co.uk/user/login" target="_blank" rel="noopener noreferrer" className={`textLink colorDark ${styles.textLinkBtn}`} hasAnimation={false} icon={null} />

                        <Button text="Request a demo" href="/get-a-demo" className={`primary ${styles.primaryBtn}`} icon={chevronRightAlt} hasAnimation={false} />

                    </div>

                    <div className={`hidden-xxl ${stylesMobileMenu.mobileMenuToggle}`} onClick={toggleMobileMenu} data-name="mobileMenuToggle">

                        <span className={stylesMobileMenu.mobileMenuToggleItem} />

                        <span className={stylesMobileMenu.mobileMenuToggleItem} />

                        <span className={stylesMobileMenu.mobileMenuToggleItem} />

                    </div>

                </div>

            )}

            {!isProductVisionHeader && !isMinimalHeader && (

                <HeaderMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} menuAds={menuAds} />

            )}

        </>

    )

}
