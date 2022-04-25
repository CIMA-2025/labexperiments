import * as React from 'react';
import styles from './styles/Template.module.css';

/*ToolTip*/
import { HtmlTooltip } from './';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

/*responsive */
import { useMediaQuery } from "../../../common";

export default function Blue({ handleClick, active, data, little }){
    const isIpad = useMediaQuery(1023);

    return (
        <>
            {isIpad ? (
                <div className={little ? styles.componentLittle + " " + styles.blue : styles.component + " " + styles.blue}>
                    <img 
                        className={styles.bookmark} 
                        onClick={handleClick} 
                        src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
                    />
                    <img className={styles.flower} src="/pink-flowers.svg" alt="flowers" />
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={data.image} alt={data.title} />
                    </div>
                    <div className={styles.content}>
                        <h3>{data.title}</h3>
                        <div className={styles.bottom}>
                            <img className={styles.iconPink} src="/Icons-Clock.svg" alt="time" />
                            <span>{data.time}</span>
                        </div>
                    </div>
                </div>
            ) : (
                
                <HtmlTooltip
                    title={
                        <React.Fragment>
                            <Typography variant="h6">{data.title}</Typography>
                            <Typography variant="body2">{data.description}</Typography>
                            <div className={styles.bottomToolTip}>
                                <Rating name="read-only" value={5} readOnly />
                                <button className={styles.button}>Button</button>
                            </div>
                        </React.Fragment>
                    }
                    placement="right"
                >
                    <div className={little ? styles.componentLittle + " " + styles.blue : styles.component + " " + styles.blue}>
                        <img 
                            className={styles.bookmark} 
                            onClick={handleClick} 
                            src={active == true ? ('/learning/Icons-Bookmark-blue.svg') : ('/learning/Icons-Bookmark.svg')} 
                        />
                        <img className={styles.flower} src="/pink-flowers.svg" alt="flowers" />
                        <div className={styles.imageContainer}>
                            <img className={styles.image} src={data.image} alt={data.title} />
                        </div>
                        <div className={styles.content}>
                            <h3>{data.title}</h3>
                            <div className={styles.bottom}>
                                <img className={styles.iconPink} src="/Icons-Clock.svg" alt="time" />
                                <span>{data.time}</span>
                            </div>
                        </div>
                    </div>
                </HtmlTooltip>
            )}
        </>
    )
}