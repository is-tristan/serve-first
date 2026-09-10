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

    const Wrapper = fullLink ? Link : "div";

    const label = (

        <>

            <span>{text}</span>

            {icon && (<div className="icon" dangerouslySetInnerHTML={{ __html: icon }} />)}

        </>

    );

    return (

        <Wrapper
            href={fullLink ? href : undefined}
            target={fullLink ? target : undefined}
            className={`row ${styles.topbar}`}
            data-type={type}
        >

            <div className={`container ${styles.topbarContainer}`}>

                {fullLink ? (

                    <span className={`btn textLink colorLight ${styles.homeLink}`}>

                        {label}

                    </span>

                ) : (

                    <Link href={href} target={target} className={`btn textLink colorPrimaryAlt`}>

                        {label}

                    </Link>

                )}

            </div>

        </Wrapper>

    );

}
