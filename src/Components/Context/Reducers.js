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
          case "ADD_QUANTITY":
            return cartState.filter((item)=> item._id === action.payload ? item.quantity += 1 : item.quantity ) 
           case "MINUS_QUANTITY":
             return cartState.filter((item)=> item._id === action.payload && item.quantity !== 1 ? item.quantity -=1 : item.quantity)   
            case "CLEAR_ALL":
            return cartState = []
            default:
            return cartState
    }
}