import styles from "./styles/Content.module.css";
import { 
    LearningContent, 
    RecommendationsContent ,
    CategoriesContent,
    ExpertsContent,
    EventsContent,
} from "../components";

export default function Content() {
    return(
        <>
            <div className={styles.content}>
                <img src="samurai.svg" alt="samurai"/>
                <LearningContent data={data}/>
                <RecommendationsContent />
                <EventsContent />
                <CategoriesContent />
                <ExpertsContent />
            </div>
        </>
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
    },
    {
        template: 'black',
        title: "Fundamentos de Scrum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
        time: "8 hrs",
        image: "/learning/black.svg",
    },
    {
        template: 'blue',
        title: "Fundamentos de Scrum",
        time: "8 hrs",
        image: "/learning/blue.svg",
    },
]