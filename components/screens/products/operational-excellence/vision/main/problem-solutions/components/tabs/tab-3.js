// Components
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/screens/products/operational-excellence/vision/components/problem-solution-section.module.scss";

export default function Tab3() {

    return (

        <div className={`${styles.tabContentContainer} colorLight hasFullStop`}>

            <Text
                className={`${styles.tabContent}`}
                headingClass={`sectionTitle colorLight`}
                titleAnimationDelay={0.5}
                descriptionAnimationDelay={0.75}
                title="A plan to put it right"
                descriptionClass="large"
                description="It raises a task for the person on shift, and tracks it through to done."
            />

        </div>

    );

}
