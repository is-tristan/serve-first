import Image from "next/image"
import { PortableText } from "next-sanity"

import { urlFor } from "@/sanity/lib/image"
import { getCanonicalSiteUrl } from "@/seo/site-url"

function isExternalHref(href) {
    if (!href) {
        return false
    }

    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return false
    }

    if (href.startsWith("/") && !href.startsWith("//")) {
        return false
    }

    try {
        const siteUrl = new URL(getCanonicalSiteUrl())
        const url = new URL(href, siteUrl)

        return url.host !== siteUrl.host
    } catch {
        return false
    }
}

export const portableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset) {
                return null
            }

            return (
                <Image
                    src={urlFor(value).width(1200).fit("max").url()}
                    alt={value.alt || ""}
                    width={1200}
                    height={675}
                    sizes="(max-width: 767px) 100vw, 1200px"
                />
            )
        },
    },
    marks: {
        link: ({ children, value }) => {
            const href = value?.href || ""
            const isExternal = isExternalHref(href)

            if (!href) {
                return children
            }

            if (isExternal) {
                return (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {children}
                    </a>
                )
            }

            return (
                <a href={href}>
                    {children}
                </a>
            )
        },
    },
}

export default function RichText({ value }) {
    return (
        <PortableText value={value} components={portableTextComponents} />
    )
}
