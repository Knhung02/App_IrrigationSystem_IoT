import axios from 'axios'

const ApiManager = axios.create({
    // baseURL: 'http://localhost:3000/',
    baseURL: 'http://localhost:3000/',
    responseType:'json',
    withCredentials: true,
});
export default ApiManager;
