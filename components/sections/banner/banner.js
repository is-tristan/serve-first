// Components
import BannerHeading from "@/components/sections/banner/components/banner-heading";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";
import ImageCol from "@/components/sections/banner/components/image-col";

// Styles
import styles from "@/styles/components/sections/banner.module.scss";

// Background Decorations
import bdTr from "@/public/backgrounds/banner/banner-decoration-top-right.svg";
import bdBl from "@/public/backgrounds/banner/banner-decoration-bottom-left.svg";

export default function Banner({
    eyebrow = "- Banner Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>",
    image = "/decoration/no-image-placeholder.webp",
    imageSizing = "cover",
    bannerType = "default",
    hasButtons = true,
    hasFullStop = true,
    hasBackgroundDecoration = true,
    trustLine = null,
    buttonPrimary = {
        text: "Request a demo",
        href: "/get-a-demo",
    },
    buttonSecondary = {
        text: "Talk to us",
        href: "/company/contact-us",
    },
}) {

    return (

        <section
            id="banner"
            className={`row bgLightAlt ${styles.banner} ${styles.className}`}
            data-background-decoration={hasBackgroundDecoration ? "true" : "false"}
            data-banner-type={bannerType}
            data-name="banner"
        >

            <div className={`container dualCols ${styles.bannerContainer}`}>

                <div className={`contentCol ${styles.contentCol}`}>

                    <div className="content">

                        <BannerHeading
                            eyebrow={eyebrow}
                            title={title}
                            description={description}
                            hasFullStop={hasFullStop}
                        />

                        {hasButtons && (

                            <div className={`buttons ${styles.bannerButtons}`}>

                                {buttonPrimary.text && (

                                    <Button
                                        text={buttonPrimary.text}
                                        href={buttonPrimary.href}
                                        className="primary"
                                    />

                                )}

                                {buttonSecondary.text && (

                                    <Button
                                        text={buttonSecondary.text}
                                        href={buttonSecondary.href}
                                        className="textLink fw500 colorPrimary"
                                        delay={0.66}
                                    />

                                )}

                                {trustLine && (
                                    <Text
                                        description={trustLine}
                                        descriptionClass={`fw300 italic`}
                                    />

                                )}

                            </div>

                        )}

                    </div>

                </div>

                {image && (

                    <ImageCol image={image} imageSizing={imageSizing} title={title} />

                )}

            </div>

            {hasBackgroundDecoration && (

                <>

                    <div className={`${styles.backgroundDecoration} ${styles.bdTr}`} style={{ backgroundImage: `url(${bdTr.src})` }} />

                    <div className={`${styles.backgroundDecoration} ${styles.bdBl}`} style={{ backgroundImage: `url(${bdBl.src})` }} />

                </>

            )}

        </section>

    );

}