// Components
import Eyebrow from "@/components/decoration/eyebrow";
import LogoCarousel from "@/components/sections/logo-bar/components/logo-bar-carousel";

// Data
import { logoData } from "@/data/logo-data";

// Styles
import styles from "@/styles/components/sections/logo-bar.module.scss";

export default function LogoBar({
    theme = "light",
    eyebrow = "- Logo Bar Component",
    data = logoData || []
}) {
    return (

        <section className={`row ${styles.logoBar} ${theme === "dark" ? "sectionHasGradients" : undefined}`} data-theme={theme}>

            <div className="container centered noPaddingBottom">

                <Eyebrow text={eyebrow} />

            </div>

            {data.length > 0 && (

                <div className="container overflowContainer noPaddingTop">

                    <LogoCarousel data={data} />

                </div>

            )}

        </section>
    )
}