import React ,{useState}from 'react';
import { Container,Row,Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import Overlay from "react-overlay-component";
import { doc,deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import "../styles/order.css"


export default function Order() {

    const {data:orderData,loading} =  useGetData("order");
    const [isOpen, setOverlay] = useState(false);
    const [dataDetail,setDataDetail] = useState([])
    const closeOverlay = () => setOverlay(false);

    const deleteOrder= async(id)=>{
      await deleteDoc(doc(db,"order",id));
      toast.success("Deleded!")
    }

    const paidOrder = async (id,s)=>{
      await updateDoc(doc(db,"order",id),{
        status:s 
      });
    }

    const configs = {
      animate: true,
      showCloseIcon: false,
      clickDismiss: false,
      escapeDismiss: false,
      focusOutline: true,
    }

    const showdetails = (cartItems)=>{
      setDataDetail(cartItems)
      console.log(cartItems,dataDetail)
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
                        <th>id-Order</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Addrees</th>
                        <th>Phone</th>
                        <th>Total Price</th>
                        <th>Total Quality</th>
                        <th>Status</th>
                        <th>Products Details</th>
                        <th>Action</th>
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
                              <td>{item.status}</td>
                              <td><button className='btn btn-info bg-info' onClick={()=>showdetails(item.cartItems)} >SHOW</button></td>
                              <td className='td_action '>
                                <button className='btn_paid btn btn-success bg-success' onClick={()=>paidOrder(item.id,"paid")} disabled={item.status == "no-paid" ?false:true} >PAID</button>
                                <button className='btn_nopaid btn btn-success bg-success mt-3' onClick={()=>paidOrder(item.id,"no-paid")} disabled={item.status == "paid" ?false:true} >NO-PAID</button>
                                <button className='btn_delete btn btn-danger bg-danger' onClick={()=>deleteOrder(item.id)} >DELETE</button>
                              </td>
                            </tr>
                        )))
                      }
                    </tbody>
                  </table>
            </Col>
            <Col lg="12" >
              <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay} >
                  <h2 className='text-center'>Product Details</h2>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Colour</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Total Price</th>
                        <th>Total Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          (dataDetail.map((item) => (
                            <tr key={item.id} >
                              <td>
                                <img src={item.imgUrl} />
                              </td>
                              <td>{item.productName}</td>
                              <td>{item.date}</td>
                              <td>{item.colour}</td>
                              <td>{item.size}</td>
                              <td>${item.price}</td>
                              <td>${item.totalPrice}</td>
                              <td>{item.quantity}</td>
                            </tr>
                        )))
                      }
                    </tbody>
                  </table>
                      <button
                        className="btn btn-danger"
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
