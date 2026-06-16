// Next
import Image from "next/image";

// Components
import Eyebrow from "../decoration/eyebrow";
import Text from "../content/text";
import Button from "../handlers/buttons";

// Styles
import styles from "@/styles/components/sections/platform-story.module.scss";

// Data
import { platformStoryData } from "@/data/platform-story-data";

export default function PlatformStory({
    theme = "light",
    eyebrow = "- Lorem ipsum dolor sit amet.",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    data = platformStoryData || []
}) {

    return (

        <section className={`row ${styles.platformStory} ${theme === "dark" ? "sectionHasGradients" : undefined}`} data-theme={theme}>

            <div className={'container sectionSplitTitle noPaddingBottom'}>

                <div className={`content headingCol`}>

                    {eyebrow && (<Eyebrow text={eyebrow} />)}

                    <Text headingClass={`sectionTitle ${theme === "dark" ? "lightHeadingGradient" : ""}`} title={title} />

                </div>

                <div className={`contentCol`}>

                    {description && (<Text description={description} />)}

                </div>

            </div>

            {data.length > 0 && (

                <div className={`container flexAuto noPaddingTop ${styles.platformStoryItems}`}>

                    {data.map((item, index) => (

                        <div key={index} className={styles.platformStoryItem}>

                            <div className={styles.platformStoryItemHeader}>

                                {item.eyebrow && (<Eyebrow type="secondary" text={item.eyebrow} />)}

                                {item.image && (

                                    <div className={styles.platformStoryItemImage}>

                                        <Image src={item.image} alt={item.title} fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />

                                    </div>

                                )}

                            </div>

                            {(item.title || item.description || item.list.length > 0) && (

                                <div className={styles.platformStoryItemContent}>

                                    {item.title && (<h3>{item.title}</h3>)}

                                    {item.description && (<p>{item.description}</p>)}

                                    {item.list.length > 0 && (

                                        <ul>

                                            {item.list.map((item, index) => (

                                                <li key={index}>{item.text}</li>

                                            ))}

                                        </ul>

                                    )}

                                </div>

                            )}

                            {item.button.length > 0 && (

                                <div className={styles.platformStoryItemFooter}>

                                    {item.button.map((item, index) => (

                                        <Button
                                            key={index}
                                            hasAnimation={false}
                                            className="textLink colorPrimary"
                                            text={item.text}
                                            href={item.href}
                                            target={item.target}
                                        />

                                    ))}

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            )}

        </section >

    )

}