import axios from 'axios';
import { url } from 'inspector';

export const serviceWorker = async (url, data) => {
    const header = {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}