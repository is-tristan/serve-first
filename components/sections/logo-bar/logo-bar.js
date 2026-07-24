// Components
import Eyebrow from "@/components/decoration/eyebrow";
import LogoCarousel from "@/components/sections/logo-bar/components/logo-bar-carousel";

// Data
import { logoData } from "@/data/logo-data";

// Styles
import styles from "@/styles/components/sections/logo-bar.module.scss";

export default function LogoBar({
    backgroundColor = "bgLightAlt",
    eyebrow = "Trusted by",
    data = logoData || []
}) {
    return (

        <section
            className={`row ${styles.logoBar} ${backgroundColor}`}
            data-name="logo-bar"
        >

            <div className="container centered noPaddingBottom">

                <Eyebrow text={eyebrow} textColor="colorPrimaryAlt" hasDash={true} />

            </div>

            {data.length > 0 && (

                <div className="container overflowContainer noPaddingTop">

                    <LogoCarousel data={data} />

                </div>

            )}

        </section>
    )
}