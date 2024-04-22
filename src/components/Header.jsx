import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-dark" >
      <Container >
        <Navbar.Brand ><h4 className="text-light  " ><b>MANOJ S</b></h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={Link} to={'/'} className="text-light"><b>Home</b></Nav.Link>            
            <Nav.Link as={Link} to={'/Projects'} className="text-light">Project</Nav.Link>
            <Nav.Link as={Link} to={'/Education'} className="text-light">Education</Nav.Link>
            <Nav.Link as={Link} to={'/Resume'} className="text-light">Resume</Nav.Link>
            
            <Nav.Link as={Link} to={'/Contact'} className="text-light">Contact</Nav.Link>
            <NavDropdown className="text-light bg-light m-0" title="More" id="collapsible-nav-dropdown" >
            <Nav.Link as={Link} to={'/Resume'} >Download CV</Nav.Link>
              <NavDropdown.Item as={Link} to={'/Experience'} >Experience</NavDropdown.Item>
              <NavDropdown.Item href="https://maps.app.goo.gl/HMWr9r43CC366zcJ6">
                Location
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Search For Something 
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Header
