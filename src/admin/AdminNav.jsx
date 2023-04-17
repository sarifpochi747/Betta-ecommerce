import React from 'react';
import { Container,Row } from 'reactstrap';
import UserAuth from '../custom-hooks/userAuth';
import "../styles/admin-nav.css"
import { NavLink,useNavigate } from 'react-router-dom';
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import userrIcon from "../assets/images/user-icon.png"


const admin__nav = [
  {
    display:"Dashboard",
    path:"/dashboard"
  },
  {
    display:"AddProducts",
    path:"/dashboard/add-products"
  },
  {
    display:"AllProducts",
    path:"/dashboard/all-products"
  },
  {
    display:"Order",
    path:"/dashboard/orders"
  },
  {
    display:"Users",
    path:"/dashboard/users"
  },
  
]




export default function AdminNav() {
  const navigate = useNavigate();

  const logout = ()=>{
    signOut(auth).then(()=>{
        toast.success("Logged out")
        navigate("/login");
    }).catch(err=>{
        toast.error(err.message)
    })
  }



  return (
    <>
      <header className='admin__header'>
        <div className="admin__nav-top">

          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h1>BETTA ECOMMERCE</h1>  
              </div>

              <div className="search__box">
                <input type="text" placeholder='search.....' />
                <span><i className="ri-search-line"></i></span>
              </div>

              <div className="admin__nav-top-right">
                <span><i className="ri-notification-3-line"></i></span>
                <span><i className="ri-settings-2-line"></i></span>
                <img src={userrIcon}/>
                <div className="logout">
                  <span    onClick={logout}>Logout</span>                                          
                </div>
              </div>

              
            </div>
          </Container>
        </div>
      </header>
    
      <section className='admin__menu p-0'>
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {
                  admin__nav.map((item,index) => (
                    <li className="admin__menu-item" key={index}>
                      <NavLink to={item.path} 
                                className={navClass=> navClass.isActive? "active__admin-menu":""} >
                        {item.display}
                        </NavLink>
                    </li>
                  ))
                }
              </ul>

            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}
