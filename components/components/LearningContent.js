import { useState } from "react";
import Link from "next/link";
import styles from "../index/styles/Content.module.css";
import * as md from "react-icons/md";

import Box from '@mui/material/Box';
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

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

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
                <GridTemplate
                    data={data}
                    handleClick={handleClick}
                    active={active}
                    width={16}
                />
            </Box>
        </div>
    )
}


