export const obj = {
    list: [],
    pagination: {
        page: 1,
        per_page: 10,
        total: 0
    },
    current: {},
    isLoading: false
}

export default function makeState() {
    return Object.assign({}, obj)
}