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
    containerClass = "noPaddingTop",
    eyebrow = "- How It Works Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    titleClass = "sectionTitleContained",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    data = howItWorksData || []
}) {

    return (

        <section className={`row ${stylesAlt.howItWorks} ${styles.featureList}`} style={{ gap: "0" }} data-name="how-it-works">

            <div className={`container centered noPaddingBottom ${stylesAlt.howItWorksHeading} ${containerClass}`}>

                {eyebrow && (<Eyebrow text={eyebrow} hasDash={true} />)}

                {title && (<Text headingClass={`sectionTitle sectionTitleContained ${titleClass}`} title={title} descriptionClass="fw400" description={description} />)}

            </div>

            {data.length > 0 && (

                <div className={`container ${styles.featureListItems} ${stylesAlt.howItWorksItems}`}>

                    {data.map((item, index) => (

                        <HowItWorksItem
                            key={index}
                            index={index}
                            image={item.image}
                            imageSizing={item.imageSizing}
                            imageWidth={item.imageWidth}
                            imageHeight={item.imageHeight}
                            title={item.title}
                            number={item.number}
                            eyebrow={item.eyebrow}
                            description={item.description}
                            list={item.list}
                            button={item.button}
                            eyebrowHasDash={item.eyebrowHasDash}
                        />

                    ))}

                </div>

            )}

        </section>

    )

}
