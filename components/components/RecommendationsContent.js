import styles from "../index/styles/Content.module.css";
import * as md from "react-icons/md";
import { CarouselComponent } from "./components";

import Box from '@mui/material/Box';
import { Recomendation } from "./components";

const data = [
    {
        id: 1,
        type: "Bit",
        title: "¿Qué es una base de datos Relacional y qué es MySQL?",
        time: "8 min",
        image: "https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668__340.jpg",
    },
    {
        id: 2,
        type: "Slab",
        title: "Agilidad",
        time: "8 min",
        image: "/recommendations/FOTOS-03.svg",
    },
    {
        id: 3,
        type: "Deck",
        title: "Base de Datos",
        time: "8 min",
        image: "/recommendations/FOTOS-04.svg",
    },
    {
        id: 4,
        type: "Slab",
        title: "Agilidad",
        time: "8 min",
        image: "/recommendations/FOTOS-06.svg",
    },
    {
        id: 1,
        type: "Bit",
        title: "¿Qué es una base de datos Relacional y qué es MySQL?",
        time: "8 min",
        image: "https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668__340.jpg",
    },
    {
        id: 2,
        type: "Slab",
        title: "Agilidad",
        time: "8 min",
        image: "/recommendations/FOTOS-03.svg",
    },
    {
        id: 3,
        type: "Deck",
        title: "Base de Datos",
        time: "8 min",
        image: "/recommendations/FOTOS-04.svg",
    },
    {
        id: 4,
        type: "Slab",
        title: "Agilidad",
        time: "8 min",
        image: "/recommendations/FOTOS-06.svg",
    },

];


export default function RecommendationsContent() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Recomendaciones para ti</h2>
                <a href="#" className={styles.seeMore}>
                    Ver más
                    <md.MdArrowForwardIos />
                </a>
            </div>
            <div className={styles.carousel}>
                <CarouselComponent data={data} />
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Recomendation />
            </Box>
        </div>
    )
}