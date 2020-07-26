import axios from 'axios'


const api = axios.create ({
    baseURL: 'http://18.231.125.215:3000'
})

export default api
