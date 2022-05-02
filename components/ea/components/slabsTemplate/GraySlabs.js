import styles from './styles/Template.module.css';

export default function GraySlabs({ handleClick, active, data }){
    return (
        <>
            <div className={styles.component + " " + styles.gray}>
                <img 
                    className={styles.bookmark} 
                    onClick={handleClick} 
                    src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
                />
                <div className={styles.image}>
                    <img src={data.image} alt={data.title} />
                </div>
                <div className={styles.bottom}>
                    <img className={styles.iconPink} src="/Icons-Lecture.svg" alt="time" />
                    <span>{data.time}</span>
                </div>
            </div>
            <div className={styles.content}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
        </>
    )
}