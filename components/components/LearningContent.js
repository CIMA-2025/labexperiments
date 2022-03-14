import styles from "./styles/LearningContent.module.css";
import * as md from "react-icons/md";

export default function LearningContent() {
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <h2>Experiencias de Aprendizaje</h2>
                <a href="#">
                    Ver mas
                    <md.MdArrowForwardIos />
                </a>
            </div>
        </div>
    )
}