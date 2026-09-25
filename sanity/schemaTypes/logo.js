import { defineField, defineType } from "sanity"

import { ImageIcon } from "@sanity/icons/Image"

import { svgOnlyOptions, svgOnlyValidation } from "./shared/svgOnlyImage"

export const logo = defineType({
    name: "logo",
    title: "Logo",
    type: "document",
    icon: ImageIcon,
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: svgOnlyOptions,
            validation: svgOnlyValidation,
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "string",
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "alt",
            media: "image",
        },
    },
})
