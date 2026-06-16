// Next
import Image from "next/image";

// Components
import Eyebrow from "../decoration/eyebrow";
import Button from "../handlers/buttons";

// Data
import { featureListData } from "@/data/feature-list-data";

// Styles
import styles from "@/styles/components/sections/feature-list.module.scss";

// Icons
import { checkmark } from "@/utils/icons";

export default function FeatureList({ theme = "light", data = featureListData || [] }) {

    return (

        <section className={`row ${styles.featureList} ${theme === "dark" ? "sectionHasGradients" : undefined}`} data-theme={theme}>

            {data.length > 0 && (

                <div className={`container ${styles.featureListItems}`}>

                    {data.map((item, index) => (

                        <div key={index} className={styles.featureListItem}>

                            <div className={`${styles.colRight}`}>

                                <Image
                                    className={styles.featureListItemImage}
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                            </div>

                            <div className={`${styles.colLeft} ${styles.featureListItemContent}`}>

                                <div className={`hasFullStop ${styles.featureListItemHeader}`}>

                                    {item.eyebrow && (<Eyebrow text={item.eyebrow} />)}

                                    {item.title && (<h2 className={`sectionTitle ${theme === "dark" ? "lightHeadingGradient" : "darkHeadingGradient"}`}>{item.title}</h2>)}

                                </div>

                                {item.description && (<p>{item.description}</p>)}

                                {item.list.length > 0 && (

                                    <div className={`iconList`}>

                                        {item.list.map((item, index) => (

                                            <div key={index} className={`iconListItem`}>

                                                <div className={"icon colorPrimary"} dangerouslySetInnerHTML={{ __html: checkmark }} />

                                                <span>{item.text}</span>

                                            </div>

                                        ))}

                                    </div>
                                )}

                                <div className={styles.featuredItemFooter}>

                                    {item.button && (<Button className="textLink colorPrimary" text={item.button.text} href={item.button.href} target={item.button.target} hasAnimation={false} />)}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </section>

    )

}