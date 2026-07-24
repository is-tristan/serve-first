// Components
import Eyebrow from "@/components/decoration/eyebrow";
import IndustryCard from "@/components/sections/industry-cards/components/industry-card";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/industry-cards.module.scss";

// Data
import { industryCardsData } from "@/data/industry-cards-data";

export default function IndustryCards({
    eyebrow = "- Industry Cards Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    data = industryCardsData || [],
    industryCardsContainerClass = "noPaddingTop noPaddingBottom",
    btnPrimary = {
        text: "Lorem ipsum dolor sit amet.",
        href: "#",
        target: "_self",
    },
    btnSecondary = {
        text: "Lorem ipsum dolor sit amet.",
        href: "#",
        target: "_self",
    }
}) {

    return (

        <section
            className={`row ${styles.industryCards}`}
            data-name="industry-cards"
        >

            <div className="container noPaddingBottom">

                <div className={`content contentCol ${styles.industryCardsHeading}`}>

                    {eyebrow && (<Eyebrow text={eyebrow} hasDash={true} />)}

                    <Text headingClass={`sectionTitle colorPrimaryAlt`} title={title} description={description} descriptionClass={`fw400`} />

                </div>

            </div>

            {data.length > 0 && (

                <div className={`container ${industryCardsContainerClass}`} style={{ "gap": "1.5rem" }}>

                    {data.map((item, index) => (

                        <IndustryCard
                            key={index}
                            index={index}
                            eyebrow={item.eyebrow}
                            title={item.title}
                            image={item.image}
                            imageFit={item.imageFit}
                            number={item.number}
                            numberText={item.numberText}
                            button={item.button}
                        />

                    ))}

                </div>

            )}

            {btnPrimary || btnSecondary && (

                <div className="container noPaddingTop">

                    <div className={`buttons ${styles.industryCardsButtons}`}>

                        {btnPrimary && (<Button dataName={"primaryButton"} text={btnPrimary.text} href={btnPrimary.href} target={btnPrimary.target} className="primary" />)}

                        {btnSecondary && (<Button text={btnSecondary.text} href={btnSecondary.href} target={btnSecondary.target} className="textLink colorDark" />)}

                    </div>

                </div>

            )}

        </section>

    )

}
