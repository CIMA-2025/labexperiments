import { style } from "@mui/system";
import styles from "./styles/Bits.module.css";

export default function Bits({ data, width, active, handleClick }){
    return(
        <>
            {data.map((data, index) => (
                <>
                    <div key={index} className={styles.container}>
                        <div className={styles.imageContainer} >
                            <img className={styles.imageContent} src={data.image} alt={data.title}/>
                            <img 
                                className={styles.bookmark} 
                                onClick={handleClick} 
                                src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
                            />
                        </div>
                        <div className={styles.rightContainer}>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <div className={styles.bottom}>
                                <img className={styles.iconPink} src="/Icons-Lecture.svg" alt="time" />
                                <span>{data.time}</span>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}