import { useState } from "react";
import styles from "./styles/Content.module.css";
import * as md from "react-icons/md";

/*content statusFilter */
import { All, Bits, Slabs, Decks } from "./components";

/*Filtering*/
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

/*tags */
import Chip from '@mui/material/Chip';

/*responsive */
import { useMediaQuery } from "../../common";

function Tags({ changeColor }) {
    return (
        <>
            {/* TAGS */}
            <Stack direction="row" spacing={5} sx={{
                marginTop: "30px",
                marginBottom: "40px",
                '& span': {
                    fontFamily: "FormaDJR Bold",
                    fontSize: "12px",
                    color: "#54565A",
                }
            }}>
                <Chip label="Agilidad" onClick={changeColor} />
                <Chip label="SCRUM" onClick={changeColor} />
                <Chip label="Metodologías ágiles" onClick={changeColor} />
                <Chip label="Marcos de Trabajo" onClick={changeColor} />
            </Stack>
        </>
    )
}

export default function Content({ width = 16 }){
    const isIpad = useMediaQuery(1023);

    const [active, setActive] = useState(false);
    //TODO change color when clicked
    /* const [tag, setTag] = useState(false); */
    const [statusFilter, setStatusFilter] = useState('all');

    const handleClick = () => {
        setActive(!active);
    }

    const changeColor = () => {

    }

    return (
        <div className={styles.content}>
            <div className={isIpad ? styles.titleResponsive : styles.title }>
                <h1>Experiencias de Aprendizaje</h1>
                <div className={styles.searchContainer}>
                    <md.MdSearch size={20}/>
                    <input type="text" placeholder="Buscar" className={styles.search}/>
                </div>
            </div>
            <div className={styles.filters}>
                <Stack spacing={2} direction="row">
                    <Button 
                        sx={statusFilter === 'all' ?
                            ({
                                backgroundColor: '#0000AF',
                                color: 'white',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#0000AF'
                                },
                                padding: '5px 20px',
                                borderRadius: '10px',  
                            }):
                            ({
                                color: '#222222',
                                padding: '5px 20px',
                                borderRadius: '10px',
                            })
                        } 
                        variant="text"
                        onClick={() => {
                            setStatusFilter('all');
                        }}
                    >
                        Todos
                    </Button>
                    <Button 
                        sx={statusFilter === 'bits' ?
                            ({
                                backgroundColor: '#0000AF',
                                color: 'white',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#0000AF'
                                },
                                padding: '5px 20px',
                                borderRadius: '10px',  
                            }):
                            ({
                                color: '#222222',
                                padding: '5px 20px',
                                borderRadius: '10px',  
                            })
                        } 
                        variant="text"
                        onClick={() => {
                            setStatusFilter('bits');
                        }}
                        >
                            Bits
                    </Button>
                    <Button 
                        sx={statusFilter === 'slabs' ?
                            ({
                                backgroundColor: '#0000AF',
                                color: 'white',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#0000AF'
                                },
                                padding: '5px 20px',
                                borderRadius: '10px',  
                            }):
                            ({
                                color: '#222222',
                                padding: '5px 20px',
                                borderRadius: '10px',  
                            })
                        } 
                        variant="text"
                        onClick={() => {
                            setStatusFilter('slabs');
                        }}
                        >
                            Slabs
                    </Button>
                    <Button 
                        sx={statusFilter === 'decks' ?
                            ({
                                backgroundColor: '#0000AF',
                                color: 'white',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#0000AF'
                                },
                                padding: '5px 20px',
                                borderRadius: '10px',  
                            }):
                            ({
                                color: '#222222',
                                padding: '5px 20px',
                                borderRadius: '10px',
                            })
                        } 
                        variant="text"
                        onClick={() => {
                            setStatusFilter('decks');
                        }}
                        >
                            Decks
                    </Button>
                </Stack>
            </div>
            {/* son todos los contenidos de EA */}
            {statusFilter === 'all' ? 
                (
                    <All 
                        data={data}
                        active={active}
                        handleClick={handleClick}
                        width={width}
                    />
                ) : 
                ("")
            }
            {/* son los bits */}
            {statusFilter === 'bits' ?
                (
                    <>
                        <Tags changeColor={changeColor}/>
                        <Bits
                            data={data}
                            active={active}
                            handleClick={handleClick}
                            width={width}
                        />  
                    </>
                ) :
                ("")
            }
            {/* son los slabs */}
            {statusFilter === 'slabs' ?
                (
                    <>
                        <Tags changeColor={changeColor}/>
                        <Slabs
                            data={data}
                            active={active}
                            handleClick={handleClick}
                            width={width}
                        />
                    </>
                ) :
                ("")
            }
            {/* son los decks */}
            {statusFilter === 'decks' ?
                (
                    <>
                        <Tags changeColor={changeColor}/>
                        <Decks
                            data={data}
                            active={active}
                            handleClick={handleClick}
                            width={width}
                        />
                    </>
                ) :
                ("")
            }
        </div>
    )
}

const data = [
    {
        template: 'gray',
        title: "Fundamentos de Scrum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
        time: "8 min",
        image: "/learning/gray.svg",
    },
    {
        template: 'white',
        title: "Conceptos básicos del marketing digital",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
        modules: "16",
        time: "8 min",
        image: "/learning/white.svg",
    },
    {
        template: 'black',
        title: "Fundamentos de Scrum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
        time: "8 hrs",
        image: "/learning/black.svg",
    },
    {
        template: 'blue',
        title: "Fundamentos de Scrum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
        time: "8 hrs",
        image: "/learning/blue.svg",
    },
]