import React from "react";
import "../styles/login.css"
import { useState } from "react";
import Helmet from "../Helmet/helmet";
import { Container,Row,Col,Form,FormGroup } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { NavLink,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login =()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);


    const login= async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            
            const userCreadentail = await signInWithEmailAndPassword(auth, email, password);
            const user = userCreadentail.user;

            console.log(user.uid)

            setLoading(false);
            toast.success("Successfully logged in");
            if(user.uid === "Ri12xTEFIHesjEwp4DvK2NLuqel1")
            {

                navigate("/dashboard");
            }
            else
            {

                navigate("/shop");
            }

        } catch (error) {
            setLoading(false);
            toast.error("something went wrong")
        }

    }






    return(
        <Helmet title={"Log-in"}>
            <section>
                <Container>
                    <Row>
                        {
                            loading?
                            (
                                <Col lg='12' className="text-center">
                                    <h5 className="fw-bold">Loading....</h5>
                                </Col>
                            ):(
                                <Col lg='6' className="m-auto text-center">
                                    <h3 className="fw-bold fs-4">Login</h3>

                                    <Form className="auth__form" onSubmit={login}>
                                        <FormGroup className="form__group" >
                                            <input type="email" placeholder="Enter your Email" value={email} onChange={e=>setEmail(e.target.value)} />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                            <input type="password" placeholder="Enter your password" value={password} onChange={e=>setPassword(e.target.value)} />
                                        </FormGroup>
                                        <button className="buy_btn login" type="submit">Login</button>
                                        <p>Don't have an account?{" "}<Link to={"/signup"}>Create an account</Link></p>
                                    </Form>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login;