import React, { Component } from 'react'
import { Alert, Container, Card } from 'react-bootstrap';

export default class Heading extends Component {
    render() {
        return (
            <header>
                <Container>
                    <Alert className="d-flex flex-column  mt-5 handwriting">
                        <Alert.Heading className="monospace"><h1>Hi, nice to see you</h1></Alert.Heading>
                        <p className="monospace">
                            Welcome to our gallery of our work.
                        </p>
                        <hr />
                        <p className="mb-0">

                        </p>
                    </Alert>
                </Container>
            </header>
        )
    }
}
