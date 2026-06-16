// Next
import Image from "next/image";

// Components
import Eyebrow from "../decoration/eyebrow";
import Text from "../content/text";
import Button from "../handlers/buttons";

// Data
import { howItWorksData } from "@/data/how-it-works-data";

// Styles
import styles from "@/styles/components/sections/feature-list.module.scss";
import stylesAlt from "@/styles/components/sections/how-it-works.module.scss";

// Icons
import { checkmark } from "@/utils/icons";

export default function HowItWorks({ theme = "light", heading = [], data = howItWorksData || [] }) {

    const headingItems = Array.isArray(heading) ? heading : Array.isArray(data?.heading) ? data.heading : Array.isArray(data?.[0]?.heading) ? data[0].heading : [];

    const items = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : Array.isArray(data?.[1]?.data) ? data[1].data : [];

    return (

        <section
            className={`row ${stylesAlt.howItWorks} ${styles.featureList} ${theme === "dark" ? "sectionHasGradients" : undefined}`}
            data-theme={theme}
            style={{ gap: "0" }}
        >

            {headingItems.length > 0 && (

                <div className={`container centered noPaddingBottom`}>

                    {headingItems.map((item, index) => (

                        <div key={index} className={`heading ${stylesAlt.howItWorksHeading}`}>

                            {item.eyebrow && (<Eyebrow text={item.eyebrow} />)}

                            {item.title && (<Text headingClass={`sectionTitle ${theme === "dark" ? "lightHeadingGradient" : "darkHeadingGradient"}`} title={item.title} description={item.description} />)}

                        </div>

                    ))}

                </div>

            )}

            {items.length > 0 && (

                <div className={`container ${styles.featureListItems}`}>

                    {items.map((item, index) => (

                        <div key={index} className={`${styles.featureListItem} ${stylesAlt.howItWorksItem}`}>

                            <div className={`${styles.colRight}`}>

                                <Image
                                    className={styles.featureListItemImage}
                                    src={item.image || "/decoration/no-image-placeholder.webp"}
                                    alt={item.title || "How it works image"}
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                            </div>

                            <div className={`${styles.colLeft} ${styles.featureListItemContent}`}>

                                <div className={`hasFullStop ${styles.featureListItemHeader}`}>

                                    {item.number && (<span className={stylesAlt.featureListItemNumber}>{item.number}</span>)}

                                    {item.eyebrow && (<Eyebrow text={item.eyebrow} />)}

                                    {item.title && (<h2 className={`sectionTitle ${theme === "dark" ? "lightHeadingGradient" : "darkHeadingGradient"}`}>{item.title}</h2>)}

                                </div>

                                {item.description && (<p>{item.description}</p>)}

                                {Array.isArray(item.list) && item.list.length > 0 && (

                                    <div className={`iconList ${stylesAlt.howItWorksItemList}`}>

                                        {item.list.map((listItem, index) => (

                                            <div key={index} className={`iconListItem`}>

                                                <div className={"icon colorPrimary"} dangerouslySetInnerHTML={{ __html: checkmark }} />

                                                <span>{listItem.text}</span>

                                            </div>

                                        ))}

                                    </div>
                                )}

                                <div className={`${styles.featuredItemFooter} ${stylesAlt.howItWorksItemFooter}`}>

                                    {item.button && (<Button className={stylesAlt.howItWorksItemButton} text={item.button.text} href={item.button.href} target={item.button.target} hasAnimation={false} />)}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </section>

    )

}