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
import AdminNav from '../admin/AdminNav';
import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';
import Order from '../admin/Order';
import Payment from '../pages/Payment'


const Routers = ()=>{
    return(

        <Routes>
            <Route path={"/"} element={<Navigate to ="home"/>}/>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/shop/:id"} element={<ProductDetails/>}/>
            <Route path={"/shop"} element={<Shop/>}/>


            <Route path={"/*"} element={<ProtectedRoute/>}>
                <Route path={"dashboard"} element={<Dashboard/>}/>
                <Route path={"checkout"} element={<Checkout/>}/>
                <Route path={"dashboard/all-products"} element={<AllProducts/>}/>
                <Route path={"dashboard/add-products"}element={<AddProducts/>}/>
                <Route path={"dashboard/users"}element={<Users/>}/>
                <Route path={"dashboard/orders"}element={<Order/>}/>
                <Route path={"payment"} element={<Payment/>}/>
            </Route>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
        </Routes>
    )
}

export default Routers;