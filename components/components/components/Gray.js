import styles from './styles/Template.module.css';

export default function Gray({ handleClick, active, data, little }){
    return (
        <div className={little ? styles.componentLittle + " " + styles.gray : styles.component + " " + styles.gray}>
            <img 
                className={styles.bookmark} 
                onClick={handleClick} 
                src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
            />
            <div className={styles.image}>
                <img src={data.image} alt={data.title} />
            </div>
            <div className={styles.content}>
                <h3>{data.title}</h3>
                <div className={styles.bottom}>
                    <img className={styles.iconPink} src="/Icons-Lecture.svg" alt="time" />
                    <span>{data.time}</span>
                </div>
            </div>
        </div>
    )
}