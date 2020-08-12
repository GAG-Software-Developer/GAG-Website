import React, { Component } from 'react'
import { Alert, Container, Row } from 'react-bootstrap';

export default class Heading_Konten extends Component {
    render() {
        return (
            <header>
                <Container>
                
                    <Row>
                        <div className="col-lg-8">
                        <h1 className="text-left font-weight-bold">Cryptosystem</h1>
                            <p className="text-left">Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must. Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship.</p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-3">
                            <h4 className="text-left font-weight-bold">Tools</h4>
                            <ul className="text-left">
                                <li>React</li>
                                <li>Redux</li>
                                <li>MongoDB</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                            </ul>
                            <h4 className="text-left font-weight-bold">Source</h4>
                            <p className="text-left">https://github.com/giovannitjahjono</p>
                        </div>
                    </Row>
                </Container>
            </header>
        )
    }
}
