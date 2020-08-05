import React, {createContext} from "react"
import ShoesData from "../Database/Shoes.json"
import Auth from "../Auth/Auth"

export const ShoeContext = createContext()

export const ShoeProvider = ({children})=>{
const {isAuthenticated,isLogIn,isLogOut} = Auth
const shoes = ShoesData.map((shoe)=> shoe)
return(
    <ShoeContext.Provider value = {{shoes,isAuthenticated,isLogIn,isLogOut}}>
     {children}
    </ShoeContext.Provider>
)

}
