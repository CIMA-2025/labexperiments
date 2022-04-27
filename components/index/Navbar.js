import * as io from "react-icons/io5";
import styles from "./styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(){
    const router = useRouter();

    function handleClick(e) {
        e.preventDefault();
        router.push("/");
    }

    return (
        <>  
            <div className={styles.navbar}>
                <img src="/logo.svg" alt="logo" className={styles.logo} onClick={handleClick} />
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