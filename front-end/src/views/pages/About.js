import React, { Component, Fragment } from 'react';
import Navigasi from '../components/essential/Navigasi';
import About_page from '../components/about/About';
import { Container, Alert } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Fragment>

<Navigasi selectedPage="about" />
                <header>
                    <Container>
                        <Alert className="d-flex flex-column  mt-5 handwriting">
                            <Alert.Heading className="monospace"><h1>About GAG</h1></Alert.Heading>
                            <p className="monospace">GAG is an portfolio website of Giovanni Tjahjono and Galih Samudro. at GAG, it will shows their both individual and team awesome project, in programming and user experience field</p>
                            <hr />
                            <p className="mb-0">

                            </p>
                        </Alert>
                    </Container>
                </header>
                <About_page />
            </Fragment>
        )
    }
}
