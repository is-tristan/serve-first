// Components
import Banner from "@/components/sections/banner/banner"
import ContentGrid from "@/components/sections/content-grid/content-grid"
import CtaBannerOne from "@/components/sections/cta-banners/cta-banner-1";

// Sanity
import { getMedia } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { getPageMetadata } from "@/seo/seo-map-data"

// Placeholder
const imagePlaceholder = "/decoration/no-image-placeholder.webp"

export async function generateMetadata() {
    return getPageMetadata("/resources/media")
}

export default async function Media() {

    const media = await getMedia()

    const contentGridData = (media || []).map((item) => {
        const hasArticle = item.addExternalLink === false && item.hasContent && item.slug
        const hasExternalLink = item.addExternalLink !== false && item.url

        return {
            title: item.title,
            description: item.excerpt,
            readTime: hasArticle ? item.readTime : null,
            image: item.coverImage?.asset
                ? urlFor(item.coverImage).width(768).height(432).fit("crop").url()
                : imagePlaceholder,
            button: hasExternalLink
                ? {
                    text: "Read more",
                    href: item.url,
                    target: "_blank",
                }
                : hasArticle
                    ? {
                        text: "Read more",
                        href: `/resources/media/${item.slug}`,
                        target: "_self",
                    }
                    : null,
        }
    })

    return (

        <>

            <Banner
                eyebrow="News and announcements"
                title="What we are building, and why"
                description="Company news, product releases and the milestones behind Serve First. The story of how multi-site operators are moving from reports to real intelligence."
                image={null}
            />

            <ContentGrid
                eyebrow="Latest updates"
                title="Press<span class='colorPrimary'>,</span> releases and recognition in the media so far"
                button={null}
                data={contentGridData}
                imageAspectRatio="16/9"
                colCount={3}
                colCountForce={true}
            />

            <CtaBannerOne
                theme="primary"
                title="See what the headlines are really about"
                description="Book a personalised demo and see the platform behind the news, working with your estate and your data."
            />

        </>

    )

}
