import axios from 'axios'
import config from './../../config.json';

const url_server = config['url_server'];

export const readLaboratory = () => async dispatch => {
    try {
        // Do HTTP Request with Axios
        const result = await axios.get(url_server + 'api/tutorial');
        dispatch({
            type: 'STORE_LABORATORY',
            tutorials: result.data
        })
    }
    catch (e) {
        dispatch({
            type: 'ERROR',
            payload: console.log(e),
        })
    }
}
