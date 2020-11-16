const initialState = {
    fullname: "",
    description: "",
    photo: "",
    educations: [],
    skills: [],
    work_experiences: [],
    isLoading: true
}

export default function (state = initialState, action) {

    switch (action.type) {

        case 'STORE_ABOUT':
            return {
                ...state,
                fullname: action.fullname,
                description: action.description,
                photo: action.photo,
                educations: action.educations,
                skills: action.skills,
                work_experiences: action.work_experiences,
                isLoading: false
            }
        default: return state
    }

}