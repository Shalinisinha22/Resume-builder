import * as skillAction from './action'


export const addSkill=(skill)=>{
    return{
        type:skillAction.ADD_SKILLS,
        payload:skill
    }
}

export const updateSkill=(skill)=>{
    return{
        type:skillAction.UPDATE_SKILLS,
        payload:skill
    }
}