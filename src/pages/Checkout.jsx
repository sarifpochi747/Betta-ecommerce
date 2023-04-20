import React, { useEffect, useState } from "react";
import { Container,Row,Col,Form,FormGroup } from "reactstrap";
import "../styles/check-out.css"
import Helmet from "../Helmet/helmet";
import { useSelector } from "react-redux";
import {db,storage} from "../firebase.config";
import {collection,addDoc} from "firebase/firestore"
import { toast } from 'react-toastify'
import UserAuth from "../custom-hooks/userAuth";




const Checkout =()=>{

    const {currentUser} = UserAuth();
    const totalQuantity= useSelector((state) => state.cart.totalQuantity);
    const totalAmout = useSelector((state) => state.cart.totalAmount);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [fullname,setFullName] = useState();
    const [email,setEmail] = useState();
    const [numberPhone,setNumberPhone] = useState();
    const [street,setStreet] = useState();
    const [city,setCity] = useState();
    const [postalcode,setPostalCode] = useState();
    const [country,setCountry] = useState();
    const [loading,setLoading] = useState(false);
    const [statusbtn,setStatusBtn] = useState(true)
    const placeOrder =  async (e)=>{
        e.preventDefault();
        
        setLoading(true)
        // ========= add order to the firebase database=================
        try {
            const docRef = await collection(db,"order");
            const docAdd = await addDoc(docRef,{
                userid:currentUser.uid,
                fullname:fullname,
                email:email,
                numberPhone:numberPhone,
                street:street,
                city:city,
                postcode:postalcode,
                country:country,
                price:totalAmout,
                quality:totalQuantity,
                status:"no-paid",
                cartItems
            })
            toast.success("product successfully order added");
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error("something went wrong")
            console.log(error)
        }
        setCity("");
        setCountry("");
        setEmail("");
        setFullName("");
        setNumberPhone("");
        setPostalCode("");
        setStreet("");

    }


    useEffect(()=>{

        if(totalAmout> 0)
        {
            setStatusBtn(false)
        }
    },[totalAmout])
    
    return(
        <Helmet title={"CheckOut"}>
            <section>
                <Container>
                    <Row>
                            {
                                loading?
                                (
                                    <Col lg='12' className="text-center">
                                        <h1 className="py-5 text-center fw-bold">Loading....</h1>
                                    </Col>
                                ):(
                                    <>
                                        <Col lg='8' className="m-auto text-center">
                                            <h6 className="mb-4 fw-bold">
                                                Billing Information
                                            </h6>
                                        <Form onSubmit={placeOrder}>
                                            <FormGroup className="form__group">
                                                <input type="text" placeholder="Enter your fullname" 
                                                value={fullname} 
                                                onChange={e=>setFullName(e.target.value)} 
                                                required
                                                />
                                            </FormGroup>
                                            <FormGroup className="form__group">
                                                <input type="email"  
                                                value={email} 
                                                placeholder="Enter your email" 
                                                onChange={e=>setEmail(e.target.value)} 
                                                required
                                                />
                                            </FormGroup>
                                            <FormGroup className="form__group">
                                                <input type="number" placeholder="Phone Number"
                                                value={numberPhone} 
                                                onChange={e=>setNumberPhone(e.target.value)} 
                                                required
                                                />
                                            </FormGroup>
                                            <FormGroup className="form__group">
                                                <input type="text" placeholder="street address"
                                                value={street} 
                                                onChange={e=>setStreet(e.target.value)} 
                                                required
                                                />
                                            </FormGroup>
                                            <FormGroup className="form__group">
                                                <input type="text" placeholder="city"
                                                value={city} 
                                                onChange={e=>setCity(e.target.value)} 
                                                required
                                                />
                                            </FormGroup>
                                            <FormGroup className="form__group">
                                                <input type="text" placeholder="Country" 
                                                value={country} 
                                                onChange={e=>setCountry(e.target.value)} 
                                                required
                                                />
                                            </FormGroup>
                                            <FormGroup className="form__group">
                                                <input type="text" placeholder="Postal code"
                                                value={postalcode} 
                                                onChange={e=>setPostalCode(e.target.value)} 
                                                required
                                                />
                                            </FormGroup>
                                            <button className="buy_btn auth__btn btn btn-info bg-info" disabled={statusbtn}>Place an order</button>
                                        </Form>
                                        </Col>
                                        <Col lg='4' className="checkout__cart_col">
                                            <div className="checkout__cart">
                                                <h6>Total Qty: <span>{totalQuantity}</span></h6>
                                                <h6>Subtotal: <span>${totalAmout}</span></h6>
                                                <h4>Total Cost: <span>${totalAmout}</span></h4>
                                            </div>
                                        </Col>
                                    </>
                                )
                            }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout;