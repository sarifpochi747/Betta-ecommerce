import React from 'react';
import "../styles/common-section.css"
import { Container,Row,Col } from 'reactstrap';
export default function CommonSection({title}) {
  return (
    <section className='common__section'>
        <Container className='text-center'>
            <h1>{title}</h1>
        </Container>
    </section>
  )
}
