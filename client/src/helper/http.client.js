import axios from 'axios'

export const InventoryApi = axios.create({
    baseURL: 'http://localhost:3000'
    
})
