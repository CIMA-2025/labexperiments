
import styles from "./styles/content.module.css"
import LearningContent from '../components/LearningContent'
import  Profile  from "../components/components/Profile"

export default function Content() {

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <Profile />
            </div>
            <div className={styles.learning}>
                <LearningContent littles={true} />
            </div>
        </div>

    )
}