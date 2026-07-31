// Components
import ContentGrid from "@/components/sections/content-grid/content-grid"

// Sanity
import { getBlogs } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"

// Placeholder
const imagePlaceholder = "/decoration/no-image-placeholder.webp"

export default async function BlogGrid({ eyebrow = "From the blog", title = "Worth a read", containerTopClass = "", containerBottomClass = "" }) {

    const blogs = await getBlogs()

    const contentGridData = (blogs || []).slice(0, 3).map((blog) => ({
        category: blog.category,
        title: blog.title,
        description: blog.excerpt,
        readTime: blog.readTime,
        image: blog.coverImage?.asset
            ? urlFor(blog.coverImage).width(800).height(457).fit("crop").url()
            : imagePlaceholder,
        button: {
            text: "Read more",
            href: `/resources/blog/${blog.slug}`,
            target: "_self",
        },
    }))

    return (

        <ContentGrid
            eyebrow={eyebrow}
            title={title}
            colCount={3}
            containerTopClass={containerTopClass}
            containerBottomClass={containerBottomClass}
            button={{
                text: "View all articles",
                href: "/resources/blog",
            }}
            data={contentGridData}
            imageAspectRatio="1.75"
        />

    )

}
