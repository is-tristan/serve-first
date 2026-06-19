"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Next
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/react-splide/css";

// Components
import styles from "@/styles/components/sections/logo-bar.module.scss";

export default function LogoBarCarousel({ data = [] }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div className={styles.logoCarousel} ref={ref} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} initial={{ opacity: 0, y: 16 }} transition={{ duration: 0.5, delay: 0.25 }}>

            <Splide
                extensions={{ AutoScroll }}
                options={{
                    type: "loop",
                    drag: "free",
                    gap: "3rem",
                    arrows: false,
                    pagination: false,
                    perPage: 3,
                    perMove: 1,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    padding: {
                        left: "10%",
                        right: "10%",
                    },
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 0.5,
                    },
                    breakpoints: {
                        1023: {
                            perPage: 3,
                            gap: "2rem",
                            padding: {
                                left: "7.5%",
                                right: "7.5%",
                            },
                        },
                        767: {
                            perPage: 1,
                            gap: "1.5rem",
                            padding: {
                                left: "5%",
                                right: "5%",
                            },
                        },
                    },
                }}
            >

                {data.map((logo, index) => (

                    <SplideSlide key={index} className={styles.logoCarouselItem}>

                        <Image src={logo.src} alt={logo.alt} fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" style={{ "objectFit": "cover" }} />

                    </SplideSlide>

                ))}

            </Splide>

        </motion.div >


    )

}