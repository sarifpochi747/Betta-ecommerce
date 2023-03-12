import React, { useState } from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'

export default function AddProducts() {

  const [enterTitle,setEnterTitle] = useState('')



    return(
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h4 className='mb-5'>Add Product</h4>
              <Form>
                <FormGroup className='form__group'>
                    <span>ID Product</span>
                    <input type="text " placeholder='01'/>
                </FormGroup>
                <FormGroup className='form__group'>
                    <span>Gender</span>
                    <input type="text " placeholder='Male / Female'/>
                </FormGroup>
                <FormGroup className='form__group'>
                    <span>Size</span>
                    <input type="number " placeholder='1.4 cm'/>
                </FormGroup>
                <FormGroup className='form__group'>
                    <span>Colour</span>
                    <input type="text " placeholder='Colour'/>
                </FormGroup>

                <div className="d-flex align-items-center justify-content-between gap-5">
                  <FormGroup className='form__group w-50'>
                      <span>Price</span>
                      <input type="number " placeholder='$100'/>
                  </FormGroup>

                  <FormGroup className='form__group w-50 '>
                      <span>Category</span>
                      <select className='w-100 p-2'>
                        <option value="Betta splendens">Betta splendens</option>
                        <option value="Betta coccina">Betta coccina</option>
                        <option value="Betta albimarginata">Betta albimarginata</option>
                      </select>
                  </FormGroup>
                </div>
                <FormGroup className='form__group'>
                  <span>Product Image</span>
                  <input type="file" />
                </FormGroup>


                <button className='buy_btn'>Add Product</button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )


}
