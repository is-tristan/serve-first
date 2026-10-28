import { defineArrayMember, defineField } from "sanity"

export const postSeoField = defineField({
    name: "seo",
    title: "SEO",
    type: "object",
    options: {
        collapsible: true,
        collapsed: false,
    },
    fields: [
        defineField({
            name: "title",
            title: "SEO Title",
            type: "string",
            description: "Overrides the post title if provided",
            validation: (rule) => rule.max(60).warning("Keep under 60 characters"),
        }),
        defineField({
            name: "description",
            title: "SEO Description",
            type: "text",
            rows: 3,
            description: "Falls back to the excerpt if empty",
            validation: (rule) => rule.max(160).warning("Keep under 160 characters"),
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            description: "Used to match this post to the \"Worth a read\" section on product and industry pages.",
            of: [
                defineArrayMember({
                    type: "reference",
                    to: [{ type: "tag" }],
                }),
            ],
            validation: (rule) => rule.unique(),
        }),
    ],
})
