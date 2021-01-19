import { Repository, createRepository } from '@/repositories/Base/Repository'

class AuthRepository extends Repository {
    endpoint = 'auth'

    me() {
        return this.$axios.post(`${this.endpoint}/me`)
    }

    login(params) {
        return this.$axios.post(`${this.endpoint}/login`, params)
    }

    logout() {
        return this.$axios.post(`${this.endpoint}/logout`)
    }

    reset(params) {
        return this.$axios.post(`${this.endpoint}/reset`, params)
    }
}

export default new AuthRepository()

export const create = createRepository(AuthRepository)