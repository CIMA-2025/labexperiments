import Grid from '@mui/material/Grid';
import { WhiteSlabs, BlueSlabs, GraySlabs, BlackSlabs } from './slabsTemplate';

export default function Slabs({ data, active, handleClick, width=12 }){
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
                                <GraySlabs
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                />
                            )}
                            {data.template === "white" && (
                                <WhiteSlabs
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                />
                            )}
                            {data.template === "black" && (
                                <BlackSlabs
                                    handleClick={handleClick}
                                    active={active}
                                    data={data}
                                />
                            )}
                            {data.template === "blue" && (
                                <BlueSlabs
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