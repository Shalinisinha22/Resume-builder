import * as authAction from "./action";

//signup
 const registerReq=()=>{
    return{
        type:authAction.SIGN_UP_REQ,

    }
}
 const registerSucc=()=>{
    return{
        type:authAction.SIGN_UP_SUCC

    }
}

 const registerFail=(error)=>{
    return{
        type:authAction.SIGN_UP_FAIL,
        payload:error.message

    }
}

 const removeError=()=>{
    return{
        type:authAction.REMOVE_ERROR
    }
 }


export const register=(userData)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(registerReq())
      
            const firebase=getFirebase();
           const firestore=getFirestore();
           firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password).then(async(data)=>{
              const res=await firestore.collection('users').doc(data.user.uid).set({
                email:userData.email,
                resumeIds:[]
              }) 
              //success
             dispatch(registerSucc())       
           }).catch((error)=>{
               dispatch(registerFail(error))
               setTimeout(() => {
                  dispatch(removeError())
               }, 2000);
           })
    }
   }   


    
   //sign-in

   const loginReq=()=>{
    return{
        type:authAction.SIGN_IN_REQ
    }
   }
   const loginSucc=()=>{
    return{
        type:authAction.SIGN_IN_SUCC
    }
   }

   const loginFail=(error)=>{
     return{
        type:authAction.SIGN_IN_FAIL,
        payload:error.message
     }
   }

   export const login= (userData)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
       dispatch(loginReq())
       const firebase=getFirebase()
       try{
           const res= await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password)
           //success
           dispatch(loginSucc())
       }
       catch(error){
         dispatch(loginFail(error))
         setTimeout(() => {
           dispatch(removeError())   
         },2000);
       }
    }
   }
    


//logout

   const logoutReq=()=>{
         return{
            type:authAction.SIGN_OUT_REQ
         }
   }
   const logoutSucc=()=>{
    return{
       type:authAction.SIGN_OUT_SUCC
    }
}
const logoutFail=(error)=>{
    return{
       type:authAction.SIGN_OUT_FAIL,
       payload:error.message
    }
}

export const logout=()=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(logoutReq())
        const firebase=getFirebase()
        try{
          const res=await firebase.auth().signOut()
          dispatch(logoutSucc())
        }
        catch(error){
            dispatch(logoutFail(error))
            setTimeout(() => {
                dispatch(removeError())
            }, 5000);
        }
    } 
}


