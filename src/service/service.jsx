import React from 'react'
import "./service.css"
import { Container,Row,Col } from "reactstrap";
import { motion } from "framer-motion";
import serviceData from "../assets/data/serviceData";
export default function Service() {
  return (
    <>
        <section className="service">
            <Container>
                <Row>
                    {
                        serviceData.map((item,index)=>(
                            <Col lg = '3' md = '4' key={index}>
                                <div className='service_item'>
                                    <span><i className={item.icon}></i></span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    </>
    
  )
}
