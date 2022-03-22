import { useState } from "react";
import styles from "../styles/Content.module.css";
import stylesLearning from "./styles/LearningContent.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function LearningContent() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Experiencias de Aprendizaje</h2>
                <a href="#" className={styles.seeMore}>
                    Ver más
                    <md.MdArrowForwardIos />
                </a>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {data.map((data, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            {data.template === "gray" && (
                                <div className={stylesLearning.component + " " + stylesLearning.gray}>
                                    <img 
                                        className={stylesLearning.bookmark} 
                                        onClick={handleClick} 
                                        src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
                                    />
                                    <div className={stylesLearning.image}>
                                        <img src={data.image} alt={data.title} />
                                    </div>
                                    <div className={stylesLearning.content}>
                                        <h3>{data.title}</h3>
                                        <div className={stylesLearning.bottom}>
                                            <img className={stylesLearning.iconPink} src="/Icons-Lecture.svg" alt="time" />
                                            <span>{data.time}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {data.template === "white" && (
                                <div className={stylesLearning.component + " " + stylesLearning.white}>
                                    <img 
                                        className={stylesLearning.bookmark} 
                                        onClick={handleClick} 
                                        src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
                                    />
                                    <div className={stylesLearning.image}>
                                        <img src={data.image} alt={data.title} />
                                    </div>
                                    <div className={stylesLearning.content}>
                                        <h3>{data.title}</h3>
                                        <div className={stylesLearning.bottom}>
                                            <div>
                                                <img className={stylesLearning.iconPink} src="/Icons-Lecture.svg" alt="time" />
                                                <span>Módulos: {data.modules}</span>
                                            </div>
                                            <div>
                                                <img className={stylesLearning.iconPink} src="/Icons-Clock.svg" alt="time" />
                                                <span>{data.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {data.template === "black" && (
                                <div className={stylesLearning.component + " " + stylesLearning.black}>
                                    <img 
                                        className={stylesLearning.bookmark} 
                                        onClick={handleClick} 
                                        src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
                                    />
                                    <div className={stylesLearning.image}>
                                        <img src={data.image} alt={data.title} />
                                    </div>
                                    <div className={stylesLearning.content}>
                                        <h3>{data.title}</h3>
                                        <p>{data.description}</p>
                                        <div className={stylesLearning.bottom}>
                                            <img className={stylesLearning.iconPink} src="/Icons-Clock.svg" alt="time" />
                                            <span>{data.time}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {data.template === "blue" && (
                                <div className={stylesLearning.component + " " + stylesLearning.blue}>
                                    <img 
                                        className={stylesLearning.bookmark} 
                                        onClick={handleClick} 
                                        src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
                                    />
                                    <img className={stylesLearning.flower} src="/pink-flowers.svg" alt="flowers" />
                                    <div className={stylesLearning.imageContainer}>
                                        <img src={data.image} alt={data.title} />
                                    </div>
                                    <div className={stylesLearning.content}>
                                        <h3>{data.title}</h3>
                                        <div className={stylesLearning.bottom}>
                                            <img className={stylesLearning.iconPink} src="/Icons-Lecture.svg" alt="time" />
                                            <span>{data.time}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Box>
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