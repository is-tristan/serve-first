// Next
import Image from "next/image";
import Link from "next/link";

// Components
import Eyebrow from "../decoration/eyebrow";
import Text from "../content/text";
import Button from "../handlers/buttons";

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

            <div className={'container sectionSplitTitle noPaddingBottom'}>

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

                        <div key={index} className={styles.productHighlightItem}>

                            {item.icon && (

                                <div className={styles.productHighlightItemIcon} style={{ transition: "var(--ease)", position: "relative", zIndex: 1 }}>

                                    <Image src={item.icon} alt={item.title} width={24} height={24} />

                                </div>

                            )}

                            <div className={styles.productHighlightItemContent}>

                                {item.eyebrow && (<Eyebrow type="secondary" textColor={theme === "dark" ? "colorLight" : "colorDark"} text={item.eyebrow} />)}

                                {item.title && (<h3>{item.title}</h3>)}

                                {item.link && (<Button text={item.linkText} href={item.link} hasAnimation={false} target={item.target || "_self"} className="textLink colorPrimary fw400" />)}

                            </div>

                            {item.link && <Link href={item.link} target={item.target || "_self"} className={`colLink`}></Link>}

                        </div>

                    ))}

                </div>

            )}

        </section>

    )

}