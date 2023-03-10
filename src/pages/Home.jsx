import React, { useEffect } from "react";
import { useState } from "react";
import Helmet from "../Helmet/helmet";
import '../styles/home.css';
import ProductList from "../UI/productList";
import imghero from "../assets/images/hero-img.png";
import Service from "../service/service";
import products from "../assets/data/products";


import { Container,Row,Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import serviceData from "../assets/data/serviceData";
const Home =()=>{
    const [data,setData] = useState(products);

    useEffect(()=>{
        const filteredProducts = products.filter(item=>item.category === "chair")
        setData(filteredProducts);
    },[]);





    return(
            <Helmet title = {"HOME"}>
                <section className="hero_section">
                    <Container>
                        <Row>
                            <Col lg = '6' md = '6'>
                                <div className="hero_content">
                                    <p className="hero_subtitle">Trending product in 2025</p>
                                    <h2>Make Your Fuck</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia itaque eveniet 
                                        velit architecto delectus incidunt unde ullam temporibus, nulla, ut aspernatur reiciendis, 
                                        eos adipisci voluptatibus dolore fuga tenetur molestias quasi quo fugiat. Eum earum 
                                        dolorum quibusdam tenetur quasi sint minus ipsa aperiam reiciendis! Ea 
                                        officiis dolor harum voluptate rerum!</p>
                                        <motion.button    whileHover={{scale: 1.2}}
                                        className="buy_btn"><Link to={"/shop"}>SHOP NOW</Link></motion.button>
                                </div>
                            </Col>
                            <Col lg='6' md ='4'>
                                <img src={imghero}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Service/>
                <section className="trending_products">
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <h2 className="section_title">Trending Products</h2>
                            </Col>
                            <ProductList data={data}/>
                        </Row>
                    </Container>
                </section>


            </Helmet>
            
    )
}

export default Home;