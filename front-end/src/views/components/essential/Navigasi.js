import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../../styles/Navigasi.css';

export default function Navigasi(props) {
    const text_selected = { color: "#75daad" };
    const nav_colour = { background: "#eeeeee" };
    return (
        <Navbar className="justify-content-around shadow p-3 mb-5 bg-white rounded" style={nav_colour}>
            <Nav style={{ fontWeight: "bold" }} >
                { props.selectedPage == "explore" ? ( <Link className="nav-link" style={text_selected} to="/">Explore</Link>) :  <Link className="nav-link" to="/">Explore</Link> }
                { props.selectedPage == "technology" ? ( <Link className="nav-link" style={text_selected} to="/technology">Technology</Link>) :  <Link className="nav-link" to="/technology">Technology</Link> }
                { props.selectedPage == "tutorial" ? ( <Link className="nav-link" style={text_selected} to="/tutorial">Tutorial</Link>) :  <Link className="nav-link" to="/tutorial">Tutorial</Link> }
                { props.selectedPage == "about" ? ( <Link className="nav-link" style={text_selected} to="/about">About</Link>) :  <Link className="nav-link" to="/about">About</Link> }
            </Nav>
        </Navbar>
    )
}




