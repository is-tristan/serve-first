"use client";

// React
import { useEffect, useState } from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Styles
import styles from "@/styles/components/layouts/header/header-mobile-menu.module.scss";

// Data
import { menuItemsData as data } from "@/components/layouts/header/items/menu-items-data";

// Icons
import { logo, closeIcon, chevronDown } from "@/utils/icons";

// Components
import HeaderAd from "@/components/layouts/header/components/header-ad";

const menuAdKeys = {
    "How it works": "howItWorks",
    "Solutions": "solutions",
    "Products": "products",
    "Company": "company",
    "Resources": "resources",
};

export default function HeaderMobileMenu({ isOpen = false, onClose, menuAds }) {

    const pathname = usePathname();
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null);

    const isActive = (href) => {
        return pathname === href;
    };

    const isSubmenuOpen = (label) => {
        return openSubmenu === label;
    };

    const isNestedSubmenuOpen = (submenuItem) => {
        return openNestedSubmenu === submenuItem.label;
    };

    const handleSubmenuToggle = (label) => {
        setOpenSubmenu((current) => (current === label ? null : label));
        setOpenNestedSubmenu(null);
    };

    const handleNestedSubmenuToggle = (submenuItem) => {
        setOpenNestedSubmenu((current) => (current === submenuItem.label ? null : submenuItem.label));
    };

    const handleLinkClick = () => {
        onClose();
        setOpenSubmenu(null);
        setOpenNestedSubmenu(null);
    };

    useEffect(() => {
        if (!isOpen) {
            setOpenSubmenu(null);
            setOpenNestedSubmenu(null);
        }
    }, [isOpen]);

    return (

        <>

            <div className={`hidden-xxl ${styles.mobileMenu}`} data-toggled={isOpen} role="navigation" data-name="mobileMenu">

                <div className={styles.mobileMenuHeader}>

                    <Link href="/" className={styles.mobileMenuLogo} aria-label="Home" dangerouslySetInnerHTML={{ __html: logo }} />

                    <span className={`${styles.mobileMenuToggle} ${styles.mobileMenuClose}`} onClick={onClose} dangerouslySetInnerHTML={{ __html: closeIcon }} />

                </div>

                <div className={styles.mobileMenuItems}>

                    {data.map((item) => (

                        <div
                            key={item.label}
                            className={styles.mobileMenuItem}
                            data-menu-item={item.label.toLowerCase().replaceAll(" ", "-")}
                            data-active={isActive(item.href)}
                        >

                            {item.submenu ? (

                                <>

                                    <button
                                        type="button"
                                        className={styles.mobileMenuItemToggle}
                                        data-submenu-open={isSubmenuOpen(item.label)}
                                        onClick={() => handleSubmenuToggle(item.label)}
                                    >

                                        <span className={styles.menuItemLabel}>{item.label}</span>

                                        <span className={styles.mobileMenuItemIcon} dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                    </button>

                                    <div className={styles.mobileSubmenu} data-submenu-open={isSubmenuOpen(item.label)}>

                                        {item.submenu.map((submenuItem) => (

                                            <div key={submenuItem.label} className={styles.mobileSubmenuItem}>

                                                {submenuItem.submenu ? (

                                                    <>

                                                        <button
                                                            type="button"
                                                            className={styles.mobileSubmenuItemToggle}
                                                            data-submenu-open={isNestedSubmenuOpen(submenuItem)}
                                                            data-menu-item={submenuItem.label.toLowerCase().replaceAll(" ", "-")}
                                                            onClick={() => handleNestedSubmenuToggle(submenuItem)}
                                                        >

                                                            {submenuItem.icon && (<div className={styles.mobileSubmenuItemIcon} dangerouslySetInnerHTML={{ __html: submenuItem.icon }} />)}

                                                            <span>{submenuItem.label}</span>

                                                            <span className={styles.mobileSubmenuItemChevron} dangerouslySetInnerHTML={{ __html: chevronDown }} />

                                                        </button>

                                                        <div className={styles.mobileNestedSubmenu} data-submenu-open={isNestedSubmenuOpen(submenuItem)}>

                                                            <div className={styles.mobileNestedSubmenuItems}>

                                                                {submenuItem.submenu.map((nestedSubmenuItem) => (

                                                                    <Link
                                                                        key={nestedSubmenuItem.label}
                                                                        href={nestedSubmenuItem.href}
                                                                        className={styles.mobileNestedSubmenuItemLink}
                                                                        onClick={handleLinkClick}
                                                                    >

                                                                        <span className={styles.mobileNestedSubmenuItemText}>{nestedSubmenuItem.label}</span>

                                                                    </Link>

                                                                ))}

                                                            </div>

                                                        </div>

                                                    </>

                                                ) : (

                                                    <Link href={submenuItem.href} className={styles.mobileSubmenuItemLink} data-menu-item={submenuItem.label.toLowerCase().replaceAll(" ", "-")} onClick={handleLinkClick}>

                                                        {submenuItem.icon && (<div className={styles.mobileSubmenuItemIcon} dangerouslySetInnerHTML={{ __html: submenuItem.icon }} />)}

                                                        <span>{submenuItem.label}</span>

                                                    </Link>

                                                )}

                                            </div>

                                        ))}

                                        {menuAds?.[menuAdKeys[item.label]] && (

                                            <div className={styles.mobileMenuAd} onClick={handleLinkClick}>

                                                <HeaderAd ad={menuAds[menuAdKeys[item.label]]} />

                                            </div>

                                        )}

                                    </div>

                                </>

                            ) : (

                                <Link href={item.href} className={styles.mobileMenuItemLink} onClick={handleLinkClick}>

                                    <span className={styles.menuItemLabel}>{item.label}</span>

                                    {item.icon && (<div className={styles.mobileMenuItemIcon} dangerouslySetInnerHTML={{ __html: item.icon }} />)}

                                </Link>

                            )}

                        </div>

                    ))}

                </div>

            </div>

            <div className={`hidden-xxl ${styles.mobileMenuBackdrop}`} onClick={onClose} data-toggled={isOpen} />

        </>

    )

}
