"use client";

import ScrollBannerImage from "../scroll-banner-image";

import styles from "@/styles/components/screens/products/vision/components/scroll-banner-frames.module.scss";

const scrollBannerFrame = "/images/vision/scroll-banner/vision-banner-image-frame-2-frame.png";
const scrollBannerFrameMobile = "/images/vision/scroll-banner/vision-banner-image-mobile-frame-2-frame.png";
const scrollBannerFrameText = "/images/vision/scroll-banner/vision-banner-image-frame-2-frame-text.png";
const scrollBannerFrameTextMobile = "/images/vision/scroll-banner/vision-banner-image-mobile-frame-2-frame-text.png";
const scrollFramePrompt = "/images/vision/scroll-banner/vision-banner-image-frame-2-prompt.png";
const scrollFramePromptMobile = "/images/vision/scroll-banner/vision-banner-image-mobile-frame-2-prompt.png";

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
                mobileSrc={scrollBannerFrameMobile}
                alt=""
                className={`${styles.frameImage} ${styles.frameImageBox}`}
            />

            <ScrollBannerImage
                desktopSrc={scrollBannerFrameText}
                mobileSrc={scrollBannerFrameTextMobile}
                alt=""
                className={`${styles.frameImage} ${styles.frameImageText}`}
            />

            <ScrollBannerImage
                desktopSrc={scrollFramePrompt}
                mobileSrc={scrollFramePromptMobile}
                alt=""
                className={`${styles.frameImage} ${styles.frameImagePrompt}`}
            />

        </div>

    );

}
