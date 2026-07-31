import Banner from "@/components/sections/banner/banner"
import BlogContentGrid from "@/components/screens/resources/blog/blog-content-grid"
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1"

import { getAllBlogs } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { getPageMetadata } from "@/seo/seo-map-data"

const imagePlaceholder = "/decoration/no-image-placeholder.webp"

export const metadata = getPageMetadata("/resources/blog")

export default async function Blog() {

    const blogs = await getAllBlogs()

    const contentGridData = (blogs || []).map((blog) => ({
        category: blog.category,
        title: blog.title,
        description: blog.excerpt,
        readTime: blog.readTime,
        slug: blog.slug,
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

        <>

            <Banner
                eyebrow="The Serve First blog"
                title="Ideas genuinely worth acting on"
                description="Practical thinking on customer experience, operational excellence and multi-site intelligence, written for the people who run the floor, not just report on it."
                image={null}
            />

            <BlogContentGrid
                eyebrow="Latest articles"
                title="Guides<span class='colorPrimary'>,</span> playbooks and field notes today"
                data={contentGridData}
            />

            <CtaBannerOne
                theme="primary"
                title="Reading is a great start<span class='colorPrimary'>.</span> Doing is better"
                description="Book a personalised demo and see the thinking put to work across your sites, your data and your team."
            />

        </>

    )

}
