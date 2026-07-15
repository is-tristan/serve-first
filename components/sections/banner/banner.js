// Next
import Image from "next/image";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";

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
    imageSizing = "Fill",
    bannerType = "home",
    hasButtons = true,
    hasBackgroundDecoration = true,
    buttonPrimary = {
        text: "Get a demo",
        href: "/get-a-demo",
    },
    buttonSecondary = {
        text: "Talk to us",
        href: "/company/contact",
    },
}) {

    return (

        <section
            id="banner"
            className={`row bgLightAlt ${styles.banner} ${styles.className}`}
            data-background-decoration={hasBackgroundDecoration ? "true" : "false"}
            data-banner-type={bannerType}
        >

            <div className={`container dualCols ${styles.bannerContainer}`}>

                <div className={`contentCol ${styles.contentCol}`}>

                    <div className="content">

                        {eyebrow && (<Eyebrow text={eyebrow} />)}

                        <Text
                            headingClass={`pageTitle`}
                            titleTag="h1"
                            title={title}
                            description={description}
                            descriptionClass={`fw400`}
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
                                        delay={1}
                                    />

                                )}

                            </div>

                        )}

                    </div>

                </div>

                {image && (

                    <div className={`hidden-s hidden-m hidden-l image${imageSizing} ${styles.imageCol}`}>

                        <Image className={styles.bannerImage} src={image} alt={title} width={768} height={768} loading="eager" sizes="100%" style={{ objectFit: imageSizing === "Contain" ? "contain" : "cover" }} priority />

                    </div>

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