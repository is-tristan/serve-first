"use client";

// Next
import { usePathname } from "next/navigation";

// Components
import FooterContainer from "@/components/layouts/footer/components/footer-container";
import LineDecoration from "@/components/decoration/line-decoration";

// Config
import { getFooterConfig, getFooterType } from "@/components/layouts/footer/components/footer-config";

// Styles
import styles from "@/styles/components/layouts/footer/footer.module.scss";

export default function FooterClient() {

    const pathname = usePathname();
    const pageFooterConfig = getFooterConfig(pathname);
    const theme = pageFooterConfig.theme || "light";
    const bottomText = pageFooterConfig.bottomText;
    const footerType = getFooterType(pathname);

    return (

        <footer
            id="footer"
            className={`${styles.footer} ${theme === "dark" ? "bgDark" : "bgLightAlt"}`}
            role="contentinfo"
            data-theme={theme}
            data-footer-type={footerType}
        >

            <FooterContainer theme={theme} bottomText={bottomText} />

            {theme !== "dark" && (

                <LineDecoration variant="footer" className={styles.footerDecoration} playInView />

            )}

        </footer>

    );

}
