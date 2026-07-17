// Data
import { challengeFrameData } from "@/data/challenge-frame-data";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import ChallengeFrameItem from "@/components/sections/challenge-frame/components/challenge-frame-item";

// Styles
import styles from "@/styles/components/sections/challenge-frame.module.scss";

export default function ChallengeFrame({
    eyebrow = "- Challenge Frame Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description,
    hasFullStop = true,
    data = challengeFrameData || []
}) {
    return (

        <section className={`row ${styles.challengeFrame}`}>

            <div className="container noPaddingBottom">

                <div className={`content`}>

                    {eyebrow && (<Eyebrow text={eyebrow} />)}

                    {title && (<Text headingClass={`sectionTitle sectionTitleContained darkHeadingGradient`} title={title} hasFullStop={hasFullStop} />)}

                    {description && (<Text description={description} />)}

                </div>

            </div>

            {data.length > 0 && (

                <div className="container flexAuto noPaddingTop">

                    {data.map((item, index) => (

                        <ChallengeFrameItem
                            key={index}
                            index={index}
                            eyebrow={item.eyebrow}
                            title={item.title}
                            subheading={item.subheading}
                            description={item.description}
                            tags={item.tags}
                            button={item.button} />
                    ))}

                </div>

            )}

        </section>

    )

}
