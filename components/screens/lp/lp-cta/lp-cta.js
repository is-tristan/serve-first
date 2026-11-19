// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import FormLanding from "@/components/handlers/forms/form-landing";
import Image from "next/image";

// Styles
import styles from "@/styles/components/screens/lp/lp.module.scss";

export default function LpCta({
    type="terminals",
    eyebrow = "Customer feedback kiosks",
    title = "Book your personalized platform demo today",
    description = "Tell us a little about your operation and we'll tailor the whole walkthrough to what you need to see.",
    image = "/images/lp/terminals/lp-terminals-cta.png",
    formBtnText = "Request my demo",
    hasDemoLink = false,
    formSmallText,
    formType = "landing",
    formName = "landing page form",
    utmMedium,
}) {

    return (

        <section
            id="book-demo"
            className={`row bgPrimaryAlt ${styles.lpCta}`}
            data-name="lpCta"
            data-type={type}
        >

            <div className="container dualCols">

                <div className={`contentCol`}>

                    <Eyebrow text={eyebrow} hasDash={true} textColor="colorLightAlt" />

                    <Text
                        title={title}
                        hasFullStop={false}
                        headingClass={`sectionTitle colorLightAlt`}
                        description={description}
                        descriptionClass={`fw700 colorLight`}
                    />

                    <div className={`formCol ${styles.formCol}`}>

                        <FormLanding theme="light" formBtnText={formBtnText} formSmallText={formSmallText} formName={formName} hasDemoLink={hasDemoLink} utmMedium={utmMedium} />

                    </div>

                </div>

                <div className={`spacerCol hidden-s hidden-m hidden-l`} />

            </div>

            <div className={`${styles.bgImage} hidden-s hidden-m hidden-l`}>

                {Image && (

                    <Image
                        src={image}
                        alt={title}
                        width={1024}
                        height={1024}
                        sizes="(max-width: 1024px) 0%, 1024px"
                        loading="lazy"
                    />

                )}

            </div>

        </section>

    )

}