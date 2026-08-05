import { defineField, defineType } from "sanity"

import { ImageIcon } from "@sanity/icons/Image"

export const media = defineType({
    name: "media",
    title: "Media Post",
    type: "document",
    icon: ImageIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "url",
            title: "External URL",
            type: "url",
            description: "Link to the external article or press coverage",
            validation: (rule) =>
                rule.uri({
                    scheme: ["http", "https"],
                }),
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
    ],
    orderings: [
        {
            title: "Published Date, New",
            name: "publishedAtDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
        {
            title: "Published Date, Old",
            name: "publishedAtAsc",
            by: [{ field: "publishedAt", direction: "asc" }],
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "coverImage",
            publishedAt: "publishedAt",
            url: "url",
        },
        prepare({ title, media, publishedAt, url }) {
            const date = publishedAt
                ? new Date(publishedAt).toLocaleDateString()
                : "No date"
            const parts = [date, url].filter(Boolean)

            return {
                title,
                media,
                subtitle: parts.join(" · "),
            }
        },
    },
})
