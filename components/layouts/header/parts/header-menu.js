// Next
import Link from "next/link";

// Data
import { data } from "@/data/menu-items-data";

// Styles
import styles from "@/styles/components/layouts/header.module.scss";

export default function HeaderMenu() {

    return (

        <div className={`hidden-s hidden-m hidden-l ${styles.headerMenu}`}>

            {data.map((item) => (

                <Link href={item.href} key={item.label}>{item.label}</Link>

            ))}

        </div>

    )

}