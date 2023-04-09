import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import "../styles/dashborad.css";
import useGetData from '../custom-hooks/useGetData';
export default function Dashboard() {
    const {data:users} = useGetData("users")
    const {data:product} = useGetData("product")
    return(
      <>
        <section>
          <Container>
            <Row>
                <Col className="lg-3">
                  <div className='revenue__box'>
                    <h5>Total Sales</h5>
                    <span>$1111</span>
                  </div>
                </Col>
                  <Col className="lg-3">
                    <div className="order__box">
                      <h5>Orders</h5>
                      <span>$7777</span>
                    </div>
                  </Col>
                  <Col className="lg-3">
                    <div className="products__box">
                      <h5>Total Products</h5>
                      <span>{product.length}</span>

                    </div>
                  </Col>
                  <Col className="lg-3">
                    <div className="user__box">
                      <h5>Total Users</h5>
                      <span>{users.length}</span>
                    </div>
                  </Col>
            </Row>
          </Container>
        </section>
      
      </>
    )


}
