import { Sidebar } from "../index"
import styles from "./styles/coverImage.module.css"
export default function CoverImage() {

    return (
        <div className={styles.container}>
            <Sidebar />
            <img
                src="cover-image.svg"
                alt="imagen de portada"
                style={{width: '100%'}}
            />
        </div>

    )
}