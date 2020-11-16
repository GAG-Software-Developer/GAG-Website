import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import List_Projek from '../components/list-project';
import Navigation from '../../essential/navigation';
import './../../../styles/navigasi.css';



export default class explore extends Component {
    render() {
        return (
            <div>
                <Navigation selectedPage="explore" />
                <section>
                    <Container className="pt-4 pb-5">
                        <h1 style={{ fontWeight: "bold" }}>Crafting seamless <i style={{ color: "lightseagreen" }} className="code">experiences</i></h1>
                        <h1 style={{ fontWeight: "bold" }}>through <i style={{ color: "lightskyblue" }} className="code">software</i> you <i style={{ color: "lightcoral" }} className="code">love</i></h1>
                        <p style={{ fontWeight: "italic", fontFamily: "Roboto" }}>Welcome to my labs of works. Let's take a look my projects</p>
                    </Container>
                </section>
                <List_Projek />
            </div >
        )
    }
}
