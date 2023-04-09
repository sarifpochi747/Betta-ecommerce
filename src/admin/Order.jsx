import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { doc,deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
export default function Order() {

    const {data:orderData,loading} =  useGetData("order");
    


    return (
        <section>
        <Container>
          <Row>
            <Col lg="12">
                <table className='table'>
                    <thead>
                      <tr>
                        <th>id-Order</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Addrees</th>
                        <th>Phone</th>
                        <th>Total Price</th>
                        <th>Total Quality</th>
                        <th>Order Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                         loading ? 
                          (<h1 className="py-5 text-center fw-bold">Loading....</h1>)
                          :
                          (orderData.map((item) => (
                            <tr key={item.id} >
                              <td>{item.id}</td>
                              <td>{item.fullname}</td>
                              <td>{item.email}</td>
                              <td>{item.street} , {item.city} , {item.country} , {item.postcode}</td>
                              <td>{item.numberPhone}</td>
                              <td>${item.price}</td>
                              <td>{item.quality}</td>
                              <td><button className='btn btn-info bg-info' >show</button></td>
                            </tr>
                        )))
                      }
                    </tbody>
                  </table>
            </Col>
          </Row>
        </Container>

      </section>
    )
}
