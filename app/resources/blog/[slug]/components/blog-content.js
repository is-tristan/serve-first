import Image from "next/image"
import { PortableText } from "next-sanity"

import { urlFor } from "@/sanity/lib/image"

// Styles
import styles from "@/styles/components/screens/resources/blog.module.scss"

const portableTextComponents = {
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
}

export default function BlogContent({ blog }) {

    if (!Array.isArray(blog.content) || blog.content.length === 0) {
        return null
    }

    return (

        <section id="blog-content" className={`row ${styles.blogContent}`}>

            <div className={`container ${styles.blogContentContainer}`}>

                <PortableText value={blog.content} components={portableTextComponents} />

            </div>

        </section>

    )

}