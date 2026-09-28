import { defineField, defineType } from "sanity"

import { ImageIcon } from "@sanity/icons/Image"

const menuAdFields = [
    defineField({
        name: "image",
        title: "Image",
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
        name: "title",
        title: "Title",
        type: "string",
    }),
    defineField({
        name: "description",
        title: "Description",
        type: "text",
        rows: 3,
    }),
    defineField({
        name: "link",
        title: "Link",
        type: "url",
        validation: (rule) => rule.uri({
            allowRelative: true,
            scheme: ["http", "https"],
        }),
    }),
    defineField({
        name: "linkText",
        title: "Link Text",
        type: "string",
    }),
]

const menuAdField = (name, title) => defineField({
    name,
    title,
    type: "object",
    fields: menuAdFields,
    options: {
        collapsible: true,
        collapsed: false,
    },
})

export const menuAds = defineType({
    name: "menuAds",
    title: "Menu Ads",
    type: "document",
    icon: ImageIcon,
    fields: [
        menuAdField("howItWorks", "How It Works"),
        menuAdField("solutions", "Solutions"),
        menuAdField("products", "Products"),
        menuAdField("company", "Company"),
        menuAdField("resources", "Resources"),
    ],
    preview: {
        prepare() {
            return {
                title: "Menu Ads",
            }
        },
    },
})
