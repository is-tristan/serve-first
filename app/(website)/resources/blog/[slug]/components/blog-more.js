import ContentGrid from "@/components/sections/content-grid/content-grid"

import { urlFor } from "@/sanity/lib/image"

const imagePlaceholder = "/decoration/no-image-placeholder.webp"

export default function BlogMore({
    blog,
    basePath = "/resources/blog",
    eyebrow = "More from the blog",
    title = "Keep reading",
    allHref = "/resources/blog",
    allText = "View all articles",
}) {

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
            href: `${basePath}/${item.slug}`,
            target: "_self",
        },
    }))

    if (contentGridData.length === 0) {
        return null
    }

    return (

        <ContentGrid
            eyebrow={eyebrow}
            title={title}
            colCount={3}
            button={{
                text: allText,
                href: allHref,
                target: "_self",
            }}
            data={contentGridData}
            imageAspectRatio="1.75"
        />

    )
}