import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.105:3333'  //pega diretamente do expo e troca o exp por http / modifica também a porta para a do servidor
})

export default api;