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
    eyebrow = "- Product Highlight Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description,
    link = "#",
    linkText = "Lorem ipsum.",
    data = productHighlightData || []
}) {

    return (

        <section
            className={`row ${styles.productHighlight}`}
            data-name="product-highlight"
        >

            <div className={"container sectionSplitTitle noPaddingBottom"}>

                <div className={`content headingCol`}>

                    {eyebrow && (<Eyebrow text={eyebrow} />)}

                    <Text headingClass={`sectionTitle darkHeadingGradient`} title={title} />

                    {description && (<Text description={description} />)}

                </div>

                <div className={`contentCol`}>

                    {linkText && (<Button text={linkText} href={link} className="textLink colorPrimary" />)}

                </div>

            </div>

            {data.length > 0 && (

                <div className={`container noPaddingTop ${styles.productHighlightItems}`}>

                    {data.map((item, index) => (
                        <ProductHighlightItem
                            key={index}
                            index={index}
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
