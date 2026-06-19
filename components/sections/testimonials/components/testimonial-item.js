// Components
import ReviewerInitials from "@/components/misc/reviewer-initials";

// Styles
import styles from "@/styles/components/sections/testimonials.module.scss";

// Icons
import { starFilled, starHalf, star as starEmpty } from "@/utils/icons";

// Helpers
import getReviewStars from "@/helpers/review-stars";

// Constants
const starIcons = {
    filled: starFilled,
    half: starHalf,
    empty: starEmpty
};

export default function TestimonialItem({
    theme = "light",
    rating,
    name,
    position,
    quote
}) {
    return (

        <div className={styles.testimonialItem}>

            <div className={styles.testimonialItemRating}>

                {getReviewStars(rating).map((type, index) => (

                    <span className={`${styles.testimonialItemStar} colorPrimary`} key={index} dangerouslySetInnerHTML={{ __html: starIcons[type] }} />

                ))}

            </div>

            {quote && (<h2 className={theme === "light" ? "darkAltHeadingGradient" : "lightHeadingGradient"}>“{quote}”</h2>)}

            <div className={styles.testimonialMeta}>

                <ReviewerInitials name={name} />

                <div className={styles.testimonialMetaItems}>

                    <h3>{name}</h3>

                    <p>{position}</p>

                </div>

            </div>

        </div>

    )

}