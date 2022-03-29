import styles from "../index/styles/Content.module.css";
import categoryStyles from "./styles/CategoriesContent.module.css";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const categories = [
    {
        name: 'Innovación',
    },
    {
        name: 'Marketing',
    },
    {
        name: 'Fotografía',
    },
    {
        name: 'Diseño',
    },
    {
        name: 'Lifestyle',
    },
    {
        name: 'Innovación',
    },
    {
        name: 'Marketing',
    },
    {
        name: 'Fotografía',
    },
    {
        name: 'Diseño',
    },
    {
        name: 'Lifestyle',
    },
]

export default function CategoriesContent() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Categorías</h2>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
                    {categories.map((category, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <div className={categoryStyles.categories}>
                                <h3>{category.name}</h3>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}