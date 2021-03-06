import styles from "./styles/content.module.css"
import LearningContent from '../components/LearningContent'
import Profile from "../components/components/Profile"
import { useMediaQuery } from "../../common"

export default function Content() {

    const isIpad = useMediaQuery(1023)
    return (
        <div className={styles.container + " " + (isIpad && styles.movil)}>
            <div className={styles.profile}>
                <Profile />
            </div>
            <div className={styles.learning}>
                <LearningContent data={data} width={8} />
            </div>
        </div>

    )
}

const data = [
    {
        template: 'gray',
        title: "Fundamentos de Scrum",
        time: "8 min",
        image: "/learning/gray.svg",
    },
    {
        template: 'white',
        title: "Conceptos básicos del marketing digital",
        modules: "16",
        time: "8 min",
        image: "/learning/white.svg",
    }
]