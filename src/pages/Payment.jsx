import React, { useState } from 'react'
import { Container,Row,Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import UserAuth from "../custom-hooks/userAuth";
import Overlay from "react-overlay-component";
import QRCode from 'qrcode'
import "../styles/payment.css"
import { useSelector } from "react-redux";


export default function Payment() {
  const totalAmout = useSelector((state) => state.cart.totalAmount);

  const {data:orderData,loading} =  useGetData("order");
  const {currentUser} = UserAuth();
  const orderUser = orderData.filter(item=>item.userid === currentUser.uid)
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const [url, setUrl] = useState('https://www.google.co.th/')
  const [qr, setQr] = useState('')

  const configs = {
    animate: true,
    showCloseIcon: false,
    clickDismiss: false,
    escapeDismiss: false,
    focusOutline: true,
  }
  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 400,
      margin: 2,
      color: {
          dark: '#335383FF',
          light: '#EEEEEEFF'
      }
      }, (err, url) => {
          if (err) return console.error(err)
          console.log(url)
          setQr(url)
      })
    
    setOverlay(true)
    }

  return (
    <section>
      <Container>
        <Row>
        <Col lg="12">
                <table className='table'>
                    <thead>
                      <tr>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Addrees</th>
                        <th>Phone</th>
                        <th>Total Price</th>
                        <th>Total Quality</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Bill</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                         loading ? 
                          (<h1 className="py-5 text-center fw-bold">Loading....</h1>)
                          :
                          (orderUser.map((item) => (
                            <tr key={item.id} >
                              <td>{item.fullname}</td>
                              <td>{item.email}</td>
                              <td>{item.street} , {item.city} , {item.country} , {item.postcode}</td>
                              <td>{item.numberPhone}</td>
                              <td>${item.price}</td>
                              <td>{item.quality}</td>
                              <td>{item.status}</td>
                              <td><button className='paynow btn btn-info bg-info ' onClick={GenerateQRCode} >Pay Now</button></td>
                              <td><input type='file'/>payment receipt</td>
                            </tr>
                        )))
                      }
                    </tbody>
                  </table>
            </Col>
            <Col>
            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay} >
                  <img src={"https://www.ppro.com/wp-content/uploads/2021/06/PromptPay-logo.png"} className='logo-promtpay'/>
                  <img src={qr} className='qr-code'/>
                  <div className="checkout__cart mt-2">
                      <h4>Total Cost: <span>${totalAmout}</span></h4>
                  </div>
                      <button
                        className="btn btn-danger mt-4 "
                        onClick={() => {
                          setOverlay(false)
                        }}
                      >
                        close
                      </button>
              </Overlay>
            </Col>
        </Row>
      </Container>
    </section>
  )
}