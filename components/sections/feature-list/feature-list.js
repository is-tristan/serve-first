// Components
import FeaturedListItem from "@/components/sections/feature-list/components/featured-list-item";

// Data
import { featureListData } from "@/data/feature-list-data";

// Styles
import styles from "@/styles/components/sections/feature-list.module.scss";

export default function FeatureList({ theme = "light", data = featureListData || [], htmlDescription = false }) {

    return (

        <section className={`row ${styles.featureList}`} data-theme={theme} data-name="feature-list">

            {data.length > 0 && (

                <div className={`container ${styles.featureListItems}`}>

                    {data.map((item, index) => (

                        <FeaturedListItem
                            key={index}
                            index={index}
                            theme={theme}
                            image={item.image}
                            imageWidth={item.imageWidth}
                            imageHeight={item.imageHeight}
                            imageSizing={item.imageSizing}
                            eyebrow={item.eyebrow}
                            title={item.title}
                            description={item.description}
                            htmlDescription={htmlDescription}
                            list={item.list}
                            button={item.button}
                        />

                    ))}

                </div>

            )}

        </section>

    )

}