// Components
import Image from "next/image";
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
    quote,
    companyLogo = null
}) {
    return (

        <div className={styles.testimonialItem}>

            <div className={styles.testimonialItemRating}>

                {getReviewStars(rating).map((type, index) => (

                    <span className={`${styles.testimonialItemStar} colorPrimary`} key={index} dangerouslySetInnerHTML={{ __html: starIcons[type] }} />

                ))}

            </div>

            {quote && (<h2 className={theme === "primary" ? "colorLight" : "colorPrimaryAlt"}>“{quote}”</h2>)}

            <div className={styles.testimonialMeta}>

                {companyLogo ? (

                    <div className={styles.testimonialMetaCompanyLogo}>

                        <Image
                            src={companyLogo}
                            alt={name}
                            width={72}
                            height={72}
                            sizes="72px"
                            style={{ filter: theme === "primary" ? "invert(1) saturate(0) brightness(2)" : "none" }}
                        />

                    </div>

                ) : (
                    <ReviewerInitials name={name} className={styles.testimonialMetaInitials} />
                )}


                <div className={`${styles.testimonialMetaItems} ${theme === "primary" ? "colorLight" : "colorPrimaryAlt"}`}>

                    <h3>{name}</h3>

                    <p>{position}</p>

                </div>

            </div>

        </div>

    )

}