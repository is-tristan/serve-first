// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import PlatformStoryItem from "@/components/sections/platform-story/components/platform-story-item";

// Styles
import styles from "@/styles/components/sections/platform-story.module.scss";

// Data
import { platformStoryData } from "@/data/platform-story-data";

export default function PlatformStory({
    eyebrow = "- Platform Story Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    data = platformStoryData || []
}) {

    return (

        <section
            className={`row ${styles.platformStory}`}
            data-name="platform-story"
        >

            <div className={"container sectionSplitTitle noPaddingBottom"}>

                <div className={`content headingCol`}>

                    {eyebrow && (<Eyebrow text={eyebrow} />)}

                    <Text headingClass={`sectionTitle colorPrimaryAlt`} title={title} />

                </div>

                <div className={`contentCol`}>

                    {description && (<Text description={description} />)}

                </div>

            </div>

            {data.length > 0 && (

                <div className={`container flexAuto noPaddingTop ${styles.platformStoryItems}`}>

                    {data.map((item, index) => (

                        <PlatformStoryItem
                            key={index}
                            index={index}
                            eyebrow={item.eyebrow}
                            image={item.image}
                            imageWidth={item.imageWidth}
                            imageHeight={item.imageHeight}
                            imageSizing={item.imageSizing}
                            title={item.title}
                            description={item.description}
                            list={item.list}
                            button={item.button}
                        />

                    ))}

                </div>

            )}

        </section >

    )

}
