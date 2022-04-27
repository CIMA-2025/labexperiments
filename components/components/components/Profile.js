import styles from './styles/Profile.module.css'
import { useUser, getAccessToken } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';

export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    // const { token } = AccessTokenRequest();

    /*const validateUser = async () => {
        console.log(`token ${token}`)
    }*/

    async function MyHandler(req, res) {

        console.log(`token ${accessToken}`)

    }

    useEffect(() => {
        //validateUser()
        MyHandler()
    })

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