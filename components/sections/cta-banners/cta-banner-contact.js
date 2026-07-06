// Components
import Heading from "@/components/content/text";
import ContactForm from "@/components/handlers/form";

// Styles
import styles from "@/styles/components/sections/cta-banners.module.scss";

export default function CtaBannerContact({ theme = "light" }) {

    return (

        <section className={`row ${styles.ctaBannerContact} ${theme === "primary" ? "bgPrimaryAlt" : "bgLightAlt"}`}>

            <div className="container dualCols">

                <div className={`contentCol ${theme === "primary" ? "colorLight" : "colorPrimaryAlt"}`}>

                    <Heading
                        title="Book your personalised platform demo today"
                        headingClass="sectionTitle"
                        description="Tell us a little about your operation and we will tailor the whole walkthrough to what you need to see."
                        descriptionClass={`fw400 ${theme === "primary" ? "colorLight" : "colorDark"}`}
                    />

                </div>

                <div className={`formCol ${styles.formCol}`}
                    style={{
                        backgroundColor: theme === "primary" ? "rgba(var(--lightRgb), 0.15)" : "rgba(var(--primaryRgb), 0.25)",
                        borderColor: theme === "primary" ? "rgba(var(--lightRgb), 0.25)" : "rgba(var(--primaryRgb), 0.25)"
                    }}
                >

                    <ContactForm theme={theme} />

                </div>

            </div>

        </section>

    )

}