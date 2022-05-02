import styles from "./styles/All.module.css";
import Link from "next/link";
import * as md from "react-icons/md";

import { GridTemplate } from "../../components/components";

export default function All({ data, width, active, handleClick }) {
    return (
        <>
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
        </>
    )
}