import  initialState from './initialState.json';
import * as authAction from '../actions/action'

const authReducer=(state=initialState.auth,action)=>{
    switch(action.type){
        case authAction.SIGN_UP_REQ:
            return{
                ...state,loading:true
            }
        case authAction.SIGN_UP_SUCC:
            return{
                ...state,loading:false
            }
        case authAction.SIGN_UP_FAIL:
            return{
                ...state,loading:false,error:action.payload
            }
      
            
            case authAction.SIGN_IN_REQ:
                return{
                    ...state,loading:true
                }
            case authAction.SIGN_IN_SUCC:
                return{
                    ...state,loading:false
                }
            case authAction.SIGN_IN_FAIL:
                return{
                    ...state,loading:false,error:action.payload
                }
            
            
                case authAction.SIGN_OUT_REQ:
                    return{
                        ...state,loading:true
                    }
                case authAction.SIGN_OUT_SUCC:
                    return{
                        ...state,loading:false
                    }
                case authAction.SIGN_OUT_FAIL:
                    return{
                        ...state,loading:false,error:action.payload
                    }

               case authAction.REMOVE_ERROR:
                return{
                    ...state,error:""
                }  
                
                
               default:return state;         
    }
}

export default authReducer