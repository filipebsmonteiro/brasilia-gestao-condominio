export const obj = {
    all (state) {
        return state.list
    },

    pagination (state) {
        return state.pagination
    },

    isLoading (state) {
        return state.isLoading
    },

    current (state) {
        return state.current
    }
}

export default function makeGetters() {
    return Object.assign({}, obj)
}