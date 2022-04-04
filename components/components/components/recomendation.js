import style from './styles/recomendation.module.css'

export default function Recomendation({ handleClick, active, data }) {
    return (
        <div className={style.container}>
            <h1>
                Bit
            </h1>
            <p>
                ¿Que es una base de datos relacional y que es MySQL?
            </p>
            <img
                src=""
                alt="Imagen de recomendacion" />
        </div>
    )
}