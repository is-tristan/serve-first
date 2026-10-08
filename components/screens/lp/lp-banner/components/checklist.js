"use client";

// Imports  
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Styles
import styles from "@/styles/components/screens/lp/lp.module.scss";

// Icons
import { checkmark } from "@/utils/icons";

export default function Checklist({ checkList = [] }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <motion.div
            className={`${styles.checklistContainer}`}
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.75 }}
        >

            <div className={styles.checklist}>

                {checkList.map((item, index) => (

                    <div key={index} className={styles.checklistItem}>

                        <span className={`colorPrimary ${styles.checkmark}`} dangerouslySetInnerHTML={{ __html: checkmark }} />

                        <span className={`${styles.checklistItemText} fw300`}>{item}</span>

                    </div>

                ))}

            </div>

        </motion.div>

    )

}