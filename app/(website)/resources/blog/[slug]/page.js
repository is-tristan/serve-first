// Next
import { notFound } from "next/navigation"

// Components
import BlogHeader from "./components/blog-header"
import BlogContent from "./components/blog-content"
import BlogMore from "./components/blog-more"
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1"
import Testimonials from "@/components/sections/testimonials/testimonials"

// Sanity
import { getBlogBySlug } from "@/sanity/lib/queries"

import JsonLd from "@/seo/json-ld"
import { getBlogPageSchema } from "@/seo/blog-schema"

// Styles
import styles from "@/styles/components/screens/resources/blog.module.scss"

export default async function BlogPage({ params }) {
    const { slug } = await params
    const blog = await getBlogBySlug(slug)

    if (!blog) {
        notFound()
    }

    return (

        <div className={styles.blogInner}>

            <JsonLd data={getBlogPageSchema(blog)} />

            <BlogHeader blog={blog} />

            <BlogContent blog={blog} />

            <CtaBannerOne
                theme="primary"
                title="See it on your sites"
                description="A personalised walkthrough with your locations, teams and data."
            />

            <BlogMore blog={blog} />

            <Testimonials theme="primary" />

        </div>

    )
}