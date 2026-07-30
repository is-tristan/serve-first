// Next
import Image from "next/image"

// Icons
import { clock, calendarDateIcon } from "@/utils/icons"

// Styles
import styles from "@/styles/components/screens/resources/blog.module.scss"

export default function BlogMeta({
    readTime,
    authorName,
    authorImage,
    publishedAt,
}) {

    return (

        <div className={styles.blogHeaderMeta}>

            {authorName && (

                <div className={styles.blogHeaderMetaItem}>

                    <Image className={styles.blogHeaderMetaItemImage} src={authorImage || "/decoration/no-image-placeholder.webp"} alt={authorName} width={32} height={32} />

                    <span className={styles.blogHeaderMetaItemText}>{authorName}</span>

                </div>

            )}

            {authorName && (readTime || publishedAt) && (<span className={styles.blogHeaderMetaSeparator}>|</span>)}

            {publishedAt && (

                <div className={styles.blogHeaderMetaItem}>

                    <div className={styles.blogHeaderMetaItemIcon} dangerouslySetInnerHTML={{ __html: calendarDateIcon }} />

                    <span className={styles.blogHeaderMetaItemText}>{publishedAt}</span>

                </div>

            )}

            {publishedAt && readTime && (<span className={styles.blogHeaderMetaSeparator}>|</span>)}

            {readTime && (

                <div className={styles.blogHeaderMetaItem}>

                    <div className={styles.blogHeaderMetaItemIcon} dangerouslySetInnerHTML={{ __html: clock }} />

                    <span className={styles.blogHeaderMetaItemText}>{readTime} min read</span>

                </div>

            )}

        </div>

    )

}