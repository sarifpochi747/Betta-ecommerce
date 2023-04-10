import React from "react";
import "../styles/login.css"
import { useState } from "react";
import Helmet from "../Helmet/helmet";
import { Container,Row,Col,Form,FormGroup } from "reactstrap";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import { Link,useNavigate } from "react-router-dom";

import {setDoc,doc} from "firebase/firestore"
import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";
import { toast } from "react-toastify";



const Signup =()=>{
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [file,setFile] = useState(null);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();



    const signup = async(e)=>{
        e.preventDefault();
        setLoading(true);

        try {
            const userCreadentail = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCreadentail.user;
            
            const docAdd = await setDoc(doc(db,"users",user.uid),{
                uid:user.uid,
                displayName:username,
                email,
            });
            
            setLoading(false);
            toast.success("Account created");
            navigate("/home");

            
        } catch (error) {

            setLoading(false);
            toast.error("something went wrong")
        }


        //setEmail("")
       // setPassword("")
    }



    return(
        <Helmet title={"Sign-up"}>
            <section>
                <Container>
                    <Row>
                        {
                            loading?(
                                <Col lg='12' className="text-center">
                                    <h1 className="fw-bold py-5 text-center">Loading....</h1>
                                </Col>
                            ):(
                                <Col lg='6' className="m-auto text-center">
                                <h3 className="fw-bold fs-4">Signup</h3>

                                <Form className="auth__form" onSubmit={signup}>
                                    <FormGroup className="form__group">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            value={email} 
                                            onChange={e=>setEmail(e.target.value)} 
                                            required
                                            />
                                    </FormGroup>
                                    <FormGroup className="form__group">
                                        <input 
                                            type="text" 
                                            placeholder="Enter your Username" 
                                            value={username} 
                                            onChange={e=>setUsername(e.target.value)}
                                            required />
                                    </FormGroup>
                                    <FormGroup className="form__group">
                                        <input 
                                            type="password" 
                                            placeholder="Enter your password" 
                                            value={password} 
                                            onChange={e=>setPassword(e.target.value)} 
                                            required
                                            />
                                    </FormGroup>
                                    <button className="buy_btn login" type="submit">Create an account</button>
                                    <p>Already have an account?{" "}<Link to={"/login"}>Login</Link></p>
                                </Form>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup;