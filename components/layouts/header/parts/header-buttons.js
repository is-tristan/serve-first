"use client";

// React
import { useState } from "react";

// Components
import Button from "@/components/handlers/buttons";
import HeaderMobileMenu from "@/components/layouts/header/parts/header-mobile-menu";

// Styles
import styles from "@/styles/components/layouts/header.module.scss";

// Icons
import { menuToggle } from "@/utils/icons";

export default function HeaderButtons() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (

        <>

            <div className={`${styles.headerButtons}`}>

                <div className={`hidden-s hidden-m hidden-l`}>

                    <Button text="Schedule a Free Consultation" href="/contact" target="_self" className="primary" hasAnimation={false} />

                </div>


                <div className={`hidden-xl hidden-xxl`} onClick={toggleMobileMenu}>

                    <span className={styles.mobileMenuToggle} dangerouslySetInnerHTML={{ __html: menuToggle }} />

                </div>

            </div>

            <HeaderMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        </>

    )

}