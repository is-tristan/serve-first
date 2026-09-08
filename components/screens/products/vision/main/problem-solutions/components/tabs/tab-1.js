// Components
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/screens/products/vision/components/problem-solution-section.module.scss";

export default function Tab1() {

    return (

        <div className={`${styles.tabContentContainer} colorLight hasFullStop`}>

            <Text
                className={`${styles.tabContent}`}
                headingClass={`sectionTitle colorLight`}
                titleAnimationDelay={0.5}
                descriptionAnimationDelay={0.75}
                title="A gap on the shelf"
                descriptionClass="large"
                description="A camera on your floor sees a shelf run empty. On its own, it just records it."
            />

        </div>

    );

}
