// Components
import Eyebrow from "@/components/decoration/eyebrow";
import CustomerStoryCarousel from "@/components/sections/customer-story/components/customer-story-carousel";

// Styles
import styles from "@/styles/components/sections/customer-story.module.scss";

// Data
import { customerStoryData } from "@/data/customer-story-data";

export default function CustomerStory({
    theme = "light",
    eyebrow = "- Customer Story Component",
    data = customerStoryData || []
}) {
    return (

        <section className={`row ${styles.customerStory} ${theme === "dark" ? "sectionHasGradients" : undefined}`} data-theme={theme}>

            <div className="container noPaddingBottom">

                <Eyebrow text={eyebrow} />

            </div>

            {data.length > 0 && (

                <div className="container noPaddingTop">

                    <CustomerStoryCarousel theme={theme} data={data} />
                    
                </div>

            )}

        </section>

    )
}