import { useState } from "react";
import Link from "next/link";
import styles from "./styles/Content.module.css";
import * as md from "react-icons/md";

/*Grid*/
import { GridTemplate } from "../components/components";

/*Filtering*/
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

/*responsive */
import { useMediaQuery } from "../../common";

export default function Content({ width = 16 }){
    const isIpad = useMediaQuery(1023);

    const [active, setActive] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');

    const handleClick = () => {
        setActive(!active);
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
                        sx={statusFilter === '' ?
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
                            setStatusFilter('');
                        }}
                    >
                        Todos
                    </Button>
                    <Button 
                        sx={statusFilter === 'pending' ?
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
                            setStatusFilter('pending');
                        }}
                        >
                            Bits
                    </Button>
                    <Button 
                        sx={statusFilter === 'in progress' ?
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
                            setStatusFilter('in progress');
                        }}
                        >
                            Slabs
                    </Button>
                    <Button 
                        sx={statusFilter === 'done' ?
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
                            setStatusFilter('done');
                        }}
                        >
                            Decks
                    </Button>
                </Stack>
            </div>
            {/* son todos los contenidos de EA */}
            <div className={styles.cards}>
                <div className={styles.title}>
                    <h3>Vistos recientemente</h3>
                    <Link href="/ea">
                        <a href="#" className={styles.seeMore}>
                            Ver más
                            <md.MdArrowForwardIos />
                        </a>
                    </Link>
                </div>
                <GridTemplate
                    data={data}
                    width={width}
                    active={active}
                    handleClick={handleClick}
                />
                <hr/>
            </div>
            <div className={styles.cards}>
                <div className={styles.title}>
                    <h3>Destacados</h3>
                    <Link href="/ea">
                        <a href="#" className={styles.seeMore}>
                            Ver más
                            <md.MdArrowForwardIos />
                        </a>
                    </Link>
                </div>
                <GridTemplate
                    data={data}
                    width={width}
                    active={active}
                    handleClick={handleClick}
                />
                <hr/>
            </div>
            <div className={styles.cards}>
                <div className={styles.title}>
                    <h3>Trending</h3>
                    <Link href="/ea">
                        <a href="#" className={styles.seeMore}>
                            Ver más
                            <md.MdArrowForwardIos />
                        </a>
                    </Link>
                </div>
                <GridTemplate
                    data={data}
                    width={width}
                    active={active}
                    handleClick={handleClick}
                />
                <hr/>
            </div>
            <div className={styles.cards}>
                <div className={styles.title}>
                    <h3>Rating</h3>
                    <Link href="/ea">
                        <a href="#" className={styles.seeMore}>
                            Ver más
                            <md.MdArrowForwardIos />
                        </a>
                    </Link>
                </div>
                <GridTemplate
                    data={data}
                    width={width}
                    active={active}
                    handleClick={handleClick}
                />
                <hr/>
            </div>
        </div>
    )
}

const data = [
    {
        template: 'gray',
        title: "Fundamentos de Scrum",
        time: "8 min",
        image: "/learning/gray.svg",
    },
    {
        template: 'white',
        title: "Conceptos básicos del marketing digital",
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
        time: "8 hrs",
        image: "/learning/blue.svg",
    },
]