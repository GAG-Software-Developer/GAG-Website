import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavbarBrand, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import '../../styles/navigasi.css';

export default function navigation(param) {
    return (

        <Fragment>

            <Navbar className="justify-content-center navbar-expand-lg shadow p-3 mb-5 rounded bg-white" sticky="top" expand="lg" style={{ opacity: 0.96 }}>
                <Container>
                    <Navbar.Brand style={{ fontWeight: "bold" }} >Giovanni <NavbarBrand style={{ color: "lightcoral" }}> Works</NavbarBrand></Navbar.Brand>

                    <Navbar.Toggle aria-controls="menu" />
                    <Navbar.Collapse id="menu" className="justify-content-center">
                        <Nav style={{ fontWeight: "bold" }} id="menu">
                            {param.selectedPage === "explore" ? (<Link className="nav-link" style={{ color: "lightseagreen" }} to="/">Explore</Link>) : <Link className="nav-link" to="/">Explore</Link>}
                            {param.selectedPage === "laboratory" ? (<Link className="nav-link" style={{ color: "lightskyblue" }} to="/laboratory">Laboratory</Link>) : <Link className="nav-link" to="/laboratory">Laboratory</Link>}
                            {param.selectedPage === "contact" ? (<Link className="nav-link" style={{ color: "orange" }} to="/contact">Contact</Link>) : <Link className="nav-link" to="/contact">Contact</Link>}
                            {param.selectedPage === "about" ? (<Link className="nav-link" style={{ color: "lightcoral" }} to="/about">About</Link>) : <Link className="nav-link" to="/about">About</Link>}
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand className="d-none d-lg-block" style={{ fontWeight: "bold" }, { color: "white" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Navbar.Brand>

                </Container>
            </Navbar >

        </Fragment>

    )
}



