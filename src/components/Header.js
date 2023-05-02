import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import {
  FaArrowRight
}from "react-icons/fa";
function Header() {
  const Logout = () =>{
    window.location.reload(true)
    sessionStorage.clear();
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const navigate=useNavigate();
  return (
    <div className=''>

       <Navbar collapseOnSelect expand="lg"  variant="dark" className='text-2xl bg-gray-900 '>
      <Container>
      <img className='w-20 h-20 rounded-full my-3' src='https://images-platform.99static.com/4opJGDcNqWg_LOP7i7lm5_K3rI0=/500x500/top/smart/99designs-contests-attachments/7/7123/attachment_7123946'/>
      <Navbar.Brand href="#home" className='text-4xl p-3 text-red-700 font-bold ' style={{fontFamily:'roboto'}}>DigicarRentals</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className='gap-3'>
            {/* <Nav.Link href="#deets"><Button variant='outline-info'>Info</Button></Nav.Link> */}
            <Link to="/"><Button variant='outline-info'>ViewCars</Button></Link>
            <Link to="./historyPage"><Button variant='outline-info'>History</Button></Link>
            <Link to="./statusPage"><Button variant='outline-info'>Feedback</Button></Link>
            <Link eventKey={2} href="#memes">
              <Button  variant='outline-info' onClick={Logout}>Logout</Button> 
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;