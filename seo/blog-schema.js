import { urlFor } from "@/sanity/lib/image"

import { getBlogPostBreadcrumbSchema } from "@/seo/schema-data"
import { getCanonicalSiteUrl } from "@/seo/site-url"

export function getBlogPostingSchema(blog, basePath = "/resources/blog", schemaType = "BlogPosting") {

    const siteUrl = getCanonicalSiteUrl()
    const url = `${siteUrl}${basePath}/${blog.slug}`

    const schema = {
        "@context": "https://schema.org",
        "@type": schemaType,
        headline: blog.seo?.title || blog.title,
        description: blog.seo?.description || blog.excerpt,
        url,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        datePublished: blog.publishedAt,
        dateModified: blog._updatedAt || blog.publishedAt,
        publisher: {
            "@type": "Organization",
            name: "Serve First",
            logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/serve-first-logo.svg`,
            },
        },
    }

    if (blog.author?.name) {

        schema.author = {
            "@type": "Person",
            name: blog.author.name,
        }

        if (blog.author.image?.asset) {

            schema.author.image = urlFor(blog.author.image).width(400).height(400).fit("crop").url()

        }

    } else {

        schema.author = {
            "@type": "Organization",
            name: "Serve First",
        }

    }

    if (blog.coverImage?.asset) {

        schema.image = urlFor(blog.coverImage).width(1200).height(675).fit("crop").url()

    }

    return schema

}

export function getBlogPageSchema(blog, options = {}) {

    const basePath = options.basePath || "/resources/blog"
    const sectionName = options.sectionName || "Blog"
    const sectionPath = options.sectionPath || basePath
    const schemaType = options.schemaType || "BlogPosting"

    return [
        getBlogPostingSchema(blog, basePath, schemaType),
        getBlogPostBreadcrumbSchema({
            title: blog.title,
            slug: blog.slug,
            sectionName,
            sectionPath,
            basePath,
        }),
    ]

}
