import React from 'react'
import  "./Icons.css";
import { Col, Container, Row } from 'react-bootstrap';
function Icons() {
  return (
    <Container>
    <Row className='i-p'>
     <Col>
     <div className='icon bg-black'>
          <ul className='' >
            <li><a href='https://www.facebook.com/manu.sivadasan.35?mibextid=ZbWKwL' ><i  class="bi bi-facebook "></i> </a></li>
            <li><a href='https://m.me/Manu Sivadasan'><i class="bi bi-messenger"></i></a></li>
            <li><a href='https://wa.me/9847862400?text=Hello'><i class="bi bi-whatsapp"></i></a></li> 
            <li><a href="mailto:08041996kallada@gmail.com"><i class="bi bi-envelope-at-fill"></i></a></li>
            <li><a href='https://github.com/Manojs80'><i class="bi bi-github"></i></a></li>
            <li> <a href="tel:+919847862400"><i class="bi bi-telephone-outbound-fill"></i></a></li>
          </ul>
       </div>
       </Col>
       </Row>
       </Container>
  );
}

export default Icons