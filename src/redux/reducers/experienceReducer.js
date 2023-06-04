import initialState from './initialState.json';
import * as experienceAction from '../actions/action'

const expReducer=(state=initialState.Experience,action)=>{
   switch(action.type){
         case experienceAction.ADD_EXPERIENCE:
            return{
                ...action.payload
            }

            case experienceAction.UPDATE_EXPERIENCE:
                return{
                    ...action.payload
                }

       default:return state
   }
}

export default expReducer