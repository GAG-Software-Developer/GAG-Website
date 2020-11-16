const initialState = {
    description_project: [],
    detail_project: [],
    isLoading: true
}

export default function (state = initialState, action) {

    switch (action.type) {

        case 'STORE_DESCRIPTION_PROJECTS':
            return {
                ...state,
                description_project: action.resultDescriptionProject,
                detail_project: action.resultDetailProject,
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