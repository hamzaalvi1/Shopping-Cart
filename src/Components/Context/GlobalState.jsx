import React, {createContext} from "react"
import ShoesData from "../Database/Shoes.json"

export const ShoeContext = createContext()

export const ShoeProvider = ({children})=>{
const shoes = ShoesData.map((shoe)=> shoe)
return(
    <ShoeContext.Provider value = {{shoes}}>
     {children}
    </ShoeContext.Provider>
)

}
