// Components
import FeaturedListItem from "@/components/sections/feature-list/components/featured-list-item";

// Data
import { featureListData } from "@/data/feature-list-data";

// Styles
import styles from "@/styles/components/sections/feature-list.module.scss";

export default function FeatureList({ theme = "light", eyebrow = "- Feature List Component", data = featureListData || [] }) {

    return (

        <section className={`row ${styles.featureList} ${theme === "dark" ? "sectionHasGradients" : undefined}`} data-theme={theme}>

            {data.length > 0 && (

                <div className={`container ${styles.featureListItems}`}>

                    {data.map((item, index) => (
                        <FeaturedListItem
                            key={index}
                            index={index}
                            theme={theme}
                            image={item.image}
                            eyebrow={item.eyebrow}
                            title={item.title}
                            description={item.description}
                            list={item.list}
                            button={item.button}
                        />

                    ))}

                </div>

            )}

        </section>

    )

}