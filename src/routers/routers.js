import React from 'react';
import { BrowserRouter,Routes ,Route,Link, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from './protectedRoute';

const Routers = ()=>{
    return(

        <Routes>
            <Route path={"/"} element={<Navigate to ="home"/>}/>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/shop/:id"} element={<ProductDetails/>}/>
            <Route path={"/shop"} element={<Shop/>}/>
            <Route path={"/checkout"} element={
                <ProtectedRoute>
                    <Checkout/> 
                </ProtectedRoute>
            }/>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
        </Routes>
    )
}

export default Routers;