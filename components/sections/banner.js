// Next
import Image from "next/image";

// Components
import Eyebrow from "../decoration/eyebrow";
import Text from "../content/text";
import Button from "../handlers/buttons";

// Styles
import styles from "@/styles/components/sections/banner.module.scss";

export default function Banner({
    eyebrow = "- Banner Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>",
    image = "/images/servefirst-iphone-mockup-dashboard.webp",
    backgroundImage = "/backgrounds/banner-background.webp",
    bannerType = "home",
    hasButtons = true,
    hasNoise = true
}) {

    return (

        <section
            id="banner"
            className={`row colorLight ${styles.banner} ${styles.className}`}
            data-background-image={backgroundImage ? "true" : "false"}
            data-banner-type={bannerType}
            data-has-noise={hasNoise ? "true" : "false"}
        >

            <div className={`container dualCols ${styles.bannerContainer}`}>

                <div className={`contentCol ${styles.contentCol}`}>

                    <div className="content">

                        {eyebrow && (<Eyebrow text={eyebrow} />)}

                        <Text
                            headingClass={`lightHeadingGradient pageTitle`}
                            titleTag="h1"
                            title={title}
                            description={description}
                        />

                        {hasButtons && (

                            <div className={`buttons ${styles.bannerButtons}`}>

                                <Button
                                    text="Lorem ipsum dolor sit amet."
                                    href="#"
                                    className="primary"
                                />

                                <Button
                                    text="Lorem ipsum dolor sit amet."
                                    href="#"
                                    className="textLink"
                                    delay={1}
                                />

                            </div>

                        )}

                    </div>

                </div>

                {image && (

                    <div className={`hidden-s hidden-m hidden-l ${styles.imageCol}`}>

                        <Image className={styles.bannerImage} src={image} alt={title} width={1024} height={1024} loading="eager" priority />

                    </div>

                )}

            </div>

            {backgroundImage && (

                <div className={styles.backgroundImage}>

                    <Image src={backgroundImage} alt={title} fill loading="eager" priority />

                </div>

            )}

        </section>

    );

}