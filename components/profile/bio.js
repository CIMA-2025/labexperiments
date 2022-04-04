import { Sidebar } from "../index/index"
import styles from "./styles/bio.module.css"
export default function Bio() {

    return (
        <div className={styles.container}>
            <img
                src="profile.svg"
                alt="Imagen de perfil"
                className={styles.image}
            />
            <h1 className={styles.name}>Lorem impsum</h1>
            <p className={styles.bio}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
        </div>

    )
}