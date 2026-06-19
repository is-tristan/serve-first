// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import EvaSpotlightItem from "@/components/sections/eva-spotlight/components/eva-spotlight-item";

// Styles
import styles from "@/styles/components/sections/eva-spotlight.module.scss";

export default function EvaSpotlight({
    theme = "light",
    eyebrow = "- Eva Spotlight Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    item = {
        "eyebrow": "EVA AI",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        "image": "/decoration/no-image-placeholder.webp",
        "button": {
            "text": "Lorem ipsum dolor sit amet",
            "href": "#",
            "target": "_self",
        }
    }
}) {

    return (

        <section className={`row ${styles.evaSpotlight} ${theme === "dark" ? "sectionHasGradients" : undefined}`} data-theme={theme}>

            <div className="container centered noPaddingBottom">

                <div className={`content`}>

                    {eyebrow && (<Eyebrow text={eyebrow} />)}

                    <Text headingClass={`sectionTitle ${theme === "dark" ? "lightHeadingGradient" : "darkAltHeadingGradient"}`} title={title} description={description} />
                    
                </div>

            </div>

            <div className="container noPaddingTop">

                {item && (<EvaSpotlightItem item={item} />)}

            </div>

        </section>

    )

}