import { combineReducers } from 'redux';
import projectsReducer from './projectReducer';
import descriptionProject from './descriptionProjectReducer';
import about from './aboutReducer';
import contact from './contactReducer';
import laboratory from './laboratoryReducer';
import descriptionLaboratory from './descriptionLaboratoryReducer';

export default combineReducers({
    projects: projectsReducer,
    descriptionProject: descriptionProject,
    about: about,
    contact: contact,
    laboratory: laboratory,
    descriptionLaboratory: descriptionLaboratory
})
