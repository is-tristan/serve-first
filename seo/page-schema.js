"use client"

import { usePathname } from "next/navigation"

import JsonLd from "@/seo/json-ld"

import {
    getOrganizationSchema,
    getSoftwareApplicationSchema,
    getPageSchema,
} from "@/seo/schema-data"

export default function PageSchema() {

    const pathname = usePathname()

    const schemas = [getOrganizationSchema()]

    if (pathname === "/") {

        schemas.push(getSoftwareApplicationSchema())

    }

    schemas.push(...getPageSchema(pathname))

    return (

        <JsonLd data={schemas} />

    )

}
