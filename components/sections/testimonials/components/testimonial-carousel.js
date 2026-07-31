"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Components
import TestimonialItem from "@/components/sections/testimonials/components/testimonial-item";

// Styles
import styles from "@/styles/components/sections/testimonials.module.scss";

const setAccessibleRoles = (splide) => {
    splide.Components.Elements.list.setAttribute("role", "list");

    splide.Components.Slides.get().forEach(({ slide }) => {
        slide.setAttribute("role", "listitem");
    });
};

export default function TestimonialCarousel({ theme = "light", data = [] }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div className={styles.testimonialCarousel} ref={ref} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} initial={{ opacity: 0, y: 16 }} transition={{ duration: 0.5, delay: 0.25 }}>

            <Splide
                options={{ perPage: 1, perMove: 1, arrows: false, pagination: false, gap: "1rem", autoplay: false }}
                onMounted={setAccessibleRoles}
            >

                {data.map((item, index) => (

                    <SplideSlide key={index} className={styles.testimonialSlide}>

                        <TestimonialItem theme={theme} {...item} />

                    </SplideSlide>

                ))}

            </Splide>

        </motion.div>

    );
}