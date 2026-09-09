import ScrollBannerImage from "./scroll-banner-image";

import styles from "@/styles/components/screens/products/vision/components/scroll-banner-section.module.scss";

const scrollBannerBackgroundImage = "/images/vision/scroll-banner/vision-banner-image.png";
const scrollBannerBackgroundImageMobile = "/images/vision/scroll-banner/vision-banner-image-mobile.png";

export default function ScrollBannerBackground() {

    return (

        <div className={styles.scrollBannerBackground} aria-hidden="true">

            <ScrollBannerImage
                className={styles.scrollBannerBackgroundImage}
                desktopSrc={scrollBannerBackgroundImage}
                mobileSrc={scrollBannerBackgroundImageMobile}
                alt=""
                priority
            />

            <div className={styles.scrollBannerOverlay} />

        </div>

    );

}
