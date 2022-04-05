import { RecentlyViewed, NextEvents } from "./components"
import styles from "./styles/EventsContent.module.css"
import { useMediaQuery } from '../../common'

export default function EventsContent() {

    const isIpad = useMediaQuery(1023)
    return (
        <div className={styles.content + " " + isIpad && "flex-column"}>
            <RecentlyViewed />
            <NextEvents />
        </div>
    )
}