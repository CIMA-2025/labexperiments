import styles from './styles/Profile.module.css'
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {
    const { user, isAuthenticade, isLoading, getAccessTokenSilently } = useAuth0()

    const validateUser = async () => {
        const token = await getAccessTokenSilently()
        localStorage.setItem('token', token)
        console.log(`token-> ${localStorage.getItem('token')}`)
    }

    useEffect(() => {
        validateUser()
    })

    return (
        !isLoading && (
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