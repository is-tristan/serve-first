// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";
import ProductHighlightItem from "@/components/sections/product-highlight/components/product-highlight-item";

// Styles
import styles from "@/styles/components/sections/product-highlight.module.scss";

// Data
import { productHighlightData } from "@/data/product-highlight-data";


export default function ProductHighlight({
    theme = "light",
    eyebrow = "- Lorem ipsum dolor sit amet.",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link = "#",
    data = productHighlightData || []
}) {

    return (

        <section className={`row ${styles.productHighlight} ${theme === "dark" ? "sectionHasGradients" : undefined}`} data-theme={theme}>

            <div className={"container sectionSplitTitle noPaddingBottom"}>

                <div className={`content headingCol`}>

                    {eyebrow && (<Eyebrow text={eyebrow} />)}

                    <Text headingClass={`sectionTitle ${theme === "dark" ? "lightHeadingGradient" : "darkHeadingGradient"}`} title={title} />

                </div>

                <div className={`contentCol`}>

                    {link && (<Button text="Lorem ipsum." href={link} className="textLink colorPrimary fw400" />)}

                </div>

            </div>

            {data.length > 0 && (

                <div className={`container noPaddingTop ${styles.productHighlightItems}`}>

                    {data.map((item, index) => (
                        <ProductHighlightItem
                            key={index}
                            index={index}
                            theme={theme}
                            icon={item.icon}
                            eyebrow={item.eyebrow}
                            title={item.title}
                            link={item.link}
                            linkText={item.linkText}
                            target={item.target}
                        />

                    ))}

                </div>

            )}

        </section>

    )

}