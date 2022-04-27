import styles from "./styles/Content.module.css";
import { 
    LearningContent, 
    RecommendationsContent ,
    CategoriesContent,
    ExpertsContent,
    EventsContent,
} from "../components";
import { useMediaQuery } from "../../common"


export default function Content() {
    const isIpad = useMediaQuery(1023);
    return(
        <>
            <div className={styles.content + " " + (isIpad && styles.movil)}>
                <img src="samurai.svg" alt="samurai" className={(isIpad ? styles.samurai : "")}/>
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
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
        time: "8 min",
        image: "/learning/gray.svg",
    },
    {
        template: 'white',
        title: "Conceptos básicos del marketing digital",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
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
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
        time: "8 hrs",
        image: "/learning/blue.svg",
    },
]