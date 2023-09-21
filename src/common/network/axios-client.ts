import axios from "axios"
import { BASE_URL } from "shared/constants"


const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
})

export { axiosClient }
