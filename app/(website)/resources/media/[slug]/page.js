import { notFound } from "next/navigation"

import BlogHeader from "@/app/(website)/resources/blog/[slug]/components/blog-header"
import BlogContent from "@/app/(website)/resources/blog/[slug]/components/blog-content"
import BlogMore from "@/app/(website)/resources/blog/[slug]/components/blog-more"
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1"
import Testimonials from "@/components/sections/testimonials/testimonials"

import { getMediaBySlug } from "@/sanity/lib/queries"

import JsonLd from "@/seo/json-ld"
import { getBlogPageSchema } from "@/seo/blog-schema"
import { getCanonicalSiteUrl } from "@/seo/site-url"

import styles from "@/styles/components/screens/resources/blog.module.scss"

export async function generateMetadata({ params }) {
    const { slug } = await params
    const media = await getMediaBySlug(slug)

    if (!media || !Array.isArray(media.content) || media.content.length === 0) {
        return {}
    }

    const title = media.seo?.title || media.title
    const description = media.seo?.description || media.excerpt
    const keywords = (media.seo?.keywords || []).filter(Boolean)
    const canonicalUrl = `${getCanonicalSiteUrl()}/resources/media/${slug}`

    const metadata = {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
        },
        twitter: {
            title,
            description,
        },
    }

    if (keywords.length) {
        metadata.keywords = keywords
    }

    return metadata
}

export default async function MediaPage({ params }) {
    const { slug } = await params
    const media = await getMediaBySlug(slug)

    if (!media || !Array.isArray(media.content) || media.content.length === 0) {
        notFound()
    }

    return (
        <div className={styles.blogInner}>

            <JsonLd data={getBlogPageSchema(media, {
                basePath: "/resources/media",
                sectionName: "News",
                sectionPath: "/resources/media",
                schemaType: "NewsArticle",
            })} />

            <BlogHeader blog={media} />

            <BlogContent blog={media} />

            <CtaBannerOne
                theme="primary"
                title="See it on your sites"
                description="A personalised walkthrough with your locations, teams and data."
            />

            <BlogMore
                blog={media}
                basePath="/resources/media"
                eyebrow="More news"
                title="Keep reading"
                allHref="/resources/media"
                allText="View all news"
            />

            <Testimonials theme="primary" />

        </div>
    )
}
