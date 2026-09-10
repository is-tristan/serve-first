// Components
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/screens/products/vision/components/problem-solution-section.module.scss";

export default function Tab2() {

    return (

        <div className={`${styles.tabContentContainer} colorLight hasFullStop`}>

            <Text
                className={`${styles.tabContent}`}
                headingClass={`sectionTitle colorLight`}
                title="Read against your standard"
                descriptionClass="large"
                description="VISION reads the gap against your restock standard and flags it to your dashboard."
            />

        </div>

    );

}
