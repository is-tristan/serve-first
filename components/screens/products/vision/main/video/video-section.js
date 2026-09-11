// Styles
import styles from "@/styles/components/screens/products/vision/components/video-section.module.scss";

export default function VideoSection() {

    return (

        <section className={styles.videoSection}>

            <div className={styles.videoContainer}>

                <video
                    src="/videos/product/vision/video-vision.mp4"
                    poster="/videos/product/vision/vision-video-poster.avif"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.video}
                    preload="none"
                />

            </div>

        </section>

    );

}