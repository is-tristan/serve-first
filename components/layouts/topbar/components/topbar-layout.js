// Next
import Link from "next/link";

// Icons
import { arrowRightShort } from "@/utils/icons";

// Styles
import styles from "@/styles/components/layouts/topbar/topbar.module.scss";

export default function Topbar({
    href,
    text,
    target,
    icon = arrowRightShort,
    type,
    fullLink = false,
}) {

    const label = (

        <span className={`btn textLink colorPrimaryAlt`}>

            <span>{text}</span>

            {icon && (<div className="icon" dangerouslySetInnerHTML={{ __html: icon }} />)}

        </span>

    );

    if (fullLink) {
        return (

            <Link href={href} target={target} className={`row ${styles.topbar}`} data-type={type}>

                <div className={`container ${styles.topbarContainer}`}>

                    {label}

                </div>

            </Link>

        );
    }

    return (

        <div className={`row ${styles.topbar}`} data-type={type}>

            <div className={`container ${styles.topbarContainer}`}>

                <Link href={href} target={target} className={`btn textLink colorPrimaryAlt`}>

                    <span>{text}</span>

                    {icon && (<div className="icon" dangerouslySetInnerHTML={{ __html: icon }} />)}

                </Link>

            </div>

        </div>

    );

}
