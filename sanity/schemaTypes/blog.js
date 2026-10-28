import { defineArrayMember, defineField, defineType } from "sanity"

import { DocumentTextIcon } from "@sanity/icons/DocumentText"

import { richTextMembers } from "./shared/richText"
import { postSeoField } from "./shared/postSeo"

import { relatedPageOptions } from "../../data/related-posts-data"

export const blog = defineType({
    name: "blog",
    title: "Blog Post",
    type: "document",
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
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
            validation: (rule) => rule.max(160).warning("Keep it under 160 characters"),
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: richTextMembers,
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
            validation: (rule) => rule.required().min(1).integer(),
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
            name: "relatedPages",
            title: "Show On Pages",
            type: "array",
            description: "Pin this post to the \"Worth a read\" section on these pages. Posts are also matched by their tags and categories.",
            of: [defineArrayMember({ type: "string" })],
            options: {
                list: relatedPageOptions,
            },
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
        },
        prepare({ title, media, publishedAt, author0, category0 }) {
            const date = publishedAt
                ? new Date(publishedAt).toLocaleDateString()
                : "No date"
            const parts = [date, category0, author0].filter(Boolean)

            return {
                title,
                media,
                subtitle: parts.join(" · "),
            }
        },
    },
})
