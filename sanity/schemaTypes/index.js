import { author } from "./author"
import { blog } from "./blog"
import { category } from "./category"
import { logo } from "./logo"
import { media } from "./media"
import { menuAds } from "./menuAds"
import { tag } from "./tag"
import { testimonial } from "./testimonial"

export const schema = {
    types: [menuAds, blog, media, author, category, tag, testimonial, logo],
}
