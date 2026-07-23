// Components
import TestimonialsCarousel from "@/components/sections/testimonials/components/testimonial-carousel";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/testimonials.module.scss";

// Data
import { testimonialData } from "@/data/testimonial-data";

export default function Testimonials({
    theme = "light",
    btnPrimary = null
}) {

    return (

        <section
            className={`row ${styles.testimonials} ${theme === "primary" ? "bgPrimaryAlt" : "bgLightAlt"}`}
            data-theme={theme}
            data-name="testimonials"
        >

            <div className={`container ${btnPrimary ? "noPaddingBottom" : ""}`}>

                {testimonialData.length > 0 && (

                    <TestimonialsCarousel theme={theme} data={testimonialData} />

                )}

            </div>

            {btnPrimary && (

                <div className={`container centered noPaddingTop`}>

                    <Button text={btnPrimary.text} href={btnPrimary.href} target={btnPrimary.target} className={`primary ${theme === "light" ? "colorPrimary" : undefined}`} />

                </div>

            )}

        </section>

    )

}