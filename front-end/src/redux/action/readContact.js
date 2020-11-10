import axios from 'axios'
import config from './../../config.json';

const id_user = config['id_user'];
const url_server = config['url_server'];

export const readContact = () => async dispatch => {
    try {
        const result = await axios.get(url_server + 'user/user-read?id=' + id_user);
        dispatch({
            type: 'STORE_CONTACT',
            linkedin: result.data['linkedin_user'],
            email: result.data['email_user'],
            whatsapp_number: result.data['whatsapp_user'],
            github: result.data['github_user']
        })
    }
    catch (e) {
        dispatch({
            type: 'ERROR',
            payload: console.log(e),
        })
    }
}
