import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fausantosdev-tindev-api.herokuapp.com/'
})

export default api