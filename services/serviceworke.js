import axios from 'axios';


export const serviceWorker = async (url, data) => {

    const header = { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } }

    console.log(url, data, header)
    return await axios.post(url, data, header)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err.message)
        })
}