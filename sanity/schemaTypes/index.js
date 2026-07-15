import { author } from "./author"
import { blog } from "./blog"
import { category } from "./category"
import { media } from "./media"
import { menuAds } from "./menuAds"

export const schema = {
    types: [menuAds, blog, media, author, category],
}
