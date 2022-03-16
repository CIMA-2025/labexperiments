import styles from "../styles/Content.module.css";
import * as md from "react-icons/md";

export default function LearningContent() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Experiencias de Aprendizaje</h2>
                <a href="#" className={styles.seeMore}>
                    Ver más
                    <md.MdArrowForwardIos />
                </a>
            </div>
        </div>
    )
}