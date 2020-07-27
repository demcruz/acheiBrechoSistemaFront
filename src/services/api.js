import axios from 'axios'


const api = axios.create ({
    baseURL: 'http://54.207.184.28:3000'
})

export default api
