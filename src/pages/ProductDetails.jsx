import "../styles/product-details.css"
import { useParams } from "react-router-dom";
import products from "../assets/data/products"
import React ,{useState,useRef}from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../Helmet/helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductList from "../UI/productList";
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails =()=>{
    const dispatch = useDispatch();
    const {id} = useParams()
    const product = products.find(item =>item.id === id )
    
    const {imgUrl, productName,price ,colour,date,size,gender,category} = product;
    const relatedProducts = products.filter(item=> item.category === category)
    const addTocart = ()=>{
        dispatch(cartAction.addItem({
          id,
          image:imgUrl,
          productName,
          category,
          colour,
          size,
          date,
          gender,
          price
          })
        );
    
        toast.success("product added to the cart");
      }

    return(
        <Helmet title={productName}>
            <section  className="pt-0">
                <Container>
                    <Row>
                        <Col lg='6' >
                            <div className="product_img">
                                <img src={imgUrl}/>
                            </div>
                        </Col>
                        <Col lg='6' >
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <span >Species : {category}</span>
                                <span >Gender : {gender}</span>
                                <span >Size: 1.4 cm</span>
                                <span >colour : red</span>
                                <span className="product__price mt-3">${price}</span>
                                <p className="mt-3 product__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt autem vero laudantium nobis assumenda quidem voluptates nulla nesciunt nostrum harum voluptate, molestias aliquid in necessitatibus ex! Provident quam ipsum eos?</p>
                                <motion.button    whileHover={{scale: 1.2}} className="buy_btn"  onClick={addTocart}>Add to Cart</motion.button>
                            </div>
                        </Col>
                        <Col lg='12' className="mt-5">
                            <h2 className="related__title">You might also like</h2>
                        </Col>
                        <ProductList data = {relatedProducts}/>
                    </Row>
                </Container>
            </section>
        

        </Helmet>
    )
}

export default ProductDetails;