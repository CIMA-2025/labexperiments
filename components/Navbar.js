import * as io from "react-icons/io5";
import styles from "./styles/Navbar.module.css";

export default function Navbar(){
    return (
        <>  
            <div className={styles.navbar}>
                <img src="/logo.svg" alt="logo" className={styles.logo}/>
                <div className={styles.options}>
                    <io.IoNotificationsOutline size={35}/>
                    <io.IoPersonCircleOutline size={35}/>
                </div>
            </div>
        </>
    )
}