import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import '../../styles/navigasi.css';

export default function navigation(props) {
    return (
        <Navbar className="justify-content-between shadow p-3 mb-5 rounded bg-white" sticky="top" style={{ opacity: 0.96 }}>
            <Container>
                <Navbar.Brand style={{ fontWeight: "bold" }} >Giovanni <NavbarBrand style={{ color: "lightcoral" }}> Works</NavbarBrand></Navbar.Brand>
                <Nav style={{ fontWeight: "bold" }} >
                    {props.selectedPage === "explore" ? (<Link className="nav-link" style={{ color: "lightseagreen" }} to="/">Explore</Link>) : <Link className="nav-link" to="/">Explore</Link>}
                    {props.selectedPage === "laboratory" ? (<Link className="nav-link" style={{ color: "lightskyblue" }} to="/laboratory">Laboratory</Link>) : <Link className="nav-link" to="/laboratory">Laboratory</Link>}
                    {props.selectedPage === "contact" ? (<Link className="nav-link" style={{ color: "orange" }} to="/contact">Contact</Link>) : <Link className="nav-link" to="/contact">Contact</Link>}
                    {props.selectedPage === "about" ? (<Link className="nav-link" style={{ color: "lightcoral" }} to="/about">About</Link>) : <Link className="nav-link" to="/about">About</Link>}
                </Nav>
                <Navbar.Brand style={{ fontWeight: "bold" }, { color: "white" }}>Giovanni Works</Navbar.Brand>

            </Container>
        </Navbar >
    )
}




