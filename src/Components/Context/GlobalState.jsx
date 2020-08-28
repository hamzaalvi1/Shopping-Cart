import React, {createContext,useReducer} from "react"
import ShoesData from "../Database/Shoes.json"
import Auth from "../Auth/Auth"
import {usersReducer} from "../Context/userReducer"
export const ShoeContext = createContext()

export const ShoeProvider = ({children})=>{
const userSignUp = [];
const [userState,userDispatch] = useReducer(usersReducer,userSignUp)
const {isAuthenticated,isLogIn,isLogOut} = Auth
const shoes = ShoesData.map((shoe)=> shoe)
return(
    <ShoeContext.Provider value = {{shoes,isAuthenticated,isLogIn,isLogOut,userState,userDispatch}}>
     {children}
    </ShoeContext.Provider>
)

}
