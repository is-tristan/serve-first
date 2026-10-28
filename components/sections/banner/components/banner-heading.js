"use client";

// Components
import Eyebrow from "@/components/decoration/eyebrow";
import Text from "@/components/content/text";
import { usePageHeading } from "@/components/content/page-heading-provider";

export default function BannerHeading({ eyebrow, title, description, hasFullStop }) {

    const pageHeading = usePageHeading();

    return (

        <>

            {pageHeading ? (

                <Eyebrow text={pageHeading} hasDash={true} tag="h1" />

            ) : (

                eyebrow && (<Eyebrow text={eyebrow} hasDash={true} />)

            )}

            <Text
                hasFullStop={hasFullStop}
                headingClass={`pageTitle`}
                titleTag={pageHeading ? "div" : "h1"}
                title={title}
                description={description}
                descriptionClass={`fw400`}
            />

        </>

    );

}
