// Next
import Image from "next/image";

// Styles
import styles from "@/styles/components/screens/products/vision/components/scroll-banner-section.module.scss";

// Images
const scrollBannerBackgroundImage = "/images/vision/scroll-banner/vision-banner-image.png";

export default function ScrollBannerBackground() {

    return (

        <div className={styles.scrollBannerBackground}>

            <Image className={styles.scrollBannerBackgroundImage} src={scrollBannerBackgroundImage} alt="Scroll Banner Background" fill priority />

            <div className={styles.scrollBannerOverlay} />

        </div>

    );

}