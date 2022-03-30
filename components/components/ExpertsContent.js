import styles from "../index/styles/Content.module.css";
import expertsStyles from "./styles/ExpertsContent.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const experts = [
    {
        name: "Juan Perez",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
        image: "/experts/01.svg"
    },
    {
        name: "Juana Mala",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
        image: "/experts/02.svg"
    },
    {
        name: "Juanito chiquito",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
        image: "/experts/03.svg"
    },
]


export default function ExpertsContent(){
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Expertos</h2>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    {experts.map((experts, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <div className={expertsStyles.content}>
                                <div className={expertsStyles.image}>
                                    <img src={experts.image} alt={experts.name} />
                                </div>
                                <h3>{experts.name}</h3>
                                <p>{experts.description}</p>
                                <a href="#" className={expertsStyles.moreInfo}>
                                    Más info
                                    <md.MdArrowForwardIos />
                                </a>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}