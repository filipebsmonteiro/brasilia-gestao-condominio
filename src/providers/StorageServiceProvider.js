import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/storages/UserStore";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user
    }
})