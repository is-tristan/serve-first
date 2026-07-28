// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import Button from "@/components/handlers/buttons";
import FormCol from "@/components/screens/lp/lp-banner/componets/form-col";
import Checklist from "@/components/screens/lp/lp-banner/componets/checklist";

// Styles
import styles from "@/styles/components/sections/banner.module.scss";
import lpStyles from "@/styles/components/screens/lp/lp.module.scss";

// Background Decorations
import bdTr from "@/public/backgrounds/banner/banner-decoration-top-right.svg";
import bdBl from "@/public/backgrounds/banner/banner-decoration-bottom-left.svg";
export default function LpBanner({
    eyebrow = "- LP Banner Component",
    title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>",
    checkList = [],
    bannerType = "lp",
    hasButtons = true,
    hasFullStop = true,
    hasBackgroundDecoration = true,
    formBtnText = "Show me my sites",
    hasDemoLink = true,
    formSmallText,
    formType,
    buttonPrimary = {
        text: "Get a demo",
        href: "/get-a-demo",
    },
    buttonSecondary = {
        text: "Talk to us",
        href: "/company/contact-us",
    },
}) {

    return (

        <section
            id="banner"
            className={`row bgLightAlt ${styles.banner} ${lpStyles.lpBanner} ${styles.className}`}
            data-background-decoration={hasBackgroundDecoration ? "true" : "false"}
            data-banner-type={bannerType}
            data-name="banner"
        >

            <div className={`container dualCols ${styles.bannerContainer} ${lpStyles.lpBannerContainer}`}>

                <div className={`contentCol ${styles.contentCol}`}>

                    <div className="content">

                        {eyebrow && (<Eyebrow text={eyebrow} />)}

                        <Text
                            hasFullStop={hasFullStop}
                            headingClass={`pageTitle`}
                            titleTag="h1"
                            title={title}
                            description={description}
                            descriptionClass={`fw400`}
                        />

                        {checkList.length > 0 && (

                            <Checklist checkList={checkList} />

                        )}

                        {hasButtons && (

                            <div className={`buttons ${styles.bannerButtons}`}>

                                {buttonPrimary.text && (

                                    <Button
                                        text={buttonPrimary.text}
                                        href={buttonPrimary.href}
                                        className="primary"
                                    />

                                )}

                                {buttonSecondary.text && (

                                    <Button
                                        text={buttonSecondary.text}
                                        href={buttonSecondary.href}
                                        className="textLink fw500 colorPrimary"
                                        delay={1}
                                    />

                                )}


                            </div>

                        )}

                    </div>

                </div>

                <FormCol formBtnText={formBtnText} formSmallText={formSmallText} formType={formType} hasDemoLink={hasDemoLink} />

            </div>

            {hasBackgroundDecoration && (

                <>

                    <div className={`${styles.backgroundDecoration} ${styles.bdTr}`} style={{ backgroundImage: `url(${bdTr.src})` }} />

                    <div className={`${styles.backgroundDecoration} ${styles.bdBl}`} style={{ backgroundImage: `url(${bdBl.src})` }} />

                </>

            )}

        </section>

    );

}