"use client"

import { usePathname } from "next/navigation"

import JsonLd from "@/seo/json-ld"

import {
    getOrganizationSchema,
    getSoftwareApplicationSchema,
    getPageSchema,
    getFaqPageSchema,
} from "@/seo/schema-data"

export default function PageSchema() {

    const pathname = usePathname()

    const schemas = [getOrganizationSchema()]

    if (pathname === "/") {

        schemas.push(getSoftwareApplicationSchema())

    }

    schemas.push(...getPageSchema(pathname))

    schemas.push(getFaqPageSchema(pathname))

    return (

        <JsonLd data={schemas} />

    )

}
