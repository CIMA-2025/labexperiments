import Grid from '@mui/material/Grid';
import { Gray, Blue, Black, White } from "../../components/components";

export default function Decks({ data, active, handleClick, width=12 }){
    return(
        <>
            <Grid container spacing={{ xs: 2, md: 12 }} columns={{ xs: 4, sm: 8, md: width }}
                sx={{
                    marginBottom: "20px"
                }}
            >
                    {data.map((data, index) => (
                        <Grid item xs={2} sm={4} md={5} key={index}>
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
        </>
    )
}