// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";
import FaqItem from "@/components/sections/faq/components/faq-item";

// Styles
import styles from "@/styles/components/sections/faq.module.scss";

// Data
import { faqData } from "@/data/faq-data";

export default function Faq({
    eyebrow = "- FAQ Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    data = faqData || [],
    button = {
        text: "Lorem ipsum.",
        href: "#",
        target: "_self",
    }
}) {

    return (

        <section className={`row ${styles.faq}`}>

            <div className="container sectionSplitTitle noPaddingBottom">

                <div className="content headingCol">

                    {eyebrow && (<Eyebrow text={eyebrow} />)}

                    {title && (<Text headingClass={`sectionTitle darkHeadingGradient`} title={title} />)}

                </div>

                <div className="contentCol">

                    {button && (<Button text={button.text} href={button.href} target={button.target} className="textLink colorPrimary" />)}

                </div>

            </div>

            {data.length > 0 && (

                <div className="container noPaddingTop">

                    <div className={styles.faqItems}>

                        {data.map((item, index) => (

                            <FaqItem key={index} index={index} item={item} />

                        ))}

                    </div>

                </div>

            )}

        </section>

    )

}
