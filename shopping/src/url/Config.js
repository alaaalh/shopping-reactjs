import axios from 'axios'

const axiosInatance = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export default axiosInatance;