import { defineField, defineType } from "sanity"

import { StarIcon } from "@sanity/icons/Star"

import { svgOnlyOptions, svgOnlyValidation } from "./shared/svgOnlyImage"

export const testimonial = defineType({
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    icon: StarIcon,
    fields: [
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            validation: (rule) => rule.required().min(1).max(5),
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "position",
            title: "Position",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "quote",
            title: "Quote",
            type: "text",
            rows: 4,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "companyLogo",
            title: "Company Logo",
            type: "image",
            options: svgOnlyOptions,
            validation: svgOnlyValidation,
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "position",
            media: "companyLogo",
        },
    },
})
