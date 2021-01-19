import moment from 'moment'
import {API_URL} from '@/providers/EnvironmentProvider'

class APIService {
    token = null
    expiration = null
    moment = null
    baseUrl = API_URL
    refresh_endpoint = `${this.baseUrl}/auth/refresh`

    constructor () {
        this.moment = moment
        this.token = localStorage.getItem('api_access_token')
        this.expiration = localStorage.getItem('api_token_expiration')
        if (this.expiration) {
            // Se exsitir vai ser String, então converte
            // this.expiration = this.moment(this.expiration)
        }
        this.baseUrl = `${API_URL}`///api`
        this.refresh_endpoint = `${this.baseUrl}/auth/refresh`
    }

    _getToken () {
        return this.token
    }

    _setToken (token) {
        this.token = `Bearer ${token}`
        localStorage.setItem('api_access_token', this.token)
        return this._getToken()
    }

    _getExpiration () {
        return this.expiration
    }

    _setExpiration (seconds) {
        this.expiration = this.moment().add(seconds, 'seconds')
        localStorage.setItem('api_token_expiration', this.expiration.format())
        return this._getExpiration()
    }

    _getBaseUrl () {
        return this.baseUrl
    }

    _getRefreshEndPoint () {
        return this.refresh_endpoint
    }

    async _refreshToken ($axios) {
        return await $axios.post(this._getRefreshEndPoint())
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    this._setToken(res.data.access_token)
                    this._setExpiration(res.data.expires_in)
                    return this._getToken()
                }
            })
    }

    _minutesRemaining () {
        if (this._getExpiration()) {
            return this._getExpiration().diff(this.moment(), 'minutes')
        }
        return null
    }

    _clearToken () {
        this.token = null
        this.expiration = null
        localStorage.removeItem('api_access_token')
        localStorage.removeItem('api_token_expiration')
    }

    _isAuthenticated () {
        if (this._getToken()) {
            return true
        }
        return false
    }

    _isTokenExpired () {
        if (!this._getToken() || this._minutesRemaining() <= 0) {
            return true
        }
        return false
    }
}

export default new APIService()

export const create = APIService