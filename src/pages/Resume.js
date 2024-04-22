import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Resume = () => {
  return (
      <div className='container-fluid'>
      <Row className='justify-content-center bg-black' >
        <Col md={10}>
        <iframe src="./Images/resume.pdf" width="100%" height="700vw" />
        </Col>
        </Row>
        </div>
     
 )
}

export default Resume
/* 
import React from ‘react’;

const PDFViewer = () => {
 return (
 <div>
 <iframe src=”path_to_pdf_file.pdf” width=”100%” height=”500px” />
 </div>
 );
};
export default PDFViewer;
*/