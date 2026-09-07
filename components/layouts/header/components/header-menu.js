"use client";

// React
import { useState } from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data
import { menuItemsData as data } from "@/components/layouts/header/items/menu-items-data";

// Styles
import styles from "@/styles/components/layouts/header/header-desktop-menu.module.scss";

// Icons
import { chevronDown, chevronRightAlt, arrowRightShort, aiIcon } from "@/utils/icons";

// Components
import HeaderAd from "@/components/layouts/header/components/header-ad"

const menuAdKeys = {
    "How it works": "howItWorks",
    "Solutions": "solutions",
    "Products": "products",
    "Company": "company",
    "Resources": "resources",
}

export default function HeaderMenu({ menuAds }) {

    const pathname = usePathname()
    const [openSubmenu, setOpenSubmenu] = useState(null)
    const [selectedSubmenuItem, setSelectedSubmenuItem] = useState(null)

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

        <div className={`hidden-s hidden-m hidden-l hidden-xl ${styles.desktopMenu}`} role="navigation" data-name="desktopMenu">

            {data.map((item) => {

                return (

                    <div
                        className={styles.menuItemOuter}
                        key={item.label}
                        data-menu-item={item.label.toLowerCase().replaceAll(" ", "-")}
                        data-active={isActive(item.href)}
                        onMouseEnter={() => handleSubmenuOpen(item.label)}
                        onMouseLeave={() => handleSubmenuClose()}
                    >

                        {item.submenu ? (

                            <>

                                <div className={`${styles.menuItem} ${styles.hasSubmenu}`}>

                                    <div key={item.label} className={`${styles.menuItemLink}`} style={{ cursor: "pointer" }} aria-label={`Open ${item.label} Submenu`}>

                                        <span>{item.label}</span>

                                        <span className={styles.menuItemIcon} dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                    </div>

                                </div>

                                <div className={styles.desktopSubmenu} data-submenu-open={isSubmenuOpen(item.label)}>

                                    {item.submenu && (

                                        <div key={item.label} className={styles.submenuContainer}>

                                            <div className={styles.submenuLeft}>

                                                {item.submenu.map((submenuItem) => (

                                                    submenuItem.submenu ? (

                                                        <button
                                                            key={submenuItem.label}
                                                            type="button"
                                                            className={styles.submenuLeftItem}
                                                            data-submenu-item-active={isSelectedSubmenuItem(submenuItem)}
                                                            onClick={() => handleSubmenuItemSelect(submenuItem)}
                                                        >

                                                            {submenuItem.label && (<span>{submenuItem.label}</span>)}

                                                        </button>

                                                    ) : (

                                                        <Link
                                                            key={submenuItem.label}
                                                            href={submenuItem.href}
                                                            className={styles.submenuLeftItem}
                                                            onClick={handleSubmenuClose}
                                                        >

                                                            {submenuItem.label && (<span>{submenuItem.label}</span>)}

                                                            <div className={styles.submenuLeftItemIcon} dangerouslySetInnerHTML={{ __html: chevronRightAlt }} />

                                                        </Link>

                                                    )

                                                ))}

                                            </div>

                                            <div className={styles.submenuRightContainer}>

                                                {item.submenu.map((submenuItem) => (

                                                    <div
                                                        key={submenuItem.label}
                                                        className={styles.submenuRight}
                                                        data-submenu-open={isSelectedSubmenuItem(submenuItem)}
                                                        data-has-child-submenu={submenuItem.submenu?.length > 0}
                                                    >

                                                        {submenuItem.submenu && (

                                                            <div className={styles.submenuRightContent}>

                                                                <div className={styles.submenuRightTitle}>

                                                                    <h3>{submenuItem.label}</h3>

                                                                </div>

                                                                <div className={styles.submenuRightItems}>

                                                                    {submenuItem.submenu.map((nestedSubmenuItem) => (

                                                                        <Link
                                                                            key={nestedSubmenuItem.label}
                                                                            href={nestedSubmenuItem.href}
                                                                            className={styles.submenuRightItemLink}
                                                                            onClick={handleSubmenuClose}
                                                                        >

                                                                            <span className={styles.submenuRightItemText}>{nestedSubmenuItem.label}</span>

                                                                            <span className={styles.submenuRightItemIcon} dangerouslySetInnerHTML={{ __html: arrowRightShort }} />

                                                                        </Link>

                                                                    ))}

                                                                </div>

                                                            </div>

                                                        )}

                                                        <HeaderAd ad={menuAds?.[menuAdKeys[item.label]]} onClick={handleSubmenuClose} />

                                                    </div>

                                                ))}

                                            </div>

                                        </div>

                                    )}

                                </div>

                            </>

                        ) : (

                            <div className={`${styles.menuItem}`}>

                                <Link href={item.href} key={item.label} className={styles.menuItemLink} onClick={handleSubmenuClose}>

                                    <span>{item.label}</span>

                                    {item.icon && (<span className={styles.menuItemIcon} dangerouslySetInnerHTML={{ __html: item.icon }} />)}

                                </Link>

                            </div>

                        )}

                    </div>

                );
            })}

        </div>

    )

}