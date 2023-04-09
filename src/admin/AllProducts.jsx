import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { doc,deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';




export default function AllProducts() {

  const {data:productsData,loading} = useGetData("product");
  const deleteProduct = async(id)=>{
    await deleteDoc(doc(db,"product",id));
    toast.success("Deleded!")
  }




  return (
      <section>
        <Container>
          <Row>
            <Col lg="12">
                <table className='table'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Colour</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                         loading ? 
                          (<h1 className="py-5 text-center fw-bold">Loading....</h1>)
                          :
                          (productsData.map((item) => (
                            <tr key={item.id} >
                              <td>
                                <img src={item.imgUrl} />
                              </td>
                              <td>{item.productName}</td>
                              <td>{item.category}</td>
                              <td>{item.date}</td>
                              <td>{item.colour}</td>
                              <td>{item.size}</td>
                              <td>${item.price}</td>
                              <td><button className='btn btn-danger bg-danger' onClick={()=>{deleteProduct(item.id)}}>Delete</button></td>
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


