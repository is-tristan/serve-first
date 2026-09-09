// Next
import Image from "next/image"
import Link from "next/link"

// Sanity
import { urlFor } from "@/sanity/lib/image"

// Icons
import { arrowRightShort } from "@/utils/icons"

// Styles
import styles from "@/styles/components/layouts/header/header-desktop-menu.module.scss"

// Placeholder
const imagePlaceholder = "/decoration/no-image-placeholder.webp"

function normalizeAdLinkText(text) {
    if (text === "Book a Demo") {
        return "Book a demo"
    }

    return text
}

export default function HeaderAd({ ad, onClick }) {

    if (!ad) {
        return null
    }

    const imageUrl = ad.image?.asset
        ? urlFor(ad.image).url()
        : imagePlaceholder
    const linkText = normalizeAdLinkText(ad.linkText)
    const linkLabel = ad.title || linkText || "View promotion"

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

            {(ad.title || ad.description || linkText) && (

                <div className={`${styles.headerAdContent}`}>

                    {ad.title && (<div className={styles.headerAdTitle}>{ad.title}</div>)}

                    {ad.description && (<p>{ad.description}</p>)}

                    {linkText && (

                        <span className={`btn textLink colorLight`}>

                            <span>{linkText}</span>

                            <div className="icon" dangerouslySetInnerHTML={{ __html: arrowRightShort }} />

                        </span>

                    )}

                </div>

            )}

        </>
    )

    if (ad.link) {
        return (

            <Link
                href={ad.link}
                className={styles.headerAd}
                aria-label={linkLabel}
                onClick={onClick}
            >

                {content}

            </Link>

        )
    }

    return (

        <div className={styles.headerAd}>

            {content}

        </div>

    )

}
