import Eyebrow from "@/components/decoration/eyebrow"
import LogoCarousel from "@/components/sections/logo-bar/components/logo-bar-carousel"

import styles from "@/styles/components/sections/logo-bar.module.scss"

import { getLogos } from "@/sanity/lib/queries"

export default async function LogoBar({
    eyebrow = "Trusted by"
}) {

    const logos = await getLogos()

    const logoData = (logos || [])
        .filter((logo) => logo.image?.asset?.url)
        .map((logo) => ({
            src: logo.image.asset.url,
            alt: logo.alt,
        }))

    return (

        <section
            className={`row ${styles.logoBar} bgPrimaryAlt colorLight`}
            data-name="logo-bar"
        >

            <div className="container centered noPaddingBottom mobileCentered">

                <Eyebrow text={eyebrow} textColor="colorLightAlt" hasDash={true} />

            </div>

            {logoData.length > 0 && (

                <div className="container overflowContainer noPaddingTop">

                    <LogoCarousel data={logoData} />

                </div>

            )}

        </section>
    )
}
