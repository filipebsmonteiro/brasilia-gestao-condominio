import { axios as configAxios } from '@/providers/AxiosServiceProvider'

export class Repository {
    endpoint = null

    constructor ($axios = null) {
        this.$axios = $axios
        if (!$axios) {
            this.$axios = configAxios
        }
    }

    fetchAll (params) {
        return this.$axios.get(`${this.endpoint}`, { params })
    }

    fetch (id) {
        return this.$axios.get(`${this.endpoint}/${id}`)
    }

    post (params) {
        return this.$axios.post(`${this.endpoint}`, params)
    }

    put (id, params) {
        return this.$axios.put(`${this.endpoint}/${id}`, params)
    }

    delete (id) {
        return this.$axios.delete(`${this.endpoint}/${id}`)
    }

    toastValidationErrors(error, snotify) {
        let errors = {}
        if (error.response) {
            if (error.response.data) {
                if (error.response.data.data) {
                    errors = error.response.data.data
                }
            }
        }
        Object.keys(errors).map(field => {
            errors[field].map(msg => {
                snotify.error(msg)
            })
        })
    }
}

export function createRepository (Instance) {
    return $axios => new Instance($axios)
}

export default new Repository()