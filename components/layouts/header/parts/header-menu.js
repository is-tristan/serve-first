"use client";

// React
import { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Data
import { menuItemsData as data } from "@/components/layouts/header/items/menu-items-data";

// Styles
import styles from "@/styles/components/layouts/header/header-desktop-menu.module.scss";

// Icons
import { arrowUpRight, chevronDown } from "@/utils/icons";

// Header Ad
const headerAd = "/decoration/header-ad.webp"

export default function HeaderMenu() {

    const pathname = usePathname();
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [selectedSubmenuItem, setSelectedSubmenuItem] = useState(null);

    const isActive = (href) => {
        return pathname === href;
    };

    const isSubmenuOpen = (label) => {
        return openSubmenu === label;
    };

    const isSelectedSubmenuItem = (submenuItem) => {
        return selectedSubmenuItem?.label === submenuItem.label;
    };

    const handleSubmenuOpen = (label) => {
        const menuItem = data.find((menuItem) => menuItem.label === label);
        setOpenSubmenu(label);
        setSelectedSubmenuItem(menuItem?.submenu?.[0] ?? null);
    };

    const handleSubmenuClose = () => {
        setOpenSubmenu(null);
        setSelectedSubmenuItem(null);
    };

    const handleSubmenuItemSelect = (submenuItem) => {
        setSelectedSubmenuItem(submenuItem);
    };

    return (

        <div className={`hidden-s hidden-m hidden-l hidden-xl ${styles.desktopMenu}`}>

            {data.map((item) => {

                return (

                    <div
                        style={{ display: "flex", alignItems: "center", height: "100%" }}
                        key={item.label}
                        data-menu-item={item.label.toLowerCase().replaceAll(" ", "-")}
                        data-active={isActive(item.href)}
                        onMouseEnter={() => handleSubmenuOpen(item.label)}
                        onMouseLeave={() => handleSubmenuClose()}
                    >

                        {item.submenu ? (

                            <>

                                <div className={`${styles.menuItem} ${styles.hasSubmenu}`}>

                                    <Link href={item.href} key={item.label} className={styles.menuItemLink}>

                                        <span>{item.label}</span>

                                        <span className={styles.menuItemIcon} dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                    </Link>

                                </div>

                                <div className={styles.desktopSubmenu} data-submenu-open={isSubmenuOpen(item.label)}>

                                    {item.submenu && (

                                        <div key={item.label} className={styles.submenuContainer}>

                                            <div className={styles.submenuLeft}>

                                                {item.submenu.map((submenuItem) => (

                                                    <button
                                                        key={submenuItem.label}
                                                        type="button"
                                                        className={styles.submenuLeftItem}
                                                        data-submenu-item-active={isSelectedSubmenuItem(submenuItem)}
                                                        onClick={() => handleSubmenuItemSelect(submenuItem)}
                                                    >

                                                        {submenuItem.icon && (<div className={styles.submenuLeftItemIcon} dangerouslySetInnerHTML={{ __html: submenuItem.icon }} />)}

                                                        {submenuItem.label && (<span>{submenuItem.label}</span>)}

                                                    </button>

                                                ))}

                                            </div>

                                            <div className={styles.submenuRightContainer}>

                                                {item.submenu.map((submenuItem) => (

                                                    <div
                                                        key={submenuItem.label}
                                                        className={styles.submenuRight}
                                                        data-submenu-open={isSelectedSubmenuItem(submenuItem)}
                                                    >

                                                        <Link className={styles.submenuRightTitle} href={submenuItem.href}>

                                                            <h3>{submenuItem.label}</h3>

                                                            <div className={styles.submenuRightIcon} dangerouslySetInnerHTML={{ __html: arrowUpRight }} />

                                                        </Link>

                                                        {submenuItem.submenu && (

                                                            <div className={styles.submenuRightItems}>

                                                                {submenuItem.submenu.map((nestedSubmenuItem) => (

                                                                    <Link
                                                                        key={nestedSubmenuItem.label}
                                                                        href={nestedSubmenuItem.href}
                                                                        className={styles.submenuRightItemLink}
                                                                    >

                                                                        <span>{nestedSubmenuItem.label}</span>

                                                                    </Link>

                                                                ))}

                                                            </div>

                                                        )}

                                                        {headerAd && (

                                                            <Link href="#" className={styles.headerAd}>

                                                                <Image src={headerAd} alt="Header Ad" fill loading="lazy" sizes="100%" />

                                                            </Link>

                                                        )}

                                                    </div>

                                                ))}

                                            </div>

                                        </div>

                                    )}

                                </div>

                            </>

                        ) : (

                            <div className={styles.menuItem}>

                                <Link href={item.href} key={item.label} className={styles.menuItemLink}>

                                    <span>{item.label}</span>

                                </Link>

                            </div>

                        )}

                    </div>

                );
            })}

        </div>

    )

}