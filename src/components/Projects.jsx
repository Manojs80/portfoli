import React from 'react'
import { Row } from 'react-bootstrap'
import "./Project.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Projects() {
  return (
    <div className='container-fluid projectb' >
         <div className='projecth pt-5 '>
            PROJECTS
         </div>
        <Row className=' pt-4 pb-2' >
             <Card className='mx-auto' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/2E/4D/9924ca8e-0346-4572-a530-6000e8010d6f.jpg" />
             <Card.Body>
             <Card.Title>MAJOR-PROJECT</Card.Title>
             <Card.Text>
              Human Detection Robot
             </Card.Text>
             <a href='https://www.electronicshub.org/human-detection-robot/' >  <Button variant="primary">Know More</Button></a> 
           </Card.Body>
            </Card>
       </Row>

        <Row className='pt-4 pb-5' >
             <Card className='mx-auto ' style={{ width: '18rem' }}>
            <Card.Img variant="top" className='p-4' src="https://cdn.imagearchive.com/homemodelenginemachinist/data/attach/84/84346-PXL-20211102-003212278.jpg" />
             <Card.Body>
             <Card.Title>MINI-PROJECT</Card.Title>
             <Card.Text>
             Programmable college bell
             </Card.Text>
            <a href='https://www.homemade-circuits.com/automatic-school-college-bell-system-using-arduino/' >  <Button variant="primary">Know More</Button></a> 
           </Card.Body>
            </Card>
        </Row>
    
    </div>
  )
}

export default Projects