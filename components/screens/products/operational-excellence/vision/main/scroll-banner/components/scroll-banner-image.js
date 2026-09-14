// Next
import Image from "next/image";

export default function ScrollBannerImage({
    desktopSrc,
    tabletSrc,
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
                sizes="(max-width: 767px) 100vw, 1px"
                priority={priority}
                loading={loading}
                className={`hidden-l hidden-xl hidden-xxl${className ? ` ${className}` : ""}`}
            />

            <Image
                src={tabletSrc}
                alt={alt}
                fill
                sizes="(min-width: 768px) and (max-width: 1279px) 100vw, 1px"
                priority={priority}
                loading={loading}
                className={`hidden-s hidden-m hidden-xxl${className ? ` ${className}` : ""}`}
            />

            <Image
                src={desktopSrc}
                alt={alt}
                fill
                sizes="(min-width: 1280px) 100vw, 1px"
                priority={priority}
                loading={loading}
                className={`hidden-s hidden-m hidden-l hidden-xl${className ? ` ${className}` : ""}`}
            />

        </>

    );

}
