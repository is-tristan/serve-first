// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import EvaSpotlightItem from "@/components/sections/eva-spotlight/components/eva-spotlight-item";
import EvaFeaturedImage from "@/components/sections/eva-spotlight/components/eva-featured-image";

// Styles
import styles from "@/styles/components/sections/eva-spotlight.module.scss";

export default function EvaSpotlight({
    eyebrow = "- Eva Spotlight Component",
    titleContainerClass,
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    featuredImage,
    aspectRatio = "16/9",
    item = {
        "eyebrow": "EVA",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "titleSuffix": ".",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        "htmlDescription": "",
        "image": "/decoration/no-image-placeholder.webp",
        "imageWidth": 576,
        "imageHeight": 768,
        "imageSizing": "contain",
        "button": {
            "text": "Lorem ipsum dolor sit amet",
            "href": "#",
            "target": "_self",
        }
    }
}) {

    return (

        <section className={`row ${styles.evaSpotlight}`}>

            {eyebrow || title || description && (

                <div className={`container centered noPaddingBottom ${titleContainerClass}`}>

                    <div className={`content`}>

                        {eyebrow && (<Eyebrow text={eyebrow} hasDash={true} />)}

                        <Text headingClass={`sectionTitle colorPrimaryAlt`} title={title} description={description} descriptionClass={`fw400`} />

                    </div>

                </div>

            )}

            {featuredImage ? (

                <div className={`container ${eyebrow || title || description ? "noPaddingTop" : undefined}`}>

                    <EvaFeaturedImage
                        featuredImage={featuredImage}
                        title={title}
                        titleSuffix={item.titleSuffix}
                        aspectRatio={aspectRatio}
                    />

                </div>

            ) : (

                <div className={`container ${eyebrow || title || description ? "noPaddingTop" : undefined}`}>

                    {item && (<EvaSpotlightItem item={item} />)}

                </div>

            )}

        </section>

    )

}
