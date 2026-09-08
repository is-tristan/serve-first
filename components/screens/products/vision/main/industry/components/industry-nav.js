// Styles
import styles from "@/styles/components/screens/products/vision/components/industry-section.module.scss";

export default function IndustryNav({
    navItems = [],
    tabActive,
    setTabActive
}) {

    return (

        <nav className={styles.industryNav}>

            {navItems.map((item) => (

                <div key={item.id} className={styles.industryNavItem}>

                    <button
                        type="button"
                        className={`${styles.industryNavButton}${tabActive === item.id ? ` ${styles.industryNavButtonActive}` : ""}`}
                        onClick={() => setTabActive(item.id)}
                        aria-pressed={tabActive === item.id}
                    >

                        <span className={styles.industryNavButtonIcon}></span>

                        <span>{item.label}</span>

                    </button>

                </div>

            ))}

        </nav>

    )

}
