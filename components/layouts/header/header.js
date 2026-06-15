"use client";

// React
import { useState, useEffect } from "react";

// Styles
import styles from "@/styles/components/layouts/header.module.scss";

// Components
import HeaderContainer from "@/components/layouts/header/parts/header-container";

export default function Header({ type = "default" }) {
    const [scrolled, setScrolled] = useState("false");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100 ? "true" : "false");
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <header id="header" className={styles.header} data-type={type} data-scrolled={scrolled}>

            <HeaderContainer />

        </header>

    );
    
}