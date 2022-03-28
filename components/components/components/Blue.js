import stylesLearning from '../styles/LearningContent.module.css';

export default function Blue({ handleClick, active, data }){
    return (
        <div className={stylesLearning.component + " " + stylesLearning.blue}>
            <img 
                className={stylesLearning.bookmark} 
                onClick={handleClick} 
                src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
            />
            <img className={stylesLearning.flower} src="/pink-flowers.svg" alt="flowers" />
            <div className={stylesLearning.imageContainer}>
                <img src={data.image} alt={data.title} />
            </div>
            <div className={stylesLearning.content}>
                <h3>{data.title}</h3>
                <div className={stylesLearning.bottom}>
                    <img className={stylesLearning.iconPink} src="/Icons-Lecture.svg" alt="time" />
                    <span>{data.time}</span>
                </div>
            </div>
        </div>
    )
}