import styles from "./styles/Sidebar.module.css"

export default function Sidebar(){
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Book.svg" alt="Book"/>
                    <h3>Experiencias de Aprendizaje</h3>
                </div>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Mono-Search.svg" alt="Search" />
                    <h3>Recomendaciones</h3>
                </div>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Bookmark.svg" alt="Bookmark"/>
                    <h3>Lista de favoritos</h3>
                </div>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Categories.svg" alt="Categories" />
                    <h3>Categorías</h3>
                </div>
                <div className={styles.title}>
                    <img src="/sidebar/Icons-Hand.svg" alt="Hand"/>
                    <h3>Expertos</h3>
                </div>
            </div>
        </>
    )
}