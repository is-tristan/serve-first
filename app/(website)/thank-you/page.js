// Components
import ThankYouContent from "./components/content";

// Styles
import styles from "@/styles/components/screens/thank-you/thank-you.module.scss";

export default function ThankYouPage() {

    return (

        <section className={`row ${styles.thankYou} bgPrimaryAlt colorLight`}>

            <div className={`container`}>

                <ThankYouContent />
                
            </div>

        </section>

    )

}