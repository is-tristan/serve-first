import ScrollBannerImage from "./scroll-banner-image";

import styles from "@/styles/components/screens/products/vision/components/scroll-banner-section.module.scss";

const scrollBannerBackgroundImage = "/images/vision/scroll-banner/desktop/vision-banner-image.png";
const scrollBannerBackgroundImageTablet = "/images/vision/scroll-banner/tablet/vision-banner-image.png";
const scrollBannerBackgroundImageMobile = "/images/vision/scroll-banner/mobile/vision-banner-image.png";

export default function ScrollBannerBackground() {

    return (

        <div className={styles.scrollBannerBackground} aria-hidden="true">

            <ScrollBannerImage
                className={styles.scrollBannerBackgroundImage}
                desktopSrc={scrollBannerBackgroundImage}
                tabletSrc={scrollBannerBackgroundImageTablet}
                mobileSrc={scrollBannerBackgroundImageMobile}
                alt=""
                priority
            />

            <div className={styles.scrollBannerOverlay} />

        </div>

    );

}
