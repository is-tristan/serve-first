"use client";

// Imports
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Components
import CustomerStoryItem from "@/components/sections/customer-story/components/customer-story-item";

// Styles
import styles from "@/styles/components/sections/customer-story.module.scss";

// Icons
import { chevronLeft, chevronRight } from "@/utils/icons";

export default function CustomerStoryCarousel({ theme = "light", data = [] }) {

    const splideRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div className={styles.customerStoryCarousel} ref={ref} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} initial={{ opacity: 0, y: 16 }} transition={{ duration: 0.5, delay: 0.25 }}>

            <div className={styles.customerStoryCarouselInner}>

                <Splide
                    ref={splideRef}
                    options={{
                        type: "loop",
                        perPage: 1,
                        perMove: 1,
                        arrows: false,
                        pagination: false,
                        gap: "1rem",
                        autoplay: false,
                    }}
                    onMoved={(splide, newIndex) => setCurrentSlide(newIndex)}
                >

                    {data.map((item, index) => (

                        <SplideSlide key={index} className={styles.customerStorySlide}>

                            <CustomerStoryItem index={index} item={item} />

                        </SplideSlide>

                    ))}

                </Splide>

            </div>

            <div className={`carouselNavigation ${theme === "dark" ? "navDark" : undefined}`}>

                <button
                    className="arrow arrowLeft"
                    onClick={() => splideRef.current.go("<")}
                    aria-label="Previous slide"
                    dangerouslySetInnerHTML={{ __html: chevronLeft }}
                />

                <div className="pagination">

                    {data.map((_, index) => (

                        <button
                            key={index}
                            className={`paginationDot${currentSlide === index ? " active" : ""}`}
                            onClick={() => splideRef.current.go(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />

                    ))}

                </div>

                <button
                    className="arrow arrowRight"
                    onClick={() => splideRef.current.go(">")}
                    aria-label="Next slide"
                    dangerouslySetInnerHTML={{ __html: chevronRight }}
                />

            </div>

        </motion.div>

    )

}
