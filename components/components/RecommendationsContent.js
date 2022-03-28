import styles from "../styles/Content.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';

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
            <Box sx={{ flexGrow: 1 }}>
                    {/* {data.map((item, index) => (
                        <div key={index}>
                            <div className={styles.content}>
                                <div className={styles.image}>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className={styles.info}>
                                    <h3>{item.title}</h3>
                                    <p>{item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))} */}
            </Box>
        </div>
    )
}