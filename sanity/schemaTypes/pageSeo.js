import { defineField, defineType } from "sanity"

import { SearchIcon } from "@sanity/icons/Search"

import { apiVersion } from "../env"

export const pageSeo = defineType({
    name: "pageSeo",
    title: "Page SEO",
    type: "document",
    icon: SearchIcon,
    fields: [
        defineField({
            name: "path",
            title: "Path",
            type: "string",
            description: "Site path, for example / or /eva",
            validation: (rule) => rule.required().custom(async (value, context) => {
                if (!value) {
                    return true
                }

                if (!value.startsWith("/")) {
                    return "Path must start with /"
                }

                const client = context.getClient({ apiVersion })
                const publishedId = context.document?._id?.replace(/^drafts\./, "")
                const existing = await client.fetch(
                    `count(*[_type == "pageSeo" && path == $path && !(_id in [$id, $draftId])])`,
                    {
                        path: value,
                        id: publishedId,
                        draftId: `drafts.${publishedId}`,
                    }
                )

                if (existing > 0) {
                    return "A page with this path already exists"
                }

                return true
            }),
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required().max(70).warning("Keep under 70 characters"),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            validation: (rule) => rule.max(160).warning("Keep under 160 characters"),
        }),
        defineField({
            name: "keywords",
            title: "Keywords",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        }),
        defineField({
            name: "noIndex",
            title: "Hide from search engines",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "path",
            subtitle: "title",
        },
    },
})
