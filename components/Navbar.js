import * as io from "react-icons/io5";
import styles from "./styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar(){
    return (
        <>  
            <div className={styles.navbar}>
                <img src="/logo.svg" alt="logo" className={styles.logo}/>
                <div className={styles.options}>
                    <io.IoNotificationsOutline size={35}/>
                    <Link href="/account">
                        <a>
                            <io.IoPersonCircleOutline size={35}/>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}