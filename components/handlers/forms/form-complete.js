// Components
import Text from "@/components/content/text";

// Styles
import styles from "@/styles/components/handlers/form.module.scss";

// Icons
import { checkmark } from "@/utils/icons";

export default function FormComplete({ onSendAnother }) {

    return (

        <div className={styles.formComplete}>

            <div className={styles.icon} dangerouslySetInnerHTML={{ __html: checkmark }} />

            <Text
                alignment="center"
                title="Form sent successfully"
                description="Thank you for your submission. We will get back to you as soon as possible."
                hasAnimation={false}
            />

            <button type="button" className={`btn primary ${styles.btn}`} onClick={onSendAnother}>

                <span>Send another message?</span>

            </button>

        </div>

    );

}
