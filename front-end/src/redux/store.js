import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'

const initalState = {

}

const middleware = [thunk]

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;






//Create store
// Kita bikin toko yang menyediakan state
// State yang dijual di store akan di deklarasi di reducer

//Reducer Posting
// - posting -> READ, CREATE, UPDATE, DELETE
// - detail posting
// - tutorial
// - tutorial detail
// - about
// - contact

//Action
// Read, Update

//Dispatch / Subscribe

// Subscribe posting di list-posting





















