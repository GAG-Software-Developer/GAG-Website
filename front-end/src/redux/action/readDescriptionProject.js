import axios from 'axios'
import config from './../../config.json';

const url_server = config['url_server'];

export const readDescriptionProject = (id_project) => async dispatch => {
    try {
        //Set isLoading to true again so let user knows that the website is loading new description project
        dispatch({
            type: 'SET_DEFAULT'
        })
        const result = await axios.get(url_server + 'posting-detail/posting-detail-read?id_posting=' + id_project);
        dispatch({
            type: 'STORE_DESCRIPTION_PROJECTS',
            resultDescriptionProject: result.data['posting_description'],
            resultDetailProject: result.data['posting_detail']
        })
    }
    catch (e) {
        dispatch({
            type: 'ERROR',
            payload: console.log(e),
        })
    }
}
