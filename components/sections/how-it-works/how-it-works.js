// Components
import Eyebrow from "../../decoration/eyebrow";
import Text from "../../content/text";
import HowItWorksItem from "@/components/sections/how-it-works/components/how-it-works-item";

// Data
import { howItWorksData } from "@/data/how-it-works-data";

// Styles
import styles from "@/styles/components/sections/feature-list.module.scss";
import stylesAlt from "@/styles/components/sections/how-it-works.module.scss";

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
                        <HowItWorksItem
                            key={index}
                            index={index}
                            theme={theme}
                            image={item.image}
                            title={item.title}
                            number={item.number}
                            eyebrow={item.eyebrow}
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