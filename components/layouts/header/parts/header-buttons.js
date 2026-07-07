"use client";

// React
import { useState } from "react";

// Components
import Button from "@/components/handlers/buttons";
import HeaderMobileMenu from "@/components/layouts/header/parts/header-mobile-menu";

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";

// Icons
import { chevronRightAlt } from "@/utils/icons";

export default function HeaderButtons() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (

        <>

            <div className={`${styles.headerButtons}`}>

                <div className={`hidden-s hidden-m hidden-l ${styles.desktopButtons}`}>

                    <Button text="Sign in" href="#" className={`textLink ${styles.textLinkBtn}`} hasAnimation={false} icon={null} />

                    <Button text="Book a demo" href="#" className={`primary ${styles.primaryBtn}`} icon={chevronRightAlt} hasAnimation={false} />

                </div>


                <div className={`hidden-xl hidden-xxl`} onClick={toggleMobileMenu}>

                    <span className={styles.mobileMenuToggle} />

                    <span className={styles.mobileMenuToggle} />

                    <span className={styles.mobileMenuToggle} />

                </div>

            </div>

            <HeaderMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        </>

    )

}