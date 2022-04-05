import styles from "../index/styles/Content.module.css";
import categoryStyles from "./styles/CategoriesContent.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useMediaQuery } from "../../common";
import Slider from "react-slick";

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
    const isIpad = useMediaQuery(1023);

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
                <h2>Categorías</h2>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                {!isIpad ? (
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }}>
                        {categories.map((category, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <div className={categoryStyles.categories}>
                                    <h3>{category.name}</h3>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Slider {...settings} >
                        {categories.map((category, index) => (
                            <>
                                <div key={index} className={categoryStyles.categories}>
                                    <h3>{category.name}</h3>
                                </div>
                            </>
                        ))}
                    </Slider>
                )}
            </Box>
        </div>
    )
}

function RightArrow({ className, style, onClick }) {
    return (
      <md.MdArrowForwardIos
        className={className}
        style={{...style, width: '25px', height: 'auto', color: '#54565A'}}
        onClick={onClick}/>
    )
}
  
function LeftArrow({ className, style, onClick }) {
    return (
      <md.MdArrowForwardIos
        className={className}
        style={{...style, width: '25px', height: 'auto', color: '#54565A', transform: 'rotate(180deg)'}}
        onClick={onClick}/>
    )
}
  