// Components
import Heading from "@/components/content/text";
import FormSmall from "@/components/handlers/forms/form-small";
import FormFull from "@/components/handlers/forms/form-full";

// Styles
import styles from "@/styles/components/sections/cta-banners.module.scss";

export default function CtaBannerContact({ title = "Book your personalised platform demo today", description = "Tell us a little about your operation and we will tailor the whole walkthrough to what you need to see.", theme = "light", hasDemoLink = true, formBtnText = "Send Message", fullForm = false }) {

    return (

        <section
            id="book-demo"
            className={`row ${styles.ctaBannerContact} ${theme === "primary" ? "bgPrimaryAlt" : "bgLightAlt"}`}
            data-name="ctaBannerContact"
        >

            <div className="container dualCols">

                <div className={`contentCol ${theme === "primary" ? "colorLight" : "colorPrimaryAlt"}`}>

                    <Heading
                        title={title}
                        headingClass={`sectionTitle ${theme === "primary" ? "colorLight" : "colorPrimaryAlt"}`}
                        description={description}
                        descriptionClass={`fw400 ${theme === "primary" ? "colorLight" : "colorDark"}`}
                    />

                </div>

                <div className={`formCol ${styles.formCol}`}
                    style={{
                        backgroundColor: theme === "primary" ? "rgba(var(--lightRgb), 0.15)" : "rgba(var(--primaryRgb), 0.25)",
                        borderColor: theme === "primary" ? "rgba(var(--lightRgb), 0.25)" : "rgba(var(--primaryRgb), 0.25)"
                    }}
                >

                    {fullForm ? (

                        <FormFull theme={theme} hasDemoLink={hasDemoLink} formBtnText={formBtnText} />

                    ) : (

                        <FormSmall theme={theme} hasDemoLink={hasDemoLink} formBtnText={formBtnText} />

                    )}

                </div>

            </div>

        </section>

    )

}