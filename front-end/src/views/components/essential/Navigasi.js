import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import '../../styles/Navigasi.css';

export default class Navigasi extends Component {
    render() {
        const text_selected = { color: "#75daad" };
        const text_color = { color: "black" };
        const nav_colour = { background: "#eeeeee" };
        const nav_fixed = { position: "fixed" };
        
        return (
            <Navbar className="justify-content-around shadow p-3 mb-5 bg-white rounded" style={ nav_colour }>
                <Nav style={{fontWeight: "bold"}} >
                    <Nav.Link style={text_selected} href="#home">Explore</Nav.Link>
                    <Nav.Link style={text_color} href="#features">Technology</Nav.Link>
                    <Nav.Link style={text_color} href="#pricing">Tutorial</Nav.Link>
                    <Nav.Link style={text_color} href="#pricing">About</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}


