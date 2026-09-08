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
                titleAnimationDelay={3.25}
                descriptionAnimationDelay={3.5}
                title="Read against your standard"
                descriptionClass="large"
                description="Vision reads the gap against your restock standard and flags it to your dashboard."
            />

        </div>

    );

}
