import axios from "axios";

const api = axios.create({
    baseURL: 'http://Seu IP:3333'
});

export default api;