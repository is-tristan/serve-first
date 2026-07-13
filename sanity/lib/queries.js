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
        }
    }
`)

export async function getMenuAds() {
    const { data } = await sanityFetch({
        query: menuAdsQuery,
    })

    return data
}
