import React, {createContext,useReducer} from "react"
import ShoesData from "../Database/Shoes.json"
import {usersReducer} from "../Context/userReducer"
import {Auth} from "../Auth/Auth"

export const ShoeContext = createContext()


export const ShoeProvider = ({children})=>{
const userSignUp = [];
const {isAuthenticated,isLogIn,isLogOut} = Auth()
// const [isAuthenticated,setIsAuthenticated] = useState(false)
const [userState,userDispatch] = useReducer(usersReducer,userSignUp)
const shoes = ShoesData.map((shoe)=> shoe)
return(
    <ShoeContext.Provider value = {{shoes,userState,userDispatch,isAuthenticated,isLogIn,isLogOut}}>
     {children}
    </ShoeContext.Provider>
)

}
