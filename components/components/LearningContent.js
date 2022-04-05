import { useState } from "react";
import styles from "../index/styles/Content.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useMediaQuery } from "../../common";
import Slider from "react-slick";

import { Blue, Gray, White, Black } from "./components";

export default function LearningContent({data}) {
    const isIpad = useMediaQuery(1023);

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

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
                {!isIpad ? (
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
                ) : (
                    <Slider {...settings} >
                        {data.map((data, index) => (
                            <>
                                {data.template === "gray" && (
                                    <Gray
                                        key={index}
                                        handleClick={handleClick}
                                        active={active}
                                        data={data}
                                        little={true}
                                    />

                                )}
                                {data.template === "white" && (
                                    <White
                                        key={index}
                                        handleClick={handleClick}
                                        active={active}
                                        data={data}
                                        little={true}
                                    />
                                )}
                                {data.template === "black" && (
                                    <Black
                                        key={index}
                                        handleClick={handleClick}
                                        active={active}
                                        data={data}
                                        little={true}
                                    />
                                )}
                                {data.template === "blue" && (
                                    <Blue
                                        key={index}
                                        handleClick={handleClick}
                                        active={active}
                                        data={data}
                                    />
                                )}
                            </>
                        ))}
                    </Slider>
                )}
            </Box>
        </div>
    )
}


