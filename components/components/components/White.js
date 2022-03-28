import stylesLearning from '../styles/LearningContent.module.css';

export default function White({ handleClick, active, data }){
    return(
        <div className={stylesLearning.component + " " + stylesLearning.white}>
            <img 
                className={stylesLearning.bookmark} 
                onClick={handleClick} 
                src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
            />
            <div className={stylesLearning.image}>
                <img src={data.image} alt={data.title} />
            </div>
            <div className={stylesLearning.content}>
                <h3>{data.title}</h3>
                <div className={stylesLearning.bottom}>
                    <div>
                        <img className={stylesLearning.iconPink} src="/Icons-Lecture.svg" alt="time" />
                        <span>Módulos: {data.modules}</span>
                    </div>
                    <div>
                        <img className={stylesLearning.iconPink} src="/Icons-Clock.svg" alt="time" />
                        <span>{data.time}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}