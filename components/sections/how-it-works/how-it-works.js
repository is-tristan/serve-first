// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import HowItWorksItem from "@/components/sections/how-it-works/components/how-it-works-item";

// Styles
import styles from "@/styles/components/sections/feature-list.module.scss";
import stylesAlt from "@/styles/components/sections/how-it-works.module.scss";

// Data
import { howItWorksData } from "@/data/how-it-works-data";

export default function HowItWorks({
    eyebrow = "- How It Works Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    imageSizing = "Cover",
    data = howItWorksData || []
}) {

    return (

        <section className={`row ${stylesAlt.howItWorks} ${styles.featureList}`} style={{ gap: "0" }} >

            <div className={`container centered noPaddingBottom ${stylesAlt.howItWorksHeading}`}>

                {eyebrow && (<Eyebrow text={eyebrow} />)}

                {title && (<Text headingClass={`sectionTitle sectionTitleContained`} title={title} description={description} />)}

            </div>

            {data.length > 0 && (

                <div className={`container ${styles.featureListItems}`}>

                    {data.map((item, index) => (

                        <HowItWorksItem
                            key={index}
                            index={index}
                            image={item.image}
                            imageSizing={item.imageSizing}
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
