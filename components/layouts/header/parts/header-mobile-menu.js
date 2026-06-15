"use client";

// Next
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "@/styles/components/layouts/header.module.scss";

// Data
import { data } from "@/data/menu-items-data";

// Icons
import { closeIcon } from "@/utils/icons";

export default function HeaderMobileMenu({ isOpen = false, onClose }) {

    return (

        <div className={`hidden-xl hidden-xxl ${styles.mobileMenu}`} data-toggled={isOpen}>

            <div className={styles.mobileMenuHeader}>

                <Image src="/static/logo/logo-light.svg" alt="Logo" loading="lazy" width={160} height={64} />

                <span className={styles.mobileMenuToggle} onClick={onClose} dangerouslySetInnerHTML={{ __html: closeIcon }} />

            </div>

            <div className={styles.mobileMenuItems}>

                {data.map((item) => (

                    <Link href={item.href} key={item.label} onClick={onClose}>{item.label}</Link>

                ))}

            </div>

        </div>

    )

}