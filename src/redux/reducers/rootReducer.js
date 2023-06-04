import  contactReducer  from "./contactReducer";
import documentReducer from "./documentReducer";
import  educationReducer from "./educationReducer";
import { combineReducers } from "redux"; 
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import authReducer from "./authReducer";
import skillReducer from "./skillReducer";
import expReducer from "./experienceReducer";


export const rootReducer=combineReducers({
    document:documentReducer,
    contact:contactReducer,
    education:educationReducer,
    skill:skillReducer,
    experience:expReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    auth:authReducer

})