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
        crop,
        alt
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

export const pageSeoQuery = defineQuery(/* groq */ `
    *[_type == "pageSeo" && path == $path][0]{
        title,
        description,
        keywords,
        noIndex
    }
`)

export async function getPageSeo(path) {
    const { data } = await sanityFetch({
        query: pageSeoQuery,
        params: { path },
        stega: false,
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
        _updatedAt,
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
            description,
            "keywords": tags[]->title
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

const mediaCardProjection = /* groq */ `
    _id,
    title,
    excerpt,
    readTime,
    publishedAt,
    addExternalLink,
    url,
    "slug": slug.current,
    "hasContent": count(content) > 0,
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
`

export const mediaQuery = defineQuery(/* groq */ `
    *[_type == "media"] | order(publishedAt desc) {
        ${mediaCardProjection}
    }
`)

export async function getMedia() {
    const { data } = await sanityFetch({
        query: mediaQuery,
    })

    return data
}

export const mediaBySlugQuery = defineQuery(/* groq */ `
    *[_type == "media" && addExternalLink != true && slug.current == $slug][0] {
        _id,
        _updatedAt,
        title,
        excerpt,
        addExternalLink,
        url,
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
            description,
            "keywords": tags[]->title
        },
        "more": *[
            _type == "media" &&
            addExternalLink != true &&
            defined(slug.current) &&
            _id != ^._id
        ] | order(publishedAt desc) [0...3] {
            ${mediaCardProjection}
        }
    }
`)

export async function getMediaBySlug(slug) {
    const { data } = await sanityFetch({
        query: mediaBySlugQuery,
        params: { slug },
    })

    return data
}

export const testimonialsQuery = defineQuery(/* groq */ `
    *[_type == "testimonial"] | order(orderRank asc) {
        _id,
        rating,
        name,
        position,
        quote,
        companyLogo {
            asset->{
                _id,
                url,
                mimeType,
                metadata {
                    lqip,
                    dimensions
                }
            }
        }
    }
`)

export async function getTestimonials() {
    const { data } = await sanityFetch({
        query: testimonialsQuery,
    })

    return data
}

export const logosQuery = defineQuery(/* groq */ `
    *[_type == "logo"] | order(orderRank asc) {
        _id,
        alt,
        image {
            asset->{
                _id,
                url,
                mimeType,
                metadata {
                    lqip,
                    dimensions
                }
            }
        }
    }
`)

export async function getLogos() {
    const { data } = await sanityFetch({
        query: logosQuery,
    })

    return data
}
