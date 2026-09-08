// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/cta-banners.module.scss";

export default function CtaBannerOne({
    name = "ctaBanner1",
    theme = "default",
    eyebrow = null,
    eyebrowColor,
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    buttonPrimary = {
        text: "Get a demo",
        href: "/get-a-demo",
    },
    buttonSecondary = {
        text: "Talk to us",
        href: "/company/contact-us",
    }
}) {

    return (

        <section
            className={`row colorLight ${styles.ctaBanner}`}
            data-theme={theme}
            data-name={name}
        >

            <div className={`container centered ctaCentered`}>

                <div className="content">

                    {eyebrow && (<Eyebrow text={eyebrow} textColor={eyebrowColor} />)}

                    <Text headingClass={`extraLarge colorLight`} title={title} description={description} />

                    <div className="buttons">

                        {buttonPrimary && (<Button text={buttonPrimary.text} href={buttonPrimary.href} target={buttonPrimary.target} className={`${styles.ctaPrimaryButton} ${theme === "primary" ? "primary" : "light"}`} />)}

                        {buttonSecondary && (<Button text={buttonSecondary.text} href={buttonSecondary.href} target={buttonSecondary.target} className="textLink colorLight" />)}

                    </div>

                </div>

            </div>

        </section>

    )

}