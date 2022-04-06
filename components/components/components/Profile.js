import styles from './styles/Profile.module.css'

export default function Profile() {
    return (
        <>
            <img
                src="profile.svg"
                alt="Imagen de perfil"
                className={styles.image}
            />
            <div className={styles.text}>
                <h1 className={styles.name}>Lorem impsum</h1>
                <p className={styles.bio}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
            </div>

        </>
    )
}