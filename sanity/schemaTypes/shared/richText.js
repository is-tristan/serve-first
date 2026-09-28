import { defineArrayMember, defineField } from "sanity"

export const richTextMembers = [
    defineArrayMember({
        type: "block",
        styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
        ],
    }),
    defineArrayMember({
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
]
