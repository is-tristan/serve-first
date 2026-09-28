import { defineArrayMember, defineField, defineType } from "sanity"

import { ImageIcon } from "@sanity/icons/Image"

import { richTextMembers } from "./shared/richText"
import { postSeoField } from "./shared/postSeo"

const hidesArticleFields = ({ document }) => document?.addExternalLink !== false

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
            name: "addExternalLink",
            title: "Add external link",
            type: "boolean",
            description: "Turn this off to write the article in Sanity and give it its own page",
            initialValue: true,
        }),
        defineField({
            name: "url",
            title: "External URL",
            type: "url",
            description: "Link to the external article or press coverage",
            hidden: ({ document }) => document?.addExternalLink === false,
            validation: (rule) => rule.uri({
                scheme: ["http", "https"],
            }).custom((value, context) => {
                if (context.document?.addExternalLink === false) {
                    return true
                }

                if (!value) {
                    return "Required"
                }

                return true
            }),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            hidden: hidesArticleFields,
            validation: (rule) => rule.custom((value, context) => {
                if (context.document?.addExternalLink !== false) {
                    return true
                }

                if (!value?.current) {
                    return "Required"
                }

                return true
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
            validation: (rule) => rule.max(250).warning("Keep it under 250 characters"),
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: richTextMembers,
            hidden: hidesArticleFields,
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "readTime",
            title: "Read Time",
            type: "number",
            description: "Estimated reading time in minutes",
            validation: (rule) => rule.custom((value, context) => {
                if (context.document?.addExternalLink !== false) {
                    return true
                }

                if (typeof value !== "number" || value < 1 || !Number.isInteger(value)) {
                    return "Enter a whole number of minutes"
                }

                return true
            }),
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [
                defineArrayMember({
                    type: "reference",
                    to: [{ type: "category" }],
                }),
            ],
        }),
        defineField({
            name: "authors",
            title: "Authors",
            type: "array",
            of: [
                defineArrayMember({
                    type: "reference",
                    to: [{ type: "author" }],
                }),
            ],
        }),
        postSeoField,
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
            author0: "authors.0.name",
            category0: "categories.0.title",
            url: "url",
            addExternalLink: "addExternalLink",
        },
        prepare({ title, media, publishedAt, author0, category0, url, addExternalLink }) {
            const date = publishedAt
                ? new Date(publishedAt).toLocaleDateString()
                : "No date"
            const linkLabel = addExternalLink !== false ? url : null
            const parts = [date, category0, author0, linkLabel].filter(Boolean)

            return {
                title,
                media,
                subtitle: parts.join(" · "),
            }
        },
    },
})
