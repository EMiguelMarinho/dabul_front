import axios from 'axios';
const api = axios.create({
   baseURL: "https://drlfinanceiro.com/dabul_api/public/api"
})

export default api;
