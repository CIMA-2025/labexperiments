
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
                <LearningContent data={data} littles={true} />
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