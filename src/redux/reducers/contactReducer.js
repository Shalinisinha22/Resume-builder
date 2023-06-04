import * as contactAction from "../actions/action";
import  initialState from "./initialState.json";

 const contactReducer=(state=initialState.contact,action)=>{
    switch(action.type){
        case contactAction.ADD_CONTACT:
            return {...action.payload}
         case contactAction.UPDATE_CONTACT:
            return {...action.payload}
        default: return state
    }
}
export default contactReducer
