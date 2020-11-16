const initialState = {
    linkedin: "",
    email: "",
    whatsapp_number: "",
    github: "",
    isLoading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'STORE_CONTACT':
            return {
                ...state,
                linkedin: action.linkedin,
                email: action.email,
                whatsapp_number: action.whatsapp_number,
                github: action.github,
                isLoading: false
            }
        default: return state
    }

}