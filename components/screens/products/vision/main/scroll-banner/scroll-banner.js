// Components
import ScrollBannerVideoOverlay from "./components/scroll-banner-video-overlay";
import ScrollBannerFrame1 from "./components/scroll-banner-frame-1";
import ScrollBannerPagination from "./components/scroll-banner-pagination";
import ScrollBannerBackground from "./components/scrollBannerBackground";

// Styles
import styles from "@/styles/components/screens/products/vision/components/scroll-banner-section.module.scss";

export default function ScrollBanner() {

    return (

        <section className={`row ${styles.scrollBanner}`}>

            <ScrollBannerFrame1 />

            <ScrollBannerPagination />

            <ScrollBannerVideoOverlay />

            <ScrollBannerBackground />

        </section>

    );

}