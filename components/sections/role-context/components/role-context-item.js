"use client";

// Next
import Image from "next/image";
import Link from "next/link";

// Imports  
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/sections/role-context.module.scss";

export default function RoleContextItem({
    index,
    icon,
    eyebrow,
    title,
    number,
    description,
    button
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (

        <motion.div
            className={styles.roleContextItem}
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.25 + (index * 0.12) }}
        >

            <div className={styles.roleContextHeader}>

                {icon && (<Image src={icon} alt={title} width={24} height={24} />)}

                {eyebrow && (<Eyebrow type="secondary" hasAnimation={false} text={eyebrow} />)}

                {title && (<h3>{title}</h3>)}

            </div>

            <div className={styles.roleContextContent}>

                {number && (<span className={styles.roleContextNumber}>{number}</span>)}

                <div className={styles.roleContextFooter}>

                    {description && (<p>{description}</p>)}

                    {button && (<Button dataName={"roleContextButton"} className="textLink colorPrimary fw400" text={button.text} href={button.href} target={button.target} hasAnimation={false} />)}

                </div>

            </div>

            <Link href={button.href} target={button.target} className={"colLink"}></Link>

        </motion.div>

    )
}