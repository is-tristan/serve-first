// Components
import Button from "@/components/handlers/buttons";

// Styles
import styles from "@/styles/components/layouts/topbar/topbar.module.scss";

export default function Topbar({ href = "https://mysteryshopping.servefirst.ai/", text = "Become a Mystery Shopper", target = "_blank" }) {

    return (

        <div className={`row ${styles.topbar}`}>

            <div className={`container ${styles.topbarContainer}`}>

                <Button href={href} text={text} target={target} className="textLink colorPrimaryAlt" hasAnimation={false} />

            </div>

        </div>

    )

}
