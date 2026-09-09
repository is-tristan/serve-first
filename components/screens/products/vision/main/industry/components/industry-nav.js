// Styles
import styles from "@/styles/components/screens/products/vision/components/industry-section.module.scss";

export default function IndustryNav({
    navItems = [],
    tabActive,
    setTabActive,
    baseId,
    onKeyDown,
}) {

    return (

        <div
            className={styles.industryNav}
            role="tablist"
            aria-label="Industries"
            onKeyDown={onKeyDown}
        >

            {navItems.map((item) => {

                const isActive = tabActive === item.id;

                return (

                    <div key={item.id} className={styles.industryNavItem} role="presentation">

                        <button
                            type="button"
                            id={`${baseId}-${item.id}-tab`}
                            className={`${styles.industryNavButton}${isActive ? ` ${styles.industryNavButtonActive}` : ""}`}
                            onClick={() => setTabActive(item.id)}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`${baseId}-${item.id}-panel`}
                            tabIndex={isActive ? 0 : -1}
                        >

                            <span className={styles.industryNavButtonIcon} aria-hidden="true"></span>

                            <span>{item.label}</span>

                        </button>

                    </div>

                );

            })}

        </div>

    )

}
