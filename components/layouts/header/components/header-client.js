"use client";

// React
import { useState, useEffect } from "react";

// Next
import { usePathname } from "next/navigation";

// Components
import Topbar from "@/components/layouts/topbar/topbar";
import CxBanner from "@/components/layouts/topbar/components/cx-banner";

// Config
import { getHeaderConfig, getHeaderType } from "@/components/layouts/header/components/header-config";

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";

export default function HeaderClient({ children }) {

    const pathname = usePathname();
    const pageHeaderConfig = getHeaderConfig(pathname);
    const topbarProps = pageHeaderConfig.topbar;
    const hasTopbar = Boolean(topbarProps);
    const isCxBanner = topbarProps?.type === "cxBanner";
    const headerType = getHeaderType(pathname);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <>

            {isCxBanner && (

                <CxBanner href={topbarProps.href} />

            )}

            {hasTopbar && !isCxBanner && (

                <Topbar
                    fullLink={topbarProps.fullLink}
                    href={topbarProps.href}
                    text={topbarProps.text}
                    target={topbarProps.target}
                    type={topbarProps.type}
                />

            )}

            <header
                id="header"
                className={styles.header}
                role="banner"
                data-has-topbar={hasTopbar}
                data-topbar-type={topbarProps?.type}
                data-header-type={headerType}
                data-scrolled={isScrolled}
            >

                {children}

            </header>

        </>

    )

}
