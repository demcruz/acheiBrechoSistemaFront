import axios from 'axios'


const api = axios.create ({
    baseURL: 'http://54.207.163.72:3000'
})

export default api
