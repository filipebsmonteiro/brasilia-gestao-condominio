export const obj = {
    setAll (state, array) {
        state.list = array
    },

    setPagination (state, obj) {
        if (obj.meta){
            obj = obj.meta
        }
        state.pagination = {
            per_page: parseInt(obj.per_page),
            page: parseInt(obj.current_page),
            total: parseInt(obj.total)
        }
    },

    setCurrent (state, obj) {
        state.current = obj
    },

    setLoading (state, boolean) {
        state.isLoading = boolean
    }
}

export default function makeMutations() {
    return Object.assign({}, obj)
}