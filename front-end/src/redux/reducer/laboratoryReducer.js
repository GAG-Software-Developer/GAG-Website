const initialState = {
    tutorials: [],
    isLoading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'STORE_LABORATORY':
            return {
                ...state,
                tutorials: action.tutorials,
                isLoading: false
            }
        default: return state
    }

}