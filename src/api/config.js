import axios from "axios";

const apFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
}) 

export default apFetch;