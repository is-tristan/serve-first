// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Tabs from "./components/tabs";

// Styles
import styles from "@/styles/components/screens/products/vision/components/problem-solution-section.module.scss";

export default function ProblemSolutions({
    eyebrow = "See it, understand it, put it right",
    title = "From what the camera sees to what gets done"
}) {

    return (

        <section className={`row ${styles.problemSolutionsSection}`}>

            <div className="container centered noPaddingBottom">

                <div className="content" data-alignment="centered">

                    <Eyebrow text={eyebrow} hasDash={true} textColor={`colorSecondary`} />

                    <Text headingClass={`extraLarge colorLight`} title={title} />

                </div>

            </div>

            <div className="container noPaddingTop">

                <Tabs />

            </div>

        </section>

    );

}