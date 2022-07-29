import React from 'react';
import '../styles/header.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaFacebook , FaInstagram } from 'react-icons/fa';
const MyNav = () => {
    return (
        <>
        
           <div className='main-nav-sec'>
                <Navbar bg="transparent" expand="lg">
                    <Container className="nav-con">
                        <Navbar.Brand href="#home"><img src="./images/logonew.png" className="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="col-md-12 justify-content-end nav-list">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/#about">About</Nav.Link>
                                <Nav.Link href="/#skills">Skills</Nav.Link>
                                <Nav.Link href="/#projects">Projects</Nav.Link>
                                <Nav.Link href="/#conrtact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            {/* <div className="main-nav-sec">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a
                                className="App-link"
                                to="/"
                                rel="noopener noreferrer"
                            ><img className="logo" src="./images/logonew.png" width={150}></img></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">

                                        <a to="/" className="nav-link active" >Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to="/about">About</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " to="/products" aria-expanded="false"> Projects </a>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/blogs" className="nav-link active" >Blogs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " to="/contact" rel="noopener noreferrer">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </div> */}
        </>
    );
}

export default MyNav;