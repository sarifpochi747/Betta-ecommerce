import React, { useState } from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { toast } from 'react-toastify'
import {db,storage} from "../firebase.config";
import { ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import {collection,addDoc} from "firebase/firestore"
import { useNavigate } from "react-router-dom";


export default function AddProducts() {

  const navigate = useNavigate();

  const [enterName,setEnterName] = useState('')
  const [enterGender,setEnterGender] = useState('')
  const [enterSize,setEnterSize] = useState('')
  const [enterColour,setEnterColour] = useState('')
  const [enterPrice,setEnterPrice] = useState('')
  const [enterCategory,setEnterCategory] = useState('Betta splendens')
  const [enterDate,setEnterDate] = useState('')
  const [enterImage,setEnterImage] = useState(null)
  const [loading,setLoading] = useState(false);

  const addProduct = async(e)=>{
    e.preventDefault();
    setLoading(true);

    // ========= add product to the firebase database=================
    try {
      
      const docRef = await collection(db,"product");
      //store image
      const docAdd = await addDoc(docRef,{
          productName:enterName,
          gender:enterGender,
          size:enterSize,
          category:enterCategory,
          imgUrl:enterImage,
          colour:enterColour,
          date:enterDate,
          price:enterPrice,
      })

        setLoading(false);
        toast.success("product successfully added");
        navigate("/dashboard/all-products");




    } catch (error) {

      setLoading(false);
      toast.error("something went wrong")
      
    }
  }
    return(
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            {
              loading?(
                  <Col lg='12' className="text-center">
                      <h1 className="py-5 text-center fw-bold">Loading....</h1>
                  </Col>
              ):(
                  <Col lg='12' >
                    <h4 className='mb-5'>Add Product</h4>
                    <Form onSubmit={addProduct}>
                      <FormGroup className='form__group'>
                          <span>Name Product</span>
                          <input type="text " placeholder='Name.....' value={enterName} onChange={e => setEnterName(e.target.value)} required/>
                      </FormGroup>
                      <FormGroup className='form__group'>
                          <span>Gender</span>
                          <input type="text " placeholder='Male / Female' value={enterGender} onChange={e => setEnterGender(e.target.value)} required/>
                      </FormGroup>
                      <FormGroup className='form__group'>
                          <span>Size</span>
                          <input type="number " placeholder='1.4 cm' value={enterSize} onChange={e => setEnterSize(e.target.value)} required/>
                      </FormGroup>
                      <FormGroup className='form__group'>
                          <span>Colour</span>
                          <input type="text " placeholder='Colour' value={enterColour} onChange={e => setEnterColour(e.target.value)} required/>
                      </FormGroup>
                      <FormGroup className='form__group'>
                          <span>Date</span>
                          <input type="text " placeholder='2 month' value={enterDate} onChange={e => setEnterDate(e.target.value)} required/>
                      </FormGroup>
      
                      <div className="d-flex align-items-center justify-content-between gap-5">
                        <FormGroup className='form__group w-50'>
                            <span>Price</span>
                            <input type="number " placeholder='$100' value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required/>
                        </FormGroup>
      
                        <FormGroup className='form__group w-50 '>
                            <span>Category</span>
                            <select className='w-100 p-2' value={enterCategory} onChange={e => setEnterCategory(e.target.value)} required>
                              <option value="Betta splendens">Betta splendens</option>
                              <option value="Betta coccina">Betta coccina</option>
                              <option value="Betta albimarginata">Betta albimarginata</option>
                            </select>
                        </FormGroup>
                      </div>
                      <FormGroup className='form__group'>
                        <span>Product Image</span>
                        <input type="text" placeholder='URL' value={enterImage} onChange={e => setEnterImage(e.target.value)} required/>
                      </FormGroup>
      
      
                      <button className='buy_btn'>Add Product</button>
                    </Form>
                  </Col>
                )
            }
            </Col>
          </Row>
        </Container>
      </section>
    )


}