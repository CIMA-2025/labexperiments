import styles from "./styles/Sidebar.module.css"
import { useMediaQuery } from "../../common"


export default function Sidebar(){
    const isIpad = useMediaQuery(1023);

    return (
        <>
            <div className={styles.sidebar + " " + (isIpad && styles.movil)}>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Book.svg" alt="Book"/>
                    <h3 className={isIpad && "invisible"}>Experiencias de Aprendizaje</h3>
                </div>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Mono-Search.svg" alt="Search" />
                    <h3 className={isIpad && "invisible"}>Recomendaciones</h3>
                </div>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Bookmark.svg" alt="Bookmark"/>
                    <h3 className={isIpad && "invisible"}>Lista de favoritos</h3>
                </div>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Categories.svg" alt="Categories" />
                    <h3 className={isIpad && "invisible"}>Categorías</h3>
                </div>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Hand.svg" alt="Hand"/>
                    <h3 className={isIpad && "invisible"}>Expertos</h3>
                </div>
            </div>
        </>
    )
}