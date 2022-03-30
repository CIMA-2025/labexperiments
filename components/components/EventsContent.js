import { RecentlyViewed, NextEvents } from "./components"
import styles from "./styles/EventsContent.module.css"

export default function EventsContent(){
    return(
        <div className={styles.content}>
            <RecentlyViewed />
            <NextEvents />
        </div>
    )
}