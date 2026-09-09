"use client";

// Imports
import { useId, useRef, useState } from "react";
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
    const baseId = useId();
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [tabActive, setTabActive] = useState(industryTabsData[0].id);

    const handleKeyDown = (event) => {

        const currentIndex = industryTabsData.findIndex((item) => item.id === tabActive);

        if (currentIndex < 0) {
            return;
        }

        let nextIndex = currentIndex;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            event.preventDefault();
            nextIndex = (currentIndex + 1) % industryTabsData.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            event.preventDefault();
            nextIndex = (currentIndex - 1 + industryTabsData.length) % industryTabsData.length;
        } else if (event.key === "Home") {
            event.preventDefault();
            nextIndex = 0;
        } else if (event.key === "End") {
            event.preventDefault();
            nextIndex = industryTabsData.length - 1;
        } else {
            return;
        }

        const nextTabId = industryTabsData[nextIndex].id;
        setTabActive(nextTabId);

        requestAnimationFrame(() => {
            document.getElementById(`${baseId}-${nextTabId}-tab`)?.focus();
        });

    };

    return (

        <div className={styles.industryTabs} ref={ref}>

            <IndustryNav
                navItems={industryTabsData}
                tabActive={tabActive}
                setTabActive={setTabActive}
                baseId={baseId}
                onKeyDown={handleKeyDown}
            />

            <div className={styles.industryTabItem}>

                {industryTabsData.map((item) => (

                    <IndustryTab
                        key={item.id}
                        id={`${baseId}-${item.id}-panel`}
                        labelledBy={`${baseId}-${item.id}-tab`}
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
