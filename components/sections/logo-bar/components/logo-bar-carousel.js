"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Next
import Image from "next/image";

// Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

export default function LogoBarCarousel({ data = [] }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ width: "100%" }}
        >

            <Splide
                extensions={{ AutoScroll }}
                options={{
                    type: "loop",
                    drag: "free",
                    gap: "6rem",
                    arrows: false,
                    pagination: false,
                    perPage: 4,
                    perMove: 1,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    fixedWidth: "max-content",
                    fixedHeight: "4.25rem",
                    padding: {
                        left: "10%",
                        right: "10%",
                    },
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 0.4,
                    },
                    breakpoints: {
                        1279: {
                            perPage: 3,
                            fixedHeight: "3rem",
                            padding: {
                                left: "7.5%",
                                right: "7.5%",
                            },
                        },
                        767: {
                            perPage: 2,
                            fixedHeight: "3rem",
                            gap: "3rem",
                            padding: {
                                left: "5%",
                                right: "5%",
                            },
                        },
                    },
                }}
            >

                {data.map((logo, index) => (

                    <SplideSlide key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={384}
                            height={256}
                            loading="lazy"
                            style={{ objectFit: "contain", width: "100%", height: "100%" }}
                        />

                    </SplideSlide>

                ))}

            </Splide>

        </motion.div>

    )

}
