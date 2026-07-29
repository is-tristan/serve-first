import { ImageIcon } from "@sanity/icons/Image"

const singletons = ["menuAds"]

export const structure = (S) =>
    S.list()
        .title("Content")
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
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem) => !singletons.includes(listItem.getId())
            ),
        ])
