"use client";

import ScrollBannerImage from "../scroll-banner-image";

import styles from "@/styles/components/screens/products/vision/components/scroll-banner-frames.module.scss";

const scrollBannerFrame = "/images/vision/scroll-banner/desktop/vision-banner-image-frame-3-frame.png";
const scrollBannerFrameTablet = "/images/vision/scroll-banner/tablet/vision-banner-image-frame-3-frame.png";
const scrollBannerFrameMobile = "/images/vision/scroll-banner/mobile/vision-banner-image-frame-3-frame.png";
const scrollBannerFrameText = "/images/vision/scroll-banner/desktop/vision-banner-image-frame-3-frame-text.png";
const scrollBannerFrameTextTablet = "/images/vision/scroll-banner/tablet/vision-banner-image-frame-3-frame-text.png";
const scrollBannerFrameTextMobile = "/images/vision/scroll-banner/mobile/vision-banner-image-frame-3-frame-text.png";
const scrollFramePrompt = "/images/vision/scroll-banner/desktop/vision-banner-image-frame-3-prompt.png";
const scrollFramePromptTablet = "/images/vision/scroll-banner/tablet/vision-banner-image-frame-3-prompt.png";
const scrollFramePromptMobile = "/images/vision/scroll-banner/mobile/vision-banner-image-frame-3-prompt.png";

export default function ScrollBannerFrame3({ isActive = false }) {

    return (

        <div
            className={styles.scrollBannerFrame3}
            data-active={isActive ? true : undefined}
            aria-hidden={!isActive}
            inert={!isActive ? true : undefined}
            role="group"
            aria-label="VISION detecting a customer on the camera feed and raising a restock task"
        >

            <ScrollBannerImage
                desktopSrc={scrollBannerFrame}
                tabletSrc={scrollBannerFrameTablet}
                mobileSrc={scrollBannerFrameMobile}
                alt=""
                className={`${styles.frameImage} ${styles.frameImageBox}`}
            />

            <ScrollBannerImage
                desktopSrc={scrollBannerFrameText}
                tabletSrc={scrollBannerFrameTextTablet}
                mobileSrc={scrollBannerFrameTextMobile}
                alt=""
                className={`${styles.frameImage} ${styles.frameImageText}`}
            />

            <ScrollBannerImage
                desktopSrc={scrollFramePrompt}
                tabletSrc={scrollFramePromptTablet}
                mobileSrc={scrollFramePromptMobile}
                alt=""
                className={`${styles.frameImage} ${styles.frameImagePrompt}`}
            />

        </div>

    );

}
