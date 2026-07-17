// Components
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/cta-banners.module.scss";

// Background Image
const backgroundImage = "/backgrounds/cta-banner-1-background.svg";

export default function CtaBannerOne({
    name = "ctaBanner1",
    theme = "light",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    buttonPrimary = {
        text: "Get a Demo",
        href: "/get-a-demo",
    },
    buttonSecondary = {
        text: "Talk to us",
        href: "/company/contact",
    }
}) {

    return (

        <section
            className={`row colorLight ${styles.ctaBanner} ${theme === "primary" ? "bgPrimaryAlt" : "bgPrimary"}`}
            data-theme="light"
            data-name={name}
        >

            <div className={`container centered ctaCentered`}>

                <div className="content">

                    <Text headingClass={`sectionTitle ${theme === "dark" ? "lightHeadingGradient" : "colorLight"}`} title={title} description={description} />

                    <div className="buttons">

                        {buttonPrimary && (<Button text={buttonPrimary.text} href={buttonPrimary.href} target={buttonPrimary.target} className={`${theme === "primary" ? "primary" : "light"}`} />)}

                        {buttonSecondary && (<Button text={buttonSecondary.text} href={buttonSecondary.href} target={buttonSecondary.target} className="textLink colorLight" />)}

                    </div>

                </div>

            </div>

        </section>

    )

}