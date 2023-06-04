 import * as educationAction from "./action"


export const addEducation=(education)=>{
    return{
       type:educationAction.ADD_EDUCATION,
       payload:education
    }
}

export const updateEducation=(education)=>{
    return{
       type:educationAction.UPDATE_EDUCATION,
       payload:education
    }
}