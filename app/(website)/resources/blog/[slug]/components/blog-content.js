import RichText from "@/components/content/portable-text"

import styles from "@/styles/components/screens/resources/blog.module.scss"

export default function BlogContent({ blog }) {
    if (!Array.isArray(blog.content) || blog.content.length === 0) {
        return null
    }

    return (
        <section id="blog-content" className="row">

            <div className={`container ${styles.blogContentContainer}`}>

                <RichText value={blog.content} />

            </div>

        </section>
    )
}
