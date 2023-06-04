import * as skillAction from '../actions/action'
import initialState from './initialState.json'

const skillReducer=(state=initialState.skill,action)=>{
     switch(action.type){
        case skillAction.ADD_SKILLS:
            return{
                ...action.payload
            }
        case skillAction.UPDATE_SKILLS:
            return{...action.payload}    
    
     default: return state
     }
}
export default skillReducer