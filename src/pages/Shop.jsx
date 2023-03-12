import React ,{useState}from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../Helmet/helmet";
import CommonSection from "../UI/commonSection";
import "../styles/shop.css";
import ProductList from "../UI/productList";
import products from "../assets/data/products";

const Shop =()=>{
    const [productsData,setProductsData] = useState(products);


    const handlerFilter = (event)=>{
        const filtertValue = event.target.value;
        if (filtertValue === "Betta splendens")
        {
            const filterProducts = products.filter(item =>item.category === "Betta splendens")
            setProductsData(filterProducts)
        }
        if (filtertValue === "mobile")
        {
            const filterProducts = products.filter(item =>item.category === "mobile")
            setProductsData(filterProducts)
        }
        if (filtertValue === "chair")
        {
            const filterProducts = products.filter(item =>item.category === "chair")
            setProductsData(filterProducts)
        }
    }


    const handlerSearch = (event)=>{
        const searchTearm = event.target.value;
        const searchProducts = products.filter(item =>item.productName.toLowerCase().includes(searchTearm.toLowerCase()))
        setProductsData(searchProducts)
    }

    return(
        <Helmet title = {"SHOP"}>
            <section>
                <Container>
                    <Row>
                        <Col lg='3' md ='3'>
                            <div className="filter__widget">
                                <select onClick={handlerFilter}>
                                    <option>Filter By Category</option>
                                    <option value = "Betta splendens">Betta splendens</option>
                                    <option value = "mobile">Mobile</option>
                                    <option value = "chair">Chair</option>
                                    <option value = "wireless">Wireless</option>
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