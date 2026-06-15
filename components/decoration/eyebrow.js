// Styles
import styles from "@/styles/components/decoration/eyebrow.module.scss";

export default function Eyebrow({ type = "primary", textColor = "primary", text }) {

    return (

        <div className={styles.eyebrow} data-type={type} data-text-color={textColor}>

            {text && (

                <span className={`${styles.text}`}>

                    {text}

                </span>

            )}

        </div>
    )
}