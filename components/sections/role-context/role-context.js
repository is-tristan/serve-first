// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";
import RoleContextItem from "@/components/sections/role-context/components/role-context-item";

// Styles
import styles from "@/styles/components/sections/role-context.module.scss";

// Data
import { roleContextData } from "@/data/role-context-data";

export default function RoleContext({
    theme = "light",
    eyebrow = "- Role Context Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    data = roleContextData || [],
    btnPrimary = {
        text: "Lorem ipsum dolor sit amet.",
        href: "#",
        target: "_self",
    }
}) {

    return (

        <section className={`row ${styles.roleContext} ${theme === "dark" ? "sectionHasGradients" : undefined}`} data-theme={theme}>

            <div className="container noPaddingBottom">

                <div className={`content contentCol ${styles.roleContextHeading}`}>

                    {eyebrow && (<Eyebrow text={eyebrow} />)}

                    <Text headingClass={`sectionTitle ${theme === "dark" ? "lightHeadingGradient" : "darkHeadingGradient"}`} title={title} description={description} />

                </div>

            </div>

            {data.length > 0 && (

                <div className={`container noPaddingTop noPaddingBottom ${styles.roleContextItems}`}>

                    {data.map((item, index) => (

                        <RoleContextItem
                            key={index}
                            index={index}
                            icon={item.icon}
                            eyebrow={item.eyebrow}
                            title={item.title}
                            number={item.number}
                            description={item.description}
                            button={item.button}
                        />

                    ))}

                </div>

            )}

            <div className="container noPaddingTop">

                {btnPrimary && (<Button dataName={"primaryButton"} text={btnPrimary.text} href={btnPrimary.href} target={btnPrimary.target} className="primary colorPrimary" />)}

            </div>

        </section>

    )

}