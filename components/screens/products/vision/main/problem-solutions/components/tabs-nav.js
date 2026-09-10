// Styles
import styles from "@/styles/components/screens/products/vision/components/problem-solution-section.module.scss";

const tabsNavItems = [
    {
        id: 1,
        label: "Capture"
    },
    {
        id: 2,
        label: "VISION's Analysis"
    },
    {
        id: 3,
        label: "Action"
    }
];

export default function TabsNav({ tabActive = 1, setTabActive }) {

    return (

        <nav className={styles.tabsNav}>

            {tabsNavItems.map((tabsNavItem) => (

                <button
                    key={tabsNavItem.id}
                    type="button"
                    className={`${styles.tabsNavItem}${tabActive === tabsNavItem.id ? ` ${styles.tabsNavItemActive}` : ""}`}
                    onClick={() => setTabActive(tabsNavItem.id)}
                    aria-pressed={tabActive === tabsNavItem.id}
                >

                    <span>{tabsNavItem.label}</span>

                </button>

            ))}

        </nav>

    );

}
