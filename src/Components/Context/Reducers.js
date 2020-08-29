export const usersReducer = (userState,action)=>{

switch(action.type){
   case "ADD_USER":
   return [...userState,action.payload]     
   default:
    return userState 
}

}
export const addToCartReducer = (cartState,action)=>{
    
    switch(action.type){
        case "ADD_CART":
          return [...cartState,action.payload]
         case "DELETE_CART":
           return cartState.filter((item)=> item._id !== action.payload) 
          default:
            return cartState
    }
}