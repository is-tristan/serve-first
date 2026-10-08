// Components
import FeaturedListItem from "../lp-featured-list/components/lp-featured-list-item";

// Data
import { lpFeaturedListData } from "./data/lp-featured-list-data";

// Styles
import styles from "@/styles/components/sections/feature-list.module.scss";

export default function LpFeatureList({
    containerClass = undefined,
    theme = "light",
    data = lpFeaturedListData || []
}) {

    return (

        <section className={`row ${styles.featureList}`} data-theme={theme} data-name="feature-list">

            {data.length > 0 && (

                <div className={`container ${styles.featureListItems} ${containerClass}`}>

                    {data.map((item, index) => (

                        <FeaturedListItem
                            key={index}
                            index={index}
                            theme={theme}
                            image={item.image}
                            imagePosition={item.imagePosition}
                            imageWidth={item.imageWidth}
                            imageHeight={item.imageHeight}
                            imageSizing={item.imageSizing}
                            eyebrow={item.eyebrow}
                            title={item.title}
                            hasFullStop={item.hasFullStop}
                            descriptionNegative={item.descriptionNegative}
                            descriptionPositive={item.descriptionPositive}
                            listNegative={item.listNegative}
                            listPositive={item.listPositive}
                            listTags={item.listTags}
                            button={item.button}
                        />

                    ))}

                </div>

            )}

        </section>

    )

}