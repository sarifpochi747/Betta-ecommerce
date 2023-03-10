import React from "react";
import { Container,Row,Col,Form,FormGroup } from "reactstrap";
import "../styles/check-out.css"
import Helmet from "../Helmet/helmet";
import { useSelector } from "react-redux";



const Checkout =()=>{
    const totalQuantity= useSelector((state) => state.cart.totalQuantity);
    const totalAmout = useSelector((state) => state.cart.totalAmount);

    
    return(
        <Helmet title={"CheckOut"}>
            <section>
                <Container>
                    <Row>
                        <Col lg='8' className="m-auto text-center">
                            <h6 className="mb-4 fw-bold">
                                Billing Information
                            </h6>
                            <Form>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Enter your name" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="email" placeholder="Enter your email" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="numberr" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Street address" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="City" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Postal code" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Country" />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg='4'>
                            <div className="checkout__cart">
                                <h6>Total Qty: <span>{totalQuantity}</span></h6>
                                <h6>Subtotal: <span>${totalAmout}</span></h6>
                                <h4>Total Cost: <span>${totalAmout}</span></h4>
                                <button className="buy_btn auth__btn">Place an order</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout;