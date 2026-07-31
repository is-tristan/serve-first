"use client"

import { useState } from "react"

import Eyebrow from "@/components/decoration/eyebrow"
import Text from "@/components/content/text"
import ContentGridItem from "@/components/sections/content-grid/components/content-grid-item"

import styles from "@/styles/components/sections/content-grid.module.scss"
import blogStyles from "@/styles/components/screens/resources/blog.module.scss"

const postsPerPage = 9

export default function BlogContentGrid({
    eyebrow = "Latest articles",
    title = "Guides, playbooks and field notes today",
    colCount = 3,
    containerTopClass,
    containerBottomClass,
    imageAspectRatio = "1.75",
    data = [],
}) {

    const [visibleCount, setVisibleCount] = useState(postsPerPage)

    const visiblePosts = data.slice(0, visibleCount)
    const hasMorePosts = visibleCount < data.length

    function handleLoadMore() {
        setVisibleCount((currentCount) => currentCount + postsPerPage)
    }

    return (

        <section
            className={`row ${styles.contentGrid}`}
            data-name="blog-content-grid"
        >

            <div className={`container noPaddingBottom ${containerTopClass}`}>

                <div className="content">

                    {eyebrow && (<Eyebrow text={eyebrow} hasDash={true} />)}

                    {title && (<Text headingClass={`sectionTitle sectionTitleContained colorPrimaryAlt`} title={title} />)}

                </div>

            </div>

            {visiblePosts.length > 0 && (

                <div className={`container noPaddingTop ${containerBottomClass} ${colCount === 4 ? "quadCols" : "flexAuto"} ${styles.contentGridItems}`}>

                    {visiblePosts.map((item, index) => (

                        <ContentGridItem key={item.slug || index} index={index % postsPerPage} item={item} imageAspectRatio={imageAspectRatio} />

                    ))}

                </div>

            )}

            {hasMorePosts && (

                <div className={`container noPaddingTop ${blogStyles.loadMore}`}>

                    <button
                        type="button"
                        className="btn primary"
                        onClick={handleLoadMore}
                    >

                        <span>Load more</span>

                    </button>

                </div>

            )}

        </section>

    )

}
