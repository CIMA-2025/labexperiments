import Grid from '@mui/material/Grid';
import { Blue, Gray, White, Black } from "./";

export default function GridTemplate({ data, handleClick, active, width = 16 }) {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: width }}>
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
    )
}