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
                <LearningContent />
                <RecommendationsContent />
                <EventsContent />
                <CategoriesContent />
                <ExpertsContent />
            </div>
        </>
    )
}