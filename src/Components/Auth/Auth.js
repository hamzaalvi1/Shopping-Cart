import {useState} from "react"

export const Auth = ()=>{
 const [isAuthenticated,setIsAuthenticated] = useState(true)
 
 const isLogIn = ()=>{
     setIsAuthenticated(true)
 }
 const isLogOut = ()=>{
     setIsAuthenticated(false)
 }
 return {isAuthenticated,isLogIn,isLogOut}
}