import TestimonialsCarousel from "@/components/sections/testimonials/components/testimonial-carousel"
import Button from "@/components/handlers/buttons"

import styles from "@/styles/components/sections/testimonials.module.scss"

import { getTestimonials } from "@/sanity/lib/queries"

export default async function Testimonials({
    theme = "light",
    btnPrimary = null
}) {

    const testimonials = await getTestimonials()

    const testimonialData = (testimonials || []).map((item) => ({
        rating: item.rating,
        name: item.name,
        position: item.position,
        quote: item.quote,
        companyLogo: item.companyLogo?.asset?.url || null,
    }))

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
