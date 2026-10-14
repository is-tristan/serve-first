import { defineField, defineType } from "sanity"

import { TagIcon } from "@sanity/icons/Tag"

export const category = defineType({
    name: "category",
    title: "Category",
    type: "document",
    icon: TagIcon,
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
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "parent",
            title: "Parent Category",
            type: "reference",
            to: [{ type: "category" }],
            description: "Optional. Nest this under another category, like WordPress.",
            options: {
                filter: ({ document }) => {
                    if (!document?._id) {
                        return {}
                    }

                    const documentId = document._id.replace(/^drafts\./, "")

                    return {
                        filter: "!(_id in [$id, $draftId])",
                        params: {
                            id: documentId,
                            draftId: `drafts.${documentId}`,
                        },
                    }
                },
            },
            validation: (rule) =>
                rule.custom((parent, context) => {
                    if (!parent?._ref || !context.document?._id) {
                        return true
                    }

                    const documentId = context.document._id.replace(/^drafts\./, "")

                    if (parent._ref === documentId || parent._ref === `drafts.${documentId}`) {
                        return "A category can't be its own parent"
                    }

                    return true
                }),
        }),
    ],
    preview: {
        select: {
            title: "title",
            parentTitle: "parent.title",
        },
        prepare({ title, parentTitle }) {
            return {
                title,
                subtitle: parentTitle ? `Child of ${parentTitle}` : "Top level",
            }
        },
    },
})
