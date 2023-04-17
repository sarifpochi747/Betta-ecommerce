import "../styles/product-details.css"
import { useParams } from "react-router-dom";
import products from "../assets/data/products"
import React ,{useState,useRef}from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../Helmet/helmet";
import { motion } from "framer-motion";
import ProductList from "../UI/productList";
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux/slices/cartSlice';
import {  toast } from 'react-toastify';
import useGetData from "../custom-hooks/useGetData";

const ProductDetails =()=>{
    const {data:productsData,loading} = useGetData("product");
    const dispatch = useDispatch();
    const {id} = useParams()
    const fectData = productsData.filter(item=> item.id == id)
    const dataCa = fectData.category
    const relatedProducts = productsData.filter(item=> item.category === dataCa)

    //const {imgUrl, productName,price ,colour,date,size,gender,category} = fectData[0];
    const addTocart = ()=>{
        dispatch(cartAction.addItem({
            id:fectData[0].id,
            productName:fectData[0].productName,
            price:fectData[0].price,
            imgUrl:fectData[0].imgUrl,
            size:fectData[0].size,
            gender:fectData[0].gender,
            date:fectData[0].date,
            colour:fectData[0].colour
          })
        );
    
        toast.success("product added to the cart");
    }

    return(
        <Helmet >
            <section  className="pt-0">
                <Container>
                    <Row>
                        <Col lg='6' className="product_img1">
                            <div className="product_img">
                               {
                                fectData.map((item)=>(
                                    <img src={item.imgUrl}/> 

                                ))
                               }
                            </div>
                        </Col>
                        <Col lg='6' >
                            <div className="product__details">
                                {
                                    fectData.map((item)=>(
                                        <>
                                            <h2>{item.productName}</h2>
                                            <span >Species : {item.category}</span>
                                            <span >Gender : {item.gender}</span>
                                            <span >Size: {item.size} cm</span>
                                            <span >Colour : {item.colour}</span>
                                            <span className="product__price mt-3">Price :${item.price}</span>
                                        </>

                                    ))
                                }
                                <p className="mt-3 product__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt autem vero laudantium nobis assumenda quidem voluptates nulla nesciunt nostrum harum voluptate, molestias aliquid in necessitatibus ex! Provident quam ipsum eos?</p>
                                <motion.button    whileHover={{scale: 1.2}} className="buy_btn"  onClick={addTocart}>Add to Cart</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        

        </Helmet>
    )
}

export default ProductDetails;