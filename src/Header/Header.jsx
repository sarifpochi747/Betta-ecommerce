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
    
    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const navigate = useNavigate();
    const navigateToCart = ()=>{navigate("/cart")}
    const {currentUser} = UserAuth();
    const profileActionsRef = useRef(null);
    
    const stickyHeaderFunc = ()=>{
        window.addEventListener("scroll",()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
            {
                headerRef.current.classList.add("sticky__header");
            }
            else{
                headerRef.current.classList.remove("sticky__header");
            }
        });
    };

    const logout = ()=>{
        signOut(auth).then(()=>{
            toast.success("Logged out")
            navigate("/login");
        }).catch(err=>{
            toast.error(err.message)
        })
    }
    useEffect(()=>{
        stickyHeaderFunc();
        return()=> window.removeEventListener("scroll",stickyHeaderFunc);
    });

    const toggleProfileActions = ()=> profileActionsRef.current.classList.toggle("show__profileActios");


    return(
        
        <header className="header" ref={headerRef}>
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
                                <div className="badge"><span >3</span></div>
                            </span>
                            <span className="cart__icon" onClick={navigateToCart}>
                                <i className="ri-shopping-bag-line" ></i>
                                <div className="badge"><span >{totalQuantity}</span></div>
                            </span>

                            <div className="profile" >
                                <motion.img ref={profileActionsRef} whileTap={{scale:1.2}} src={userrIcon} alt="" onClick = {toggleProfileActions}/>
                                <div className="profile__actions"  onClick = {toggleProfileActions}>
                                    {
                                        currentUser? (
                                            <span onClick={logout}>Logout</span>
                                        ):(
                                            <div className="d-flex align-items-center justify-content-center flex-column">
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