// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";
import PlatformStoryItem from "@/components/sections/platform-story/components/platform-story-item";

// Styles
import styles from "@/styles/components/sections/platform-story.module.scss";

// Data
import { platformStoryData } from "@/data/platform-story-data";

export default function PlatformStory({
    itemClass,
    theme,
    eyebrow = "- Platform Story Component",
    eyebrowColor,
    titleAlignment,
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    btn = null,
    data = platformStoryData || []
}) {

    return (

        <section
            className={`row ${styles.platformStory}`}
            data-name="platform-story"
            data-theme={theme}
        >

            <div className={"container noPaddingBottom"}>

                <div className={`content`} data-alignment={titleAlignment}>

                    {eyebrow && (<Eyebrow text={eyebrow} hasDash={true} textColor={eyebrowColor} />)}

                    <Text headingClass={`sectionTitle colorPrimaryAlt`} title={title} />

                    {description && (<Text description={description} />)}

                    {btn && (<Button className={`textLink`} text={btn.text} href={btn.href} target={btn.target ? btn.target : "_self"} />)}

                </div>

            </div>

            {data.length > 0 && (

                <div className={`container flexAuto noPaddingTop ${styles.platformStoryItems}`}>

                    {data.map((item, index) => (

                        <PlatformStoryItem
                            key={index}
                            index={index}
                            itemClass={itemClass}
                            eyebrow={item.eyebrow}
                            image={item.image}
                            imageAlt={item.imageAlt}
                            imageWidth={item.imageWidth}
                            imageHeight={item.imageHeight}
                            imageSizing={item.imageSizing}
                            title={item.title}
                            description={item.description}
                            list={item.list}
                            tags={item.tags}
                            button={item.button}
                        />

                    ))}

                </div>

            )}

        </section >

    )

}
