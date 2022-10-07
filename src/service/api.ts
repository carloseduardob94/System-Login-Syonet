import axios from "axios"

const urlApi = import.meta.env.VITE_APP_API

export const api = axios.create({
   baseURL: urlApi
})
