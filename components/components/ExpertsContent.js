import styles from "../index/styles/Content.module.css";
import expertsStyles from "./styles/ExpertsContent.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useMediaQuery } from "../../common";

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
    const isIpad = useMediaQuery(1023);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Expertos</h2>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={!isIpad ? {xs: 2, sm: 8, md: 12 } : {xs: 2, sm: 4, md: 4 }}>
                    {experts.map((experts, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <div className={!isIpad ? expertsStyles.content : expertsStyles.contentBreakpoint}>
                                <div className={expertsStyles.image}>
                                    <img src={experts.image} alt={experts.name} />
                                </div>
                                {!isIpad ? (
                                    <>
                                        <h3>{experts.name}</h3>
                                        <p>{experts.description}</p>
                                        <a href="#" className={expertsStyles.moreInfo}>
                                            Más info
                                            <md.MdArrowForwardIos />
                                        </a>
                                    </>
                                ) : (
                                    <div className={expertsStyles.text}>
                                        <h3 className={expertsStyles.name}>{experts.name}</h3>
                                        <p className={expertsStyles.bio}>{experts.description}</p>
                                        <a href="#" className={expertsStyles.moreInfo}>
                                            Más info
                                            <md.MdArrowForwardIos />
                                        </a>
                                    </div>

                                )}
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}