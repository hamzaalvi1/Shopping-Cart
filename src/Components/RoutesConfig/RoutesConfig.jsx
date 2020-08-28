import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "../Home/Home"
import Products from "../Products/Products"
import Product from "../Product/Product"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import NotFound from "../Notfound/NotFound"
import Navbar from '../Navbar/Navbar'
import AddtoCart from "../AddToCart/AddtoCart"




 const  RoutesConfig = ()=> {
    return (
        <div>
            <Router>
                <Navbar/>
              <Routes>
                  <Route path = "/" element = {<Home greet = "Hello World"/>}/>
                  <Route path = "products" element = {<Products/>}/>
                  <Route path = "products/:prodName" element = {<Product/>}/>
                  <Route path = "signin" element = {<SignIn/>}/>
                  <Route path = "signup" element = {<SignUp/>}/>
                  <Route path = "addToCart" element = {<AddtoCart/>}/>
                  <Route path = "*" element = {<NotFound/>}/>
              </Routes>
            </Router>
        </div>
    )
}

export default RoutesConfig