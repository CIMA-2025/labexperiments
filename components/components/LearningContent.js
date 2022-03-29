import { useState } from "react";
import styles from "../index/styles/Content.module.css";
import stylesLearning from "./styles/LearningContent.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Blue, Gray, White, Black } from "./components";

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
                                <Gray
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                />
                            )}
                            {data.template === "white" && (
                                <White
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                />
                            )}
                            {data.template === "black" && (
                                <Black
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                />
                            )}
                            {data.template === "blue" && (
                                <Blue
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                />
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