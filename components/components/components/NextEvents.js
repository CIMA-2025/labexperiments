import styles from "./styles/Events.module.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useMediaQuery } from '../../../common'

export default function NextEvents(){
    const isIpad = useMediaQuery(1023);

    return(
        <div className={styles.container + " " + (isIpad ? styles.mobile : styles.nextEvents)}>
            <h2>Próximos eventos</h2>
            {data.filter(data => data.category === "Event").map(data => (
                <div key={data.id} className={styles.event}>
                    <div className={styles.date}>
                        <h3 className={styles.day}>{data.date.split(" ")[0]}</h3>
                        <h3>{data.date.split(" ")[1]}</h3>
                    </div>
                    <div className={styles.content}>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                </div>
            ))}
            <h2>Conferencias</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }}>
                    {data.filter(data => data.category === "Conference").map((data, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <div className={styles.conference}>
                                <span className={styles.date}>{data.date}</span>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

const data = [
    {
        category: "Event",
        title: "Evento 1",
        date: "12 febrero",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
    },
    {
        category: "Event",
        title: "Evento 2",
        date: "28 febrero",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
    },
    {
        category: "Conference",
        title: "Conferencia 1",
        date: "28/feb  5:00pm",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
    {
        category: "Conference",
        title: "Conferencia 2",
        date: "28/feb  5:00pm",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Sed diam nonummy nibh euismod tincidunt ut laoreet.",
    },
]