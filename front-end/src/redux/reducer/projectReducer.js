const initialState = {
    projects: [],
    isLoading: true
}

export default function (state = initialState, action) {

    switch (action.type) {

        case 'STORE_PROJECTS':
            return {
                ...state,
                projects: action.result,
                isLoading: false
            }
        default: return state
    }

}