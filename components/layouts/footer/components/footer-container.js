// Components
import FooterItems from "./footer-items";
import FooterCopyright from "./footer-copyright";
import FooterBottom from "./footer-bottom";

// Styles
import styles from "@/styles/components/layouts/footer/footer.module.scss";

export default function FooterContainer({ theme, bottomText }) {

    return (

        <div className={`container ${styles.footerContainer}`}>

            <FooterItems theme={theme} />

            <FooterCopyright />

            <FooterBottom text={bottomText} />

        </div>

    );
}