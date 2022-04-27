import Grid from '@mui/material/Grid';
import { Blue, Gray, White, Black } from "./";

/*Responsive*/
import Slider from "react-slick";
import { useMediaQuery } from "../../../common";

function Arrow({ className, style }) {
    return (
      <div
        className={className}
        style={{ ...style, display: 'none'}}
      />
    )
}

export default function GridTemplate({ data, handleClick, active, width = 16 }) {
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
        prevArrow: <Arrow />,
        nextArrow: <Arrow />,
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
        <>
            {!isIpad ? (
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
        </>
    )
}