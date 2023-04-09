import React ,{useEffect, useState}from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../Helmet/helmet";
import "../styles/shop.css";
import ProductList from "../UI/productList";
import {  collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import useGetData from "../custom-hooks/useGetData";

const Shop =()=>{
    const {data:product,loading} = useGetData("product");
    const [productsData,setProductsData] = useState([]);

    const handlerFilter = (event)=>{
        const filtertValue = event.target.value;
        if (filtertValue === "Betta splendens")
        {
            const filterProducts = product.filter(item =>item.category === "Betta splendens")
            setProductsData(filterProducts)
        }
        if (filtertValue === "Betta coccina")
        {
            const filterProducts = product.filter(item =>item.category === "Betta coccina")
            setProductsData(filterProducts)
        }
        if (filtertValue === "Betta albimarginata")
        {
            const filterProducts = product.filter(item =>item.category === "Betta albimarginata")
            setProductsData(filterProducts)
        }
        if(filtertValue === "all")
        {
            setProductsData(product)
        }
    }


    const handlerSearch = (event)=>{
        const searchTearm = event.target.value;
        const searchProducts = product.filter(item =>item.productName.toLowerCase().includes(searchTearm.toLowerCase()))
        setProductsData(searchProducts)
    }
    

    const fectData = async ()=>{
        await getDocs (collection(db,"product"))
        .then((querySnapshot)=>
        {
            const data  = querySnapshot.docs.map((doc) =>({...doc.data(),id:doc.id}))
            setProductsData(data)
            console.log(productsData,data);
        })
    }
    useEffect(()=>{
        fectData();
    },[]);

    return(
        <Helmet title = {"SHOP"}>
            <section>
                <Container>
                    <Row>
                        <Col lg='3' md ='3'>
                            <div className="filter__widget">
                                <select onClick={handlerFilter}>
                                    <option value={"all"}>Filter by Category (All)</option>
                                    <option value="Betta splendens">Betta splendens</option>
                                    <option value="Betta coccina">Betta coccina</option>
                                    <option value="Betta albimarginata">Betta albimarginata</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md ='6'>
                            <div className="search__box">
                                <input type={"text"} placeholder={"search...."} onChange={handlerSearch}/>
                                <span>
                                    <i className="ri-searach-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        {
                            productsData.length === 0? <h1>No products are found!</h1>:
                            <ProductList data = {productsData}/>
                        }
                    </Row>
                </Container>
            </section>



        </Helmet>
    )
}

export default Shop;