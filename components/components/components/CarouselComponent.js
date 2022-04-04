import Slider from "react-slick";
import styles from "./styles/CarouselComponent.module.css";
import * as md from "react-icons/md";

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

export default function CarouselComponent({ data }){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
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
      <div className={styles.carousel}>
        <Slider {...settings} >
            {data.map(data => (
              <>
                  {(function() {
                    switch(data.type){
                      case "Bit":
                        return (
                          <div key={data.id} className={styles.container + " " + styles.bit }>
                            <div className={styles.type}>
                              <div className={styles.label}>
                                <md.MdArrowForwardIos />
                                <span>Bit</span>
                              </div>
                            </div>
                            <div className={styles.title}>
                              <h3>{data.title}</h3>
                              <img src={data.image} alt={data.title} />
                            </div>
                            <div className={styles.bottom}>
                              <img src="/Icons-Clock.svg" alt="time" />
                              <span>{data.time}</span>
                            </div>
                          </div>  
                        )
                      case "Slab":
                        return (
                          <div key={data.id} className={styles.container + " " + styles.slab}>
                             <div className={styles.type}>
                              <div className={styles.label}>
                                <md.MdArrowForwardIos />
                                <span>Slab</span>
                              </div>
                            </div>
                            <img className={styles.image} src={data.image} alt={data.title} />
                            <div className={styles.title}>
                              <h3>{data.title}</h3>
                              <div className={styles.bottom}>
                                  <img src="/Icons-Clock.svg" alt="time" />
                                  <span>{data.time}</span>
                              </div>
                            </div>
                          </div>
                        )
                      case "Deck":
                        return (
                          <div key={data.id} className={styles.container + " " + styles.deck}>
                            <div className={styles.type}>
                              <div className={styles.label}>
                                <md.MdArrowForwardIos />
                                <span>Deck</span>
                              </div>
                            </div>
                            <img className={styles.image} src={data.image} alt={data.title} />
                            <div className={styles.title}>
                              <h3>{data.title}</h3>
                              <div className={styles.bottom}>
                                  <img src="/Icons-Clock.svg" alt="time" />
                                  <span>{data.time}</span>
                              </div>
                            </div>
                          </div>
                        )
                      default:
                        return null;
                    }
                  })()}
              </>
            ))}
        </Slider>
      </div>
    )
}