import React ,{useState}from 'react';
import { Container,Row,Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import Overlay from "react-overlay-component";

export default function Order() {

    const {data:orderData,loading} =  useGetData("order");
    const [isOpen, setOverlay] = useState(false);

    const closeOverlay = () => setOverlay(false);



    const configs = {
      animate: true,
      showCloseIcon: false,
      focusOutline: true,
    }


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
                              <td><button className='btn btn-info bg-info' onClick={()=>{setOverlay(true)}} >show</button></td>
                            </tr>
                        )))
                      }
                    </tbody>
                  </table>
            </Col>
            <Col>
              <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                  <h2>Sample header</h2>
                  <p>text content</p>
                      close modal
              </Overlay>
            </Col>
          </Row>
        </Container>

      </section>
    )
}
