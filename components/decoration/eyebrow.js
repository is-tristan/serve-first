// Styles
import styles from "@/styles/components/decoration/eyebrow.module.scss";

export default function Eyebrow({ type = "primary", filledColor = "secondary", filledText, textColor = "primary", text }) {

    return (

        <div className={styles.eyebrow} data-type={type}>

            {filledText && (

                <span className={`${styles.filled}`} data-filled-color={filledColor}>

                    {filledText}

                </span>

            )}

            {text && (

                <span className={`${styles.text}`} data-text-color={textColor}>

                    {text}

                </span>

            )}

        </div>
    )
}