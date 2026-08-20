"use client";

// React
import { cloneElement, isValidElement } from "react";

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
            text: "Become a Mystery Shopper",
            target: "_blank",
            type: "default",
            fullLink: false,
        },
    },
    "/lp-audit": {
        hasMinimalHeader: true,
    },
    "/lp-client-connect": {
        hasMinimalHeader: true,
    },
    "/lp-terminals": {
        hasMinimalHeader: true,
    },
};

export default function HeaderClient({ children }) {

    const pathname = usePathname();
    const pageHeaderConfig = headerConfig[pathname] || {};
    const topbarProps = pageHeaderConfig.topbar;
    const hasTopbar = Boolean(topbarProps);
    const hasMinimalHeader = Boolean(pageHeaderConfig.hasMinimalHeader);
    const headerChildren = isValidElement(children)
        ? cloneElement(children, { hasMinimalHeader })
        : children;

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
                data-has-minimal-header={hasMinimalHeader}
            >

                {headerChildren}

            </header>

        </>

    )

}
