"use client";

import { usePathname } from "next/navigation";

import FooterContainer from "@/components/layouts/footer/components/footer-container";

import styles from "@/styles/components/layouts/footer/footer.module.scss";

const footerConfig = {
    "/products/operational-excellence/vision": {
        theme: "dark",
        bottomText: "vision",
    },
};

export default function FooterClient() {

    const pathname = usePathname();
    const pageFooterConfig = footerConfig[pathname] || {};
    const theme = pageFooterConfig.theme || "light";
    const bottomText = pageFooterConfig.bottomText;

    return (

        <footer
            id="footer"
            className={`${styles.footer} ${theme === "dark" ? "bgDark" : "bgLightAlt"}`}
            role="contentinfo"
            data-theme={theme}
        >

            <FooterContainer theme={theme} bottomText={bottomText} />

        </footer>

    );

}
