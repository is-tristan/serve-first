// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";
import ModuleStatItem from "@/components/sections/module-stats/components/module-stat-item";

// Styles
import styles from "@/styles/components/sections/module-stats.module.scss";

// Data
import { moduleStatsData } from "@/data/module-stats-data";

export default function ModuleStats({
    theme = "light",
    eyebrow = "- Module Stats Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    btnPrimary = {
        text: "Lorem ipsum dolor sit amet.",
        href: "#",
        target: "_self",
    },
    data = moduleStatsData || []
}) {
    return (

        <section className={`row ${styles.moduleStats} ${theme === "dark" ? "sectionHasGradients" : undefined}`} data-theme={theme}>

            <div className="container centered noPaddingBottom">

                {eyebrow && (<Eyebrow text={eyebrow} />)}

                <Text headingClass={`sectionTitle ${theme === "dark" ? "lightHeadingGradient" : "darkHeadingGradient"}`} title={title} description={description} />

                {btnPrimary && (<Button text={btnPrimary.text} href={btnPrimary.href} target={btnPrimary.target} className="primary colorPrimary" />)}

            </div>

            {data.length > 0 && (

                <div className={`container quadCols noPaddingTop ${styles.moduleStatsItems}`}>

                    {data.map((item, index) => (

                        <ModuleStatItem
                            key={index}
                            index={index}
                            numberPrefix={item.numberPrefix}
                            startNumber={item.startNumber}
                            endNumber={item.endNumber}
                            numberSuffix={item.numberSuffix}
                            description={item.description}
                        />

                    ))}

                </div>

            )}

        </section>
    )

}