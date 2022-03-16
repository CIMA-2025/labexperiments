import styles from "../styles/Content.module.css";
import * as md from "react-icons/md";


const data = [
    {
        type: "Bit",
        title: "¿Qué es una base de datos Relacional y qué es MySQL?",
        time: "8 min",
        image: "https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668__340.jpg",
    },
    {
        type: "Bit",
        title: "¿Qué es una base de datos Relacional y qué es MySQL?",
        time: "8 min",
        image: "https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668__340.jpg",
    },
    {
        type: "Bit",
        title: "¿Qué es una base de datos Relacional y qué es MySQL?",
        time: "8 min",
        image: "https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668__340.jpg",
    },
    {
        type: "Bit",
        title: "¿Qué es una base de datos Relacional y qué es MySQL?",
        time: "8 min",
        image: "https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668__340.jpg",
    },
    {
        type: "Bit",
        title: "¿Qué es una base de datos Relacional y qué es MySQL?",
        time: "8 min",
        image: "https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668__340.jpg",
    },
];


export default function RecommendationsContent(){
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Recomendaciones para ti</h2>
                <a href="#" className={styles.seeMore}>
                    Ver más
                    <md.MdArrowForwardIos/>
                </a>
            </div>
        </div>
    )
}