// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";
import ContentGridItem from "@/components/sections/content-grid/components/content-grid-item";

// Styles
import styles from "@/styles/components/sections/content-grid.module.scss";

// Data
import { contentGridData } from "@/data/content-grid-data";

export default function ContentGrid({
    eyebrow = "- Content Grid Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    colCount = 4,
    containerTopClass,
    containerBottomClass,
    button = {
        text: "Lorem ipsum",
        href: "#",
        target: "_self",
    },
    imageAspectRatio,
    data = contentGridData || [],
}) {

    return (

        <section
            className={`row ${styles.contentGrid}`}
            data-name="content-grid"
        >

            <div className={`container noPaddingBottom ${containerTopClass}`}>

                <div className="content">

                    {eyebrow && (<Eyebrow text={eyebrow} hasDash={true} />)}

                    {title && (<Text headingClass={`sectionTitle sectionTitleContained colorPrimaryAlt`} title={title} />)}

                    {button && (<Button text={button.text} href={button.href} target={button.target} className="textLink colorPrimary" />)}

                </div>

            </div>

            {data.length > 0 && (

                <div className={`container noPaddingTop ${containerBottomClass} ${colCount === 4 ? "quadCols" : "flexAuto"} ${styles.contentGridItems}`}>

                    {data.map((item, index) => (

                        <ContentGridItem key={index} index={index} item={item} imageAspectRatio={imageAspectRatio} />

                    ))}

                </div>
            )
            }

        </section >

    )

}
