export const usersReducer = (userState,action)=>{

switch(action.type){
   case "ADD_USER":
   return [...userState,action.payload]     
   default:
    return userState 
}

}