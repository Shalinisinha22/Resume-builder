import * as educationAction from "../actions/action";
import  initialState from "./initialState.json";

 const educationReducer=(state=initialState.education,action)=>{

    switch(action.type){
        case educationAction.ADD_EDUCATION:
            return {...action.payload}
        

        case educationAction.UPDATE_EDUCATION:
            return {...action.payload}
        
        default: return state
    }
}
export default educationReducer