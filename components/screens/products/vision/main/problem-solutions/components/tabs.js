"use client";

// Imports
import { useState } from "react";

// Components
import TabsNav from "./tabs-nav";
import TabImages from "./tab-images";
import Tab1 from "./tabs/tab-1";
import Tab2 from "./tabs/tab-2";
import Tab3 from "./tabs/tab-3";

// Styles
import styles from "@/styles/components/screens/products/vision/components/problem-solution-section.module.scss";

const tabPanels = {
    1: Tab1,
    2: Tab2,
    3: Tab3
};

export default function Tabs() {

    const [tabActive, setTabActive] = useState(1);
    const ActiveTab = tabPanels[tabActive];

    return (

        <div className={styles.tabs}>

            <div className={styles.tabsContainer}>

                <TabsNav tabActive={tabActive} setTabActive={setTabActive} />

                <div className={styles.tabItems}>

                    <div
                        className={styles.tabItem}
                        data-index={tabActive}
                        data-active={true}
                        aria-label={`Tab ${tabActive}`}
                    >

                        <TabImages />

                        <ActiveTab />

                    </div>

                </div>

            </div>

        </div>

    );

}
