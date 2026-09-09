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

    return (

        <div className={styles.industryTabs} ref={ref}>

            <IndustryNav
                navItems={industryTabsData}
                tabActive={tabActive}
                setTabActive={setTabActive}
            />

            <div className={styles.industryTabItem}>

                {industryTabsData.map((item) => (

                    <IndustryTab
                        key={item.id}
                        isActive={tabActive === item.id}
                        isInView={isInView}
                        image={item.image}
                        imageAlt={item.imageAlt}
                        eyebrow={item.eyebrow}
                        title={item.title}
                        listItems={item.listItems}
                    />

                ))}

            </div>

        </div>

    )

}
