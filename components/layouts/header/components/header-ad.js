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

export default function HeaderAd({ ad, onClick }) {

    if (!ad) {
        return null
    }

    const imageUrl = ad.image?.asset
        ? urlFor(ad.image).url()
        : imagePlaceholder
    const linkLabel = ad.title || ad.linkText || "View promotion"

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
                        width={512}
                        height={256}
                        loading="lazy"
                        quality={90}
                        sizes="512px"
                        style={{ objectFit: "contain" }}
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
                    aria-label={linkLabel}
                    onClick={onClick}
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
