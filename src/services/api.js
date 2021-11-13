import axios from "axios";


const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?',
    params: {
        type: 'multiple',
    }
})


export default api;