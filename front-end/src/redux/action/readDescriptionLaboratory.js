import axios from 'axios'
import config from './../../config.json';

const url_server = config['url_server'];

export const readDescriptionLaboratory = (id_tutorial) => async dispatch => {
    try {
        //Set isLoading to true again so let user knows that the website is loading new description project
        dispatch({
            type: 'SET_DEFAULT'
        })
        const result = await axios.get(url_server + 'api/tutorial-detail?id=' + id_tutorial);
        dispatch({
            type: 'STORE_DESCRIPTION_LABORATORY',
            description: result.data['tutorial_description'],
            detail: result.data['tutorial_detail']
        })
    }
    catch (e) {
        dispatch({
            type: 'ERROR',
            payload: console.log(e),
        })
    }
}
