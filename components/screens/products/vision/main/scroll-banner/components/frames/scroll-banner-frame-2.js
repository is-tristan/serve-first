"use client";

// Components
import ScrollBannerImage from "../scroll-banner-image";

// Styles
import styles from "@/styles/components/screens/products/vision/components/scroll-banner-frames.module.scss";

// Mobile
const scrollBannerFrameMobile = "/images/vision/scroll-banner/mobile/vision-banner-image-frame-2-frame.png";
const scrollBannerFrameTextMobile = "/images/vision/scroll-banner/mobile/vision-banner-image-frame-2-frame-text.png";
const scrollFramePromptMobile = "/images/vision/scroll-banner/mobile/vision-banner-image-frame-2-prompt.png";

// Tablet
const scrollBannerFrameTablet = "/images/vision/scroll-banner/tablet/vision-banner-image-frame-2-frame.png";
const scrollBannerFrameTextTablet = "/images/vision/scroll-banner/tablet/vision-banner-image-frame-2-frame-text.png";
const scrollFramePromptTablet = "/images/vision/scroll-banner/tablet/vision-banner-image-frame-2-prompt.png";

// Desktop
const scrollBannerFrame = "/images/vision/scroll-banner/desktop/vision-banner-image-frame-2-frame.png";
const scrollBannerFrameText = "/images/vision/scroll-banner/desktop/vision-banner-image-frame-2-frame-text.png";
const scrollFramePrompt = "/images/vision/scroll-banner/desktop/vision-banner-image-frame-2-prompt.png";

export default function ScrollBannerFrame2({ isActive = false }) {

    return (

        <div
            className={styles.scrollBannerFrame2}
            data-active={isActive ? true : undefined}
            aria-hidden={!isActive}
            inert={!isActive ? true : undefined}
            role="group"
            aria-label="VISION detecting a staff member on the camera feed and prompting a task"
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
