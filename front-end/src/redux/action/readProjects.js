import axios from 'axios'
import config from './../../config.json';

const id_user = config['id_user'];
const url_server = config['url_server'];

export const readProjects = () => async dispatch => {
    try {
        const result = await axios.get(url_server + 'posting/posting-read?id=' + id_user);
        dispatch({
            type: 'STORE_PROJECTS',
            result: result.data
        })
    }
    catch (e) {
        dispatch({
            type: 'ERROR',
            payload: console.log(e),
        })
    }
}
