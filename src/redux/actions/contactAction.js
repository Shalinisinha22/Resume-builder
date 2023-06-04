import * as contactAction from "./action"


export const addContact=(contact)=>{
    return{
       type:contactAction.ADD_CONTACT,
       payload:contact
    }
}

export const updateContact=(contact)=>{
    return{
       type:contactAction.UPDATE_CONTACT,
       payload:contact
    }
}