// Next
import Image from "next/image";

// Components
import Button from "@/components/handlers/buttons";
import ReviewerInitials from "@/components/misc/reviewer-initials";

// Styles
import styles from "@/styles/components/sections/customer-story.module.scss";

// Icons
import { quoteIcon } from "@/utils/icons";

// Utils
import { useNumberCounter } from "@/helpers/number-counter";

export default function CustomerStoryItem({ item = {} }) {

    const currentNumber = useNumberCounter({
        startNumber: Number(item.statItems[0].startNumber),
        endNumber: Number(item.statItems[0].endNumber),
        isActive: true,
        duration: 2000
    });

    return (

        <div className={styles.customerStoryItem}>

            <div className={styles.contentCol}>

                <div className={styles.customerStoryMeta}>

                    <Image src={item.companyImage} alt={item.companyName} width={48} height={48} />

                    <div className={styles.customerStoryMetaItems}>

                        <h3>{item.companyName}</h3>

                        <p>{item.companyIndustry}</p>

                    </div>

                </div>

                <div className={styles.customerStoryItemContent}>

                    <div className={styles.customerStoryItemQuote} dangerouslySetInnerHTML={{ __html: quoteIcon }} />

                    <p>{item.reviewerQuote}</p>

                </div>

                <div className={styles.customerStoryMeta}>

                    {item.reviewerImage ? (

                        <Image src={item.reviewerImage} alt={item.reviewerName} width={48} height={48} />

                    ) : (

                        <ReviewerInitials name={item.reviewerName} />

                    )}

                    <div className={styles.customerStoryMetaItems}>

                        <h3>{item.reviewerName}</h3>

                        <p>{item.reviewerPosition}</p>

                    </div>

                </div>

            </div>

            <div className={styles.statsCol}>

                <h4>{item.statsHeading}</h4>

                {item.statItems.length > 0 && (

                    <div className={styles.statsItems}>

                        {item.statItems.map((statItem, index) => (

                            <div key={index} className={styles.statsItem}>

                                <div className={styles.statsItemNumber}>

                                    <span>{statItem.numberPrefix}</span>

                                    <span>{currentNumber}</span>

                                    <span>{statItem.numberSuffix}</span>

                                </div>

                                {statItem.description && (<p>{statItem.description}</p>)}

                            </div>

                        ))}

                    </div>

                )}

                <div className={styles.statsButton}>

                    {item.button && (<Button text={item.button.text} href={item.button.href} target={item.button.target} className="textLink colorPrimary" hasAnimation={false} />)}

                </div>

            </div>

        </div>

    )

}