import ContentGrid from "@/components/sections/content-grid/content-grid"

import { urlFor } from "@/sanity/lib/image"

const imagePlaceholder = "/decoration/no-image-placeholder.webp"

export default function BlogMore({ blog }) {

    const contentGridData = (blog.more || []).map((item) => ({
        category: item.category,
        title: item.title,
        description: item.excerpt,
        readTime: item.readTime,
        image: item.coverImage?.asset
            ? urlFor(item.coverImage).width(800).height(457).fit("crop").url()
            : imagePlaceholder,
        button: {
            text: "Read more",
            href: `/resources/blog/${item.slug}`,
            target: "_self",
        },
    }))

    if (contentGridData.length === 0) {
        return null
    }

    return (

        <ContentGrid
            eyebrow="More from the blog"
            title="Keep reading"
            colCount={3}
            button={{
                text: "View all articles",
                href: "/resources/blog",
                target: "_self",
            }}
            data={contentGridData}
            imageAspectRatio="1.75"
        />

    )
}