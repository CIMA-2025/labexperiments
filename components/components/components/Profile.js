import styles from './styles/Profile.module.css'
import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user && (
            <>
                <img
                    src="profile.svg"
                    alt="Imagen de perfil"
                    className={styles.image}
                />
                <div className={styles.text}>
                    <h1 className={styles.name}>{user.name}</h1>
                    <p className={styles.bio}>{user.email}</p>
                </div>
            </>
        )


    )
}