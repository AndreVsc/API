import axios from "axios";
//Importação da biblioteca axios para manipulação da API usando react

const apFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
    //Atribuindo dados URL para manipulação
}) 

export default apFetch;


// https://jsonplaceholder.typicode.com/guide/