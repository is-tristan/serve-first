// Next
import Image from "next/image"

// Components
import BlogMeta from "./blog-meta"

import { urlFor } from "@/sanity/lib/image"

// Styles
import styles from "@/styles/components/screens/resources/blog.module.scss"

const imagePlaceholder = "/decoration/no-image-placeholder.webp"

export default function BlogHeader({ blog }) {

    const featuredImage = blog.coverImage?.asset
        ? urlFor(blog.coverImage).width(1600).height(900).fit("crop").url()
        : imagePlaceholder
    const authorImage = blog.author?.image?.asset
        ? urlFor(blog.author.image).width(64).height(64).fit("crop").url()
        : imagePlaceholder
    const publishedAt = blog.publishedAt
        ? new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(blog.publishedAt))
        : null

    return (

        <section className={`row ${styles.blogHeader}`}>

            <div className="container centered noPaddingBottom noPaddingTop">

                <div className={`content ${styles.blogHeaderContent}`}>

                    {blog.category && (<span className={styles.category}>{blog.category}</span>)}

                    <h1 className={'pageTitleSmall'}>{blog.title}<span className={`colorPrimary`}>.</span></h1>

                    <BlogMeta
                        authorName={blog.author?.name}
                        authorImage={authorImage}
                        readTime={blog.readTime}
                        publishedAt={publishedAt}
                    />

                </div>

            </div>

            <div className={`container noPaddingTop ${styles.featuredImageContainer}`}>

                <Image
                    src={featuredImage}
                    alt={blog.coverImage?.alt || blog.title}
                    priority
                    width={1024}
                    height={683}
                />

            </div>

        </section>

    )

}