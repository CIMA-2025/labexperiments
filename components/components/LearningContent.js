import { useState } from "react";
import styles from "../index/styles/Content.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Blue, Gray, White, Black } from "./components";

export default function LearningContent({data, littles}) {
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
                                    little={littles}
                                />
                            )}
                            {data.template === "white" && (
                                <White
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                    little={littles}
                                />
                            )}
                            {data.template === "black" && (
                                <Black
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                    little={littles}
                                />
                            )}
                            {data.template === "blue" && (
                                <Blue
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                    little={littles}
                                />
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}


