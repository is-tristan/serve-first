"use client";

import styles from "@/styles/components/screens/products/operational-excellence/vision/components/scroll-banner-ui.module.scss";

const frameLabels = {
    1: "Introduction",
    2: "Issue detection",
    3: "Task raised",
};

export default function ScrollBannerPagination({
    frameActive = 1,
    frameCount = 3,
    onSelect,
}) {

    return (

        <nav className={styles.scrollBannerPagination} aria-label="VISION story frames">

            {Array.from({ length: frameCount }, (_, index) => {

                const frame = index + 1;
                const isActive = frameActive === frame;
                const label = frameLabels[frame] || `Frame ${frame}`;

                return (

                    <button
                        key={frame}
                        type="button"
                        className={`${styles.paginationItem}${isActive ? ` ${styles.paginationItemActive}` : ""}`}
                        aria-label={`${label}, frame ${frame} of ${frameCount}`}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => onSelect?.(frame)}
                    />

                );

            })}

        </nav>

    );

}
