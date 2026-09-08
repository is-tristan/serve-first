// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import IndustryTabs from "./components/industry-tabs";

// Styles
import styles from "@/styles/components/screens/products/vision/components/industry-section.module.scss";

export default function IndustrySection({
    eyebrow = "Measured to your standard, not a generic one",
    title = "Video analytics software, built around how your sector runs"
}) {

    return (

        <section className={`row ${styles.industrySection}`}>

            <div className="container centered noPaddingBottom">

                <div className="content" data-alignment="center">

                    <Eyebrow text={eyebrow} hasDash={true} textColor={`colorSecondary`} />

                    <Text headingClass={`extraLarge colorLight`} title={title} />

                </div>

            </div>

            <div className="container noPaddingTop">

                <IndustryTabs />

            </div>

        </section>

    );

}