"use client";

// Next
import { usePathname } from "next/navigation";

// Components
import Topbar from "@/components/layouts/topbar/topbar";

// Styles
import styles from "@/styles/components/layouts/header/header.module.scss";

const topbarConfig = {
    "/": {
        href: "/products/vision",
        text: "Something big is coming: The future of operational excellence. Be the first to know",
        target: "_self",
        type: "home",
        fullLink: true,
    },
    "/products/customer-experience/mystery-shopping": {
        href: "https://mysteryshopping.servefirst.ai/",
        text: "Become a Mystery Shopper",
        target: "_blank",
        type: "default",
    },
}

export default function HeaderShell({ children }) {

    const pathname = usePathname();
    const topbarProps = topbarConfig[pathname];
    const hasTopbar = Boolean(topbarProps);

    return (

        <>

            {hasTopbar && (

                <Topbar
                    fullLink={true}
                    href={topbarProps.href}
                    text={topbarProps.text}
                    target={topbarProps.target}
                    type={topbarProps.type}
                />

            )}

            <header id="header" className={styles.header} role="banner" data-has-topbar={hasTopbar} data-topbar-type={topbarProps?.type}>

                {children}

            </header>

        </>

    )

}
