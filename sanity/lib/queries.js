import { defineQuery } from "next-sanity"

import { sanityFetch } from "@/sanity/lib/live"

const menuAdProjection = /* groq */ `
    image {
        asset->{
            _id,
            url,
            metadata {
                lqip,
                dimensions
            }
        },
        hotspot,
        crop
    },
    title,
    description,
    link,
    linkText
`

export const menuAdsQuery = defineQuery(/* groq */ `
    *[_type == "menuAds"][0]{
        howItWorks {
            ${menuAdProjection}
        },
        solutions {
            ${menuAdProjection}
        },
        products {
            ${menuAdProjection}
        },
        company {
            ${menuAdProjection}
        },
        resources {
            ${menuAdProjection}
        }
    }
`)

export async function getMenuAds() {
    const { data } = await sanityFetch({
        query: menuAdsQuery,
    })

    return data
}

export const blogsQuery = defineQuery(/* groq */ `
    *[_type == "blog" && defined(slug.current)] | order(publishedAt desc) [0...3] {
        _id,
        title,
        excerpt,
        readTime,
        "slug": slug.current,
        "category": categories[0]->title,
        coverImage {
            asset->{
                _id,
                url,
                metadata {
                    lqip,
                    dimensions
                }
            },
            hotspot,
            crop,
            alt
        }
    }
`)

export async function getBlogs() {
    const { data } = await sanityFetch({
        query: blogsQuery,
    })

    return data
}

export const allBlogsQuery = defineQuery(/* groq */ `
    *[_type == "blog" && defined(slug.current)] | order(publishedAt desc) {
        _id,
        title,
        excerpt,
        readTime,
        "slug": slug.current,
        "category": categories[0]->title,
        coverImage {
            asset->{
                _id,
                url,
                metadata {
                    lqip,
                    dimensions
                }
            },
            hotspot,
            crop,
            alt
        }
    }
`)

export async function getAllBlogs() {
    const { data } = await sanityFetch({
        query: allBlogsQuery,
    })

    return data
}

export const blogBySlugQuery = defineQuery(/* groq */ `
    *[_type == "blog" && slug.current == $slug][0] {
        _id,
        title,
        excerpt,
        content[] {
            ...,
            _type == "image" => {
                asset->{
                    _id,
                    url,
                    metadata {
                        lqip,
                        dimensions
                    }
                },
                hotspot,
                crop,
                alt
            }
        },
        publishedAt,
        readTime,
        "slug": slug.current,
        "category": categories[0]->title,
        "author": authors[0]->{
            name,
            image {
                asset->{
                    _id,
                    url,
                    metadata {
                        lqip,
                        dimensions
                    }
                },
                hotspot,
                crop
            }
        },
        coverImage {
            asset->{
                _id,
                url,
                metadata {
                    lqip,
                    dimensions
                }
            },
            hotspot,
            crop,
            alt
        },
        seo {
            title,
            description
        },
        "more": *[
            _type == "blog" &&
            _id != ^._id &&
            defined(slug.current)
        ] | order(publishedAt desc) [0...3] {
            _id,
            title,
            excerpt,
            readTime,
            "slug": slug.current,
            "category": categories[0]->title,
            coverImage {
                asset->{
                    _id,
                    url,
                    metadata {
                        lqip,
                        dimensions
                    }
                },
                hotspot,
                crop,
                alt
            }
        }
    }
`)

export async function getBlogBySlug(slug) {
    const { data } = await sanityFetch({
        query: blogBySlugQuery,
        params: { slug },
    })

    return data
}

export const mediaQuery = defineQuery(/* groq */ `
    *[_type == "media" && defined(slug.current)] | order(publishedAt desc) [0...3] {
        _id,
        title,
        excerpt,
        readTime,
        "slug": slug.current,
        "category": categories[0]->title,
        coverImage {
            asset->{
                _id,
                url,
                metadata {
                    lqip,
                    dimensions
                }
            },
            hotspot,
            crop,
            alt
        }
    }
`)

export async function getMedia() {
    const { data } = await sanityFetch({
        query: mediaQuery,
    })

    return data
}
