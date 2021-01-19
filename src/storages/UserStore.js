import UserRepository from '@/repositories/UserRepository'
import Auth from '@/repositories/AuthRepository'
import makeStore from "@/storages/Base/Storage";

let store = makeStore('user', UserRepository)

store.actions = {
    ...store.actions,
    async listMe ({ commit }) {
        commit('setLoading', true)
        await Auth.me().then(response => {
            commit('setCurrent', response.data)
        })
        commit('setLoading', false)
    }
}

export default store