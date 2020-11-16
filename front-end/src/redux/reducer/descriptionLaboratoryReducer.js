const initialState = {
    description: [],
    detail: [],
    isLoading: true
}

export default function (state = initialState, action) {

    switch (action.type) {

        case 'STORE_DESCRIPTION_LABORATORY':
            return {
                ...state,
                description: action.description,
                detail: action.detail,
                isLoading: false
            }
        case 'SET_DEFAULT':
            return {
                ...state,
                isLoading: true
            }
        default: return state
    }

}