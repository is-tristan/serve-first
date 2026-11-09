// Next
import Link from "next/link";

// Styles
import styles from "@/styles/components/layouts/footer/footer-contact-items.module.scss";

// Data
import { footerContactItems } from "../items/footer-items-data";

// Icon
import { mapPinIcon } from "@/utils/icons";

export default function FooterContactItems({ theme }) {

    const contactItems = Object.values(footerContactItems);

    return (

        <>

            {contactItems.length > 0 && (

                <div className={styles.footerContactItems} data-theme={theme}>

                    {contactItems.map((item, index) => (

                        <div key={index} className={styles.footerContactItem}>

                            <span className={styles.footerContactItemLabel}>{item.label}</span>

                            <div className={styles.footerContactItemContent}>

                                <div className={styles.footerContactItemIcon} dangerouslySetInnerHTML={{ __html: item.icon ? item.icon : mapPinIcon }} />

                                <div className={styles.footerContactItemText}>

                                    <Link href={item.phoneHref} target="_blank">{item.phone}</Link>

                                    {item.address && (

                                        <Link href={item.addressHref} target="_blank">{item.address}</Link>

                                    )}

                                    {item.phoneTwo && (

                                        <Link href={item.phoneHrefTwo} target="_blank">{item.phoneTwo}</Link>

                                    )}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </>
    )

}