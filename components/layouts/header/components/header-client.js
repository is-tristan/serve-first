"use client";

// React
import { useState, useEffect, cloneElement, isValidElement } from "react";

// Next
import { usePathname } from "next/navigation";

// Components
import Topbar from "@/components/layouts/topbar/topbar";

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";

const headerConfig = {
    "/": {
        topbar: {
            href: "/coming-soon",
            text: "Something big is coming: The future of operational excellence. Be the first to know",
            target: "_self",
            type: "home",
            fullLink: true,
        },
    },
    "/products/customer-experience/mystery-shopping": {
        topbar: {
            href: "https://mysteryshopping.servefirst.ai/",
            text: "Become a mystery shopper",
            target: "_blank",
            type: "default",
            fullLink: false,
        },
    },
    "/lp-audit": {
        headerType: "minimal",
    },
    "/lp-client-connect": {
        headerType: "minimal",
    },
    "/lp-terminals": {
        headerType: "minimal",
    },
    "/products/vision": {
        headerType: "productVisionHeader",
    },
};

export default function HeaderClient({ children }) {

    const pathname = usePathname();
    const pageHeaderConfig = headerConfig[pathname] || {};
    const topbarProps = pageHeaderConfig.topbar;
    const hasTopbar = Boolean(topbarProps);
    const headerType = pageHeaderConfig.headerType || "default";
    const headerChildren = isValidElement(children)
        ? cloneElement(children, { headerType })
        : children;

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

            {hasTopbar && (

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

                {headerChildren}

            </header>

        </>

    )

}
