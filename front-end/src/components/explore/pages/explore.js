import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import List_Projek from '../components/list-project';
import Navigation from '../../essential/navigation';
import './../../../styles/navigasi.css';



export default class explore extends Component {
    render() {
        return (
            <div>
                <Navigation selectedPage="explore" />
                <section>
                    <Container className="mt-5 mb-5 pt-5 pb-5">
                        <h1 style={{ fontWeight: "bold" }}>Crafting seamless <i style={{ color: "lightseagreen" }}>experiences</i></h1>
                        <h1 style={{ fontWeight: "bold" }}>through <i style={{ color: "lightskyblue" }}>software</i> you <i style={{ color: "lightcoral" }}>love</i></h1>
                        <p style={{ fontWeight: "italic", fontFamily: "Roboto" }}>Welcome to my labs of works. Let's take a look my projects</p>
                    </Container>
                </section>
                <List_Projek />
            </div >
        )
    }
}
