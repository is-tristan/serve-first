import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"

import { DocumentTextIcon } from "@sanity/icons/DocumentText"
import { ImageIcon } from "@sanity/icons/Image"
import { MenuIcon } from "@sanity/icons/Menu"
import { StarIcon } from "@sanity/icons/Star"

const structuredTypes = ["menuAds", "blog", "media", "author", "category", "tag", "testimonial", "logo"]

export const structure = (S, context) =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Menu")
                .icon(MenuIcon)
                .child(
                    S.list()
                        .title("Menu")
                        .items([
                            S.listItem()
                                .title("Menu Ads")
                                .icon(ImageIcon)
                                .child(
                                    S.document()
                                        .schemaType("menuAds")
                                        .documentId("menuAds")
                                        .title("Menu Ads")
                                ),
                        ])
                ),
            S.listItem()
                .title("Posts")
                .icon(DocumentTextIcon)
                .child(
                    S.list()
                        .title("Posts")
                        .items([
                            S.documentTypeListItem("blog").title("Blog Post"),
                            S.documentTypeListItem("media").title("Media Post"),
                            S.documentTypeListItem("author").title("Author"),
                            S.documentTypeListItem("category").title("Category"),
                            S.documentTypeListItem("tag").title("Tag"),
                        ])
                ),
            orderableDocumentListDeskItem({
                type: "testimonial",
                title: "Testimonials",
                icon: StarIcon,
                S,
                context,
            }),
            orderableDocumentListDeskItem({
                type: "logo",
                title: "Logos",
                icon: ImageIcon,
                S,
                context,
            }),
            ...S.documentTypeListItems().filter(
                (listItem) => !structuredTypes.includes(listItem.getId())
            ),
        ])
