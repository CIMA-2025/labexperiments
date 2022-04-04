import styles from './styles/Template.module.css';

export default function Blue({ handleClick, active, data, little }){
    return (
        <div className={little ? styles.componentLittle + " " + styles.blue : styles.component + " " + styles.blue}>
            <img 
                className={styles.bookmark} 
                onClick={handleClick} 
                src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
            />
            <img className={styles.flower} src="/pink-flowers.svg" alt="flowers" />
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${data.image})` }} />
            <div className={styles.content}>
                <h3>{data.title}</h3>
                <div className={styles.bottom}>
                    <img className={styles.iconPink} src="/Icons-Clock.svg" alt="time" />
                    <span>{data.time}</span>
                </div>
            </div>
        </div>
    )
}