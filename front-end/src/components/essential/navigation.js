import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../../styles/navigasi.css';

export default function navigation(props) {
    const text_selected = { color: "#75daad" };
    const nav_colour = { background: "#eeeeee" };
    return (
        <Navbar className="justify-content-around shadow p-3 mb-5 bg-white rounded" sticky="top" style={nav_colour}>
            <Nav style={{ fontWeight: "bold" }} >
                {props.selectedPage === "explore" ? (<Link className="nav-link" style={text_selected} to="/">Explore</Link>) : <Link className="nav-link" to="/">Explore</Link>}
                {props.selectedPage === "laboratory" ? (<Link className="nav-link" style={text_selected} to="/laboratory">Laboratory</Link>) : <Link className="nav-link" to="/laboratory">Laboratory</Link>}
                {props.selectedPage === "contact" ? (<Link className="nav-link" style={text_selected} to="/contact">Contact</Link>) : <Link className="nav-link" to="/contact">Contact</Link>}
                {props.selectedPage === "about" ? (<Link className="nav-link" style={text_selected} to="/about">About</Link>) : <Link className="nav-link" to="/about">About</Link>}
            </Nav>
        </Navbar>
    )
}




