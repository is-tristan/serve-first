"use client";

// React
import { useState } from "react";

// Components
import Button from "@/components/handlers/buttons";
import HeaderMobileMenu from "@/components/layouts/header/parts/header-mobile-menu";

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";
import stylesMobileMenu from "@/styles/components/layouts/header/header-mobile-menu.module.scss";

// Icons
import { chevronRightAlt } from "@/utils/icons";

export default function HeaderButtons() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (

        <>

            <div className={`${styles.headerActions}`}>

                <div className={`${styles.headerButtons}`}>

                    <Button text="Sign in" href="#" className={`textLink ${styles.textLinkBtn}`} hasAnimation={false} icon={null} />

                    <Button text="Book a demo" href="#" className={`primary hidden-s ${styles.primaryBtn}`} icon={chevronRightAlt} hasAnimation={false} />

                </div>

                <div className={`hidden-xxl ${stylesMobileMenu.mobileMenuToggle}`} onClick={toggleMobileMenu}>

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                    <span className={stylesMobileMenu.mobileMenuToggleItem} />

                </div>

            </div>

            <HeaderMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        </>

    )

}