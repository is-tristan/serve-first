// Next
import Image from "next/image";

// Styles
import styles from "@/styles/components/screens/products/vision/components/problem-solution-section.module.scss";

const tabImageMain = "/images/vision/problem-solution/problem-solution-image-frame.png";
const tabImageZoomed = "/images/vision/problem-solution/problem-solution-frame-issue-detected-zoomed.png";
const tabImageDetectedFrame = "/images/vision/problem-solution/problem-solution-frame-issue-detected-frame-only.png";
const tabImageDetectedText = "/images/vision/problem-solution/problem-solution-frame-issue-detected-frame-text-only.png";
const tabImageDetectedTextPrompt = "/images/vision/problem-solution/problem-solution-frame-issue-detected-text.png";
const tabImageDetectedFull = "/images/vision/problem-solution/problem-solution-frame-issue-detected.png";
const tabImageDetectedFullPrompt = "/images/vision/problem-solution/problem-solution-frame-issue-detected-full-text.png";

export default function TabImages() {

    return (

        <div className={styles.tabImageContainer}>

            <Image
                src={tabImageMain}
                alt="Video analytics software auto-raising a shelf restock task after detecting an empty retail shelf"
                fill
                sizes="(max-width: 1023px) calc(100vw - 3.5rem), min(60vw, 720px)"
                className={`${styles.tabImage} ${styles.tabImageMain}`}
            />

            <Image
                src={tabImageZoomed}
                alt={'Video analytics camera view of a retail aisle and checkout, faces blurred for privacy'}
                fill
                sizes="(max-width: 1023px) calc(100vw - 3.5rem), min(60vw, 720px)"
                className={`${styles.tabImage} ${styles.tabImageZoomed}`}
            />

            <Image
                src={tabImageDetectedFrame}
                alt="AI video analytics monitoring retail shelf stock and till queue"
                fill
                sizes="(max-width: 1023px) calc(100vw - 3.5rem), min(60vw, 720px)"
                className={`${styles.tabImage} ${styles.tabImageDetectedFrame}`}
            />

            <Image
                src={tabImageDetectedText}
                alt={'Video analytics frame with issue detected label'}
                fill
                sizes="(max-width: 1023px) calc(100vw - 3.5rem), min(60vw, 720px)"
                className={`${styles.tabImage} ${styles.tabImageDetectedText}`}
            />

            <Image
                src={tabImageDetectedTextPrompt}
                alt={'Video analytics frame with prompted text to raise a restock task'}
                fill
                sizes="(max-width: 1023px) calc(100vw - 3.5rem), min(60vw, 720px)"
                className={`${styles.tabImage} ${styles.tabImageDetectedTextPrompt}`}
            />

            <Image
                src={tabImageDetectedFull}
                alt={'Video analytics issue detected frame zoomed in on an issue'}
                fill
                sizes="(max-width: 1023px) calc(100vw - 3.5rem), min(60vw, 720px)"
                className={`${styles.tabImage} ${styles.tabImageDetectedFull}`}
            />

            <Image
                src={tabImageDetectedFullPrompt}
                alt="Video analytics camera view of a retail aisle and checkout, faces blurred for privacy"
                fill
                sizes="(max-width: 1023px) calc(100vw - 3.5rem), min(60vw, 720px)"
                className={`${styles.tabImage} ${styles.tabImageDetectedFullPrompt}`}
            />

        </div>

    );

}
