import React, { Component } from 'react';
import { Container, Alert } from 'react-bootstrap';
import '../../../styles/navigasi.css';
import '../../../styles/stylish-portfolio.css'
import List_Projek from '../components/list-project';
import Navigation from '../../essential/navigation';


export default class explore extends Component {
    render() {
        return (
            <div>
                <Navigation selectedPage="explore" />
                <header>
                    <Container>
                        <Alert className="d-flex flex-column  mt-5 handwriting">
                            <Alert.Heading className="monospace"><h1>Hi, Hendro Tjahjono</h1></Alert.Heading>
                            <p className="monospace">Welcome to our gallery of our work.</p>
                            <hr />
                            <p className="mb-0">

                            </p>
                        </Alert>
                    </Container>
                </header>
                <List_Projek />
            </div>
        )
    }
}
