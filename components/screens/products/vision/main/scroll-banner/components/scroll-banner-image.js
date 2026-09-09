import Image from "next/image";

import styles from "@/styles/components/screens/products/vision/components/scroll-banner-images.module.scss";

export default function ScrollBannerImage({
    desktopSrc,
    mobileSrc,
    alt,
    className = "",
    priority = false,
    loading,
}) {

    return (

        <>

            <Image
                src={mobileSrc}
                alt={alt}
                fill
                sizes="(max-width: 1023px) 100vw, 1px"
                priority={priority}
                loading={loading}
                className={`${styles.imageMobile}${className ? ` ${className}` : ""}`}
            />

            <Image
                src={desktopSrc}
                alt={alt}
                fill
                sizes="(max-width: 1023px) 1px, 100vw"
                priority={priority}
                loading={loading}
                className={`${styles.imageDesktop}${className ? ` ${className}` : ""}`}
            />

        </>

    );

}
