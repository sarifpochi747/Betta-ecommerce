import React, { useEffect, useRef} from "react";
import "./header.css";
import { useSelector } from "react-redux";
import 'remixicon/fonts/remixicon.css'
import logo from "../assets/images/eco-logo.png"
import { Container, Row } from "reactstrap";
import { Link,NavLink,useNavigate } from "react-router-dom";
import userrIcon from "../assets/images/user-icon.png"
import { motion } from "framer-motion";
import UserAuth from "../custom-hooks/userAuth";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase.config";



const  Header=()=>{
    
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const navigate = useNavigate();
    const navigateToCart = ()=>{navigate("/cart")}
    const {currentUser} = UserAuth();
    const profileActionsRef = useRef(null);
    


    const logout = ()=>{
        signOut(auth).then(()=>{
            toast.success("Logged out")
            navigate("/login");
        }).catch(err=>{
            toast.error(err.message)
        })
    }




    return(
        
        <header className="header" >
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <div>
                                <h1>BETTA ECOMMERCE</h1>    
                            </div>
                        </div>

                        <div className="navigation">
                            <ul className="menu">
                                <li className="nav__item" >
                                    <NavLink to={"home"} >Home</NavLink>
                                </li>
                                <li className="nav__item" >
                                    <NavLink to={"shop"} >Shop</NavLink>
                                </li>
                                <li className="nav__item" >
                                    <NavLink to={"cart"} >Cart</NavLink>
                                </li>
                                <li className="nav__item" >
                                    <NavLink to={"/payment"} >Payment</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <span className="fav__icon">
                                <i className="ri-heart-line"></i>
                                <div className="badge"><span >{totalQuantity}</span></div>
                            </span>
                            <span className="cart__icon" onClick={navigateToCart}>
                                <i class="ri-shopping-cart-line"></i>
                                <div className="badge"><span >{totalQuantity}</span></div>
                            </span>

                            <div className="profile" >
                                <motion.img ref={profileActionsRef} whileTap={{scale:1.2}} src={userrIcon} alt=""/>
                                <div className="profile__actions" >
                                    {
                                        currentUser? (
                                            <div className="logout">
                                                <span    onClick={logout}>Logout</span>                                          
                                            </div>
                                        ):(
                                            <div className="logon-logout">
                                                <NavLink to={"/dashboard"} >Dashboard</NavLink>                                            
                                                <NavLink to={"/signup"} >Signup </NavLink>                                            
                                                <NavLink to={"/login"} >Login</NavLink>                                            
                                            </div>
                                        )
                                    }
                                </div>

                                </div>
                        </div>
                    </div>
                </Row>
            </Container>
            
        </header>
    )
}

export default Header;