import axios from 'axios'
import config from './../../config.json';

const id_user = config['id_user'];
const url_server = config['url_server'];

export const readAbout = () => async dispatch => {
    try {

        const result = await axios.get(url_server + 'user/user-read?id=' + id_user);
        dispatch({
            type: 'STORE_ABOUT',
            fullname: result.data['fullname_user'],
            description: result.data['description_user'],
            isLoading: false,
            photo: result.data['photo_user'],
            educations: result.data['academic_user'],
            skills: result.data['skill_set_user'],
            work_experiences: result.data['experience_user']
        })
    }
    catch (e) {
        dispatch({
            type: 'ERROR',
            payload: console.log(e),
        })
    }
}
