import { useState } from "react";
import Link from "next/link";
import styles from "../index/styles/Content.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';

import { useMediaQuery } from "../../common";
import Slider from "react-slick";

import { GridTemplate } from "./components";


function Arrow({ className, style }) {
    return (
      <div
        className={className}
        style={{ ...style, display: 'none'}}
      />
    )
}

export default function LearningContent({data, width = 16}) {
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
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
                <Link href="/ea">
                    <a href="#" className={styles.seeMore}>
                        Ver más
                        <md.MdArrowForwardIos />
                    </a>
                </Link>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                {!isIpad ? (
                    <GridTemplate
                        data={data}
                        handleClick={handleClick}
                        active={active}
                        width={16}
                    />
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
                                        little={true}
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


