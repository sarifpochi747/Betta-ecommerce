import React, { useEffect } from "react";
import { useState } from "react";
import Helmet from "../Helmet/helmet";
import '../styles/home.css';
import imghero from "../assets/images/fishhome.png";
import Service from "../service/service";
import products from "../assets/data/products";
import ProductList from "../UI/productList";


import { Container,Row,Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Home =()=>{
    const [data,setData] = useState(products);

    useEffect(()=>{
        const filteredProducts = products.filter(item=>item.category === "Betta splendens")
        setData(filteredProducts);
    },[]);





    return(
            <Helmet title = {"HOME"}>
                 <section className="hero_section">
                    <Container>
                        <Row>
                            <Col lg = '6' md = '6'>
                                <div className="hero_content">
                                    <p className="hero_subtitle">SHOP FOR BETTA NOW</p>
                                    <h2>BETTA ECOMMERCE</h2>
                                    <p>Betta Fishes are also called living Fengshui, 
                                        we are delivering top quality grade betta from Thailand, Usual delivery will take 2-7 days 
                                        depending upon the distance of travel. We are delivering 100% genuine items which are ordered by you.
                                        100% live guarantee, 100% satisfaction on our products.</p>
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
                <section>
                    <Container>
                        <Row>
                        {
                            data.length === 0? <h1>No products are found!</h1>:
                            <ProductList data = {data}/>
                        }
                        </Row>
                    </Container>
                 </section>


            </Helmet>
            
    )
}

export default Home;