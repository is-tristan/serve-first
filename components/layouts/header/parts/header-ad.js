// Next
import Image from "next/image"
import Link from "next/link"

// Components
import Button from "@/components/handlers/buttons"

// Sanity
import { urlFor } from "@/sanity/lib/image"

// Styles
import styles from "@/styles/components/layouts/header/header-desktop-menu.module.scss"

// Placeholder
const imagePlaceholder = "/decoration/no-image-placeholder.webp"

export default function HeaderAd({ ad }) {

    if (!ad) {
        return null
    }

    const imageUrl = ad.image?.asset
        ? urlFor(ad.image).width(384).height(384).fit("crop").url()
        : imagePlaceholder

    if (!imageUrl && !ad.title && !ad.description && !ad.link) {
        return null
    }

    const content = (

        <>

            {imageUrl && (

                <div className={styles.headerAdImage}>

                    <Image
                        src={imageUrl}
                        alt={ad.title || "Header Ad"}
                        fill
                        loading="lazy"
                        quality={90}
                        sizes="240px"
                    />

                </div>
            )}

            {(ad.title || ad.description || ad.linkText) && (

                <div className={`${styles.headerAdContent}`}>

                    {ad.title && (<h3>{ad.title}</h3>)}

                    {ad.description && (<p>{ad.description}</p>)}

                    {ad.linkText && (<Button hasAnimation={false} href={ad.link} text={ad.linkText} className={`btn textLink colorLight`}></Button>)}

                </div>

            )}

            {ad.link && (

                <Link
                    href={ad.link}
                    className={`colLink ${styles.headerAdLink}`}
                    aria-label={ad.linkText || ad.title || "View promotion"}
                ></Link>

            )}

        </>
    )

    return (

        <div className={styles.headerAd}>

            {content}

        </div>

    )

}
