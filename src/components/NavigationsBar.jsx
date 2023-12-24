import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const NavigationsBar = (
    // didie jang pasing data
    // Jadi jiga nyieun func dengan parameter
    {children} // tah parameter eta jang passing data na
) => { //Bentrok
  return (
    <div> 
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                
                    <Link to={"/"}>Home</Link>
                    <Link to={"/booking"}>Booking</Link>
                    <Link to={"/contact"}>Contact</Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            {children}
            {/* langsung panggil kumaha we jika nyieun ngan ngaran komponen na  */}

            <Footer/>
            {/* Kusabab Footer te boga children jadi cukup <Footer/> */}
            {/* Tingali tab vs code  eta tab vscode aya buleud can d save nggeus s*/}
    </div>
  )
}

// urang hyg linkeun pagena liuer ajig sarua ngaranna index ma, di ganti moal nanaon meren ?
// dipanggil folderna berarti 
// Lain di panggil folder na tapi rout na
// Tingali di file App.jsx
// tebisa make '<Nav.Link href="#home">Booking</Nav.Link>' kudu make <Link to=""/>
// contoan supaya navbar di pake di kabeh page we, konten ma ke deui 
// Supaya aya kabeh berarti kudu passing dat leawat props ....
// huuh jadi header siga harita tea jadi teu kudu nyiuen tombol back 