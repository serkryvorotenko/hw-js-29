import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {logger} from "redux-logger/src";
import {contactReducer} from "./reducers/contact.reducer.js";
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
    contacts: contactReducer,
});
const middleware=[logger,thunk]

export const store = createStore(rootReducer, applyMiddleware(...middleware));