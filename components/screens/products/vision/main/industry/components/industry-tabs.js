"use client";

// Imports
import { useRef, useState } from "react";
import { useInView } from "motion/react";

// Components
import IndustryNav from "./industry-nav";
import IndustryTab from "./industry-tab";

// Styles
import styles from "@/styles/components/screens/products/vision/components/industry-section.module.scss";

// Data
import { industryTabsData } from "@/app/(website)/products/vision/data";

export default function IndustryTabs() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [tabActive, setTabActive] = useState(industryTabsData[0].id);
    const activeTab = industryTabsData.find((item) => item.id === tabActive) || industryTabsData[0];

    return (

        <div className={styles.industryTabs} ref={ref}>

            <IndustryNav
                navItems={industryTabsData}
                tabActive={tabActive}
                setTabActive={setTabActive}
            />

            <div className={styles.industryTabItem}>

                <IndustryTab
                    key={activeTab.id}
                    isActive={true}
                    isInView={isInView}
                    image={activeTab.image}
                    imageAlt={activeTab.imageAlt}
                    eyebrow={activeTab.eyebrow}
                    title={activeTab.title}
                    listItems={activeTab.listItems}
                />

            </div>

        </div>

    )

}
