import styles from "./styles/Content.module.css";
import { LearningContent } from "./components";

export default function Content() {
    return(
        <>
            <div className={styles.content}>
                <img src="samurai.svg" alt="samurai"/>
                <LearningContent />
            </div>
        </>
    )
}