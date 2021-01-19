import { default as axiosPackage } from 'axios'
import Cookies from 'js-cookie'
import APIService from '@/providers/APIServiceProvider'
import {APP_ENV, TOKEN_DEVELOP, VEUS_PERFIL} from "@/providers/EnvironmentProvider";

if (APP_ENV === 'develop') {
    Cookies.set('api_access_token', 'Bearer ' + TOKEN_DEVELOP, 5)
    Cookies.set('api_nm_usuario', 'Veus Root Develop', 5)
    Cookies.set('api_perfil', VEUS_PERFIL, 5)
}

axiosPackage.defaults.headers.common['Accept'] = 'application/json'
axiosPackage.defaults.headers.common['Content-Type'] = 'application/json'
axiosPackage.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axiosPackage.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'

// Set config defaults when creating the instance
export const axios = axiosPackage.create({
    baseURL: APIService._getBaseUrl(),

    // responseType: 'stream'
    // timeout: 1000,
})

axios.interceptors.request.use(
    async config => {
        if (APIService._getToken()) {
            if (APIService._minutesRemaining() && APIService._minutesRemaining() <= 5) {
                axiosPackage.defaults.headers.common['Authorization'] = APIService._getToken()
                // Envia com um pacote diferente do Global
                await APIService._refreshToken(axiosPackage)
            }
            config.headers['Authorization'] = APIService._getToken()
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

const isTryingRefreshToken = (url) => {
    if (url === APIService._getRefreshEndPoint()) {
        return true
    }
    return false
}

axios.interceptors.response.use(response => {
        return response
    },
    async error => {
        const originalRequest = error.config

        if (error.response.status === 401) {
            if (isTryingRefreshToken(originalRequest.url)) {
                APIService._clearToken()
            }

            if (!APIService._isTokenExpired()) {
                const newToken = await APIService._refreshToken(axios)
                if (newToken) {
                    axios.defaults.headers.common['Authorization'] = newToken
                    // Tenta novamente Request
                    return axios(originalRequest)
                }
            }
            // redirectLogin(originalRequest.url)
        }

        // return Error object with Promise
        return Promise.reject(error)
    }
)