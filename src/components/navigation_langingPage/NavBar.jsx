import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navBar.css';

const NavBar = () => {
    return (
        <Navbar expand="sm" className='mx-auto' >
           
                {/*   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="m-auto ">

                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>
                        <Nav.Link href="#link">Therapist</Nav.Link>
                        <Nav.Link href="#link">Contacts</Nav.Link>

                    </Nav>

                    <NavDropdown title="Login as" id="basic-nav-dropdown" className=''>
                        <NavDropdown.Item href="#action/3.1" className='border rounded-pill border my-1' style={{ border: "1px solid #F9EEE1" }}>User</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" className='border rounded-pill border my-1' style={{ border: "1px solid #F9EEE1" }}>
                            terapist
                        </NavDropdown.Item>
                    </NavDropdown>
                {/* </Navbar.Collapse> */}
          
        </Navbar>
    )
}

export default NavBar