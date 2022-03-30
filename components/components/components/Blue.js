import styles from './styles/Template.module.css';

export default function Blue({ handleClick, active, data }){
    return (
        <div className={styles.component + " " + styles.blue}>
            <img 
                className={styles.bookmark} 
                onClick={handleClick} 
                src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
            />
            <img className={styles.flower} src="/pink-flowers.svg" alt="flowers" />
            <div className={styles.imageContainer}>
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