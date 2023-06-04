import * as experienceAction from './action'

export const addExp=(exp)=>{
    return{
        type:experienceAction.ADD_EXPERIENCE,
        payload:exp
    }
}

export const updateExp=(exp)=>{
    return{
        type:experienceAction.UPDATE_EXPERIENCE,
        payload:exp
    }
}