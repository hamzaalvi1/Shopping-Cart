import React, {createContext,useReducer} from "react"
import ShoesData from "../Database/Shoes.json"
import {usersReducer,addToCartReducer} from "./Reducers"
import {Auth} from "../Auth/Auth"

export const ShoeContext = createContext()


export const ShoeProvider = ({children})=>{
const userSignUp = [];
const cartItems = [];

const {isAuthenticated,isLogIn,isLogOut} = Auth()
// const [isAuthenticated,setIsAuthenticated] = useState(false)
const [userState,userDispatch] = useReducer(usersReducer,userSignUp)
const [cartState,cartDispatch] = useReducer(addToCartReducer,cartItems)
const shoes = ShoesData.map((shoe)=> shoe)
return(
    <ShoeContext.Provider value = {{shoes,userState,userDispatch,
    isAuthenticated,isLogIn,isLogOut,cartState,cartDispatch}}>
     {children}
    </ShoeContext.Provider>
)

}
