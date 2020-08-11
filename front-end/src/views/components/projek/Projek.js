import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap';
import '../../styles/Navigasi.css';
import '../../styles/stylish-portfolio.css'

export default class Projek extends Component {
    render() {
        return (
            <section className="content-section" id="portfolio">
            <Container>
                <div className="row no-gutters">
                    <div className="col-lg-4">
                    <a  href="#!" className="btn">
                    <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item">
                        <div className="portfolio-item">
                           <img className="img-fluid" src={require('../../../assets/projek_images/1.jpg')} alt="" />
                       </div>
                        <Card.Body>
                        <Card.Title>Cryptosystem</Card.Title>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </Card.Body>
                    </Card>
                    </a>
                    </div>
                    <div className="col-lg-4">
                    <a  href="#!" className="btn">
                    <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item">
                        <div className="portfolio-item">
                           <img className="img-fluid" src={require('../../../assets/projek_images/2.jpg')} alt="" />
                       </div>
                        <Card.Body>
                        <Card.Title>Lumbung Seni</Card.Title>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </Card.Body>
                    </Card>
                    </a>
                    </div>
                    <div className="col-lg-4">
                    <a  href="#!" className="btn">
                    <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item">
                        <div className="portfolio-item">
                           <img className="img-fluid" src={require('../../../assets/projek_images/3.jpg')} alt="" />
                       </div>
                        <Card.Body>
                        <Card.Title>Titipedia</Card.Title>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </Card.Body>
                    </Card>
                    </a>
                    </div>
                    <div className="col-lg-4">
                    <a  href="#!" className="btn">
                    <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item">
                        <div className="portfolio-item">
                           <img className="img-fluid" src={require('../../../assets/projek_images/4.jpg')} alt="" />
                       </div>
                        <Card.Body>
                        <Card.Title>Android</Card.Title>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </Card.Body>
                    </Card>
                    </a>
                    </div>
                    <div className="col-lg-4">
                    <a  href="#!" className="btn">
                    <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item">
                        <div className="portfolio-item">
                           <img className="img-fluid" src={require('../../../assets/projek_images/5.jpg')} alt="" />
                       </div>
                        <Card.Body>
                        <Card.Title>iOS</Card.Title>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </Card.Body>
                    </Card>
                    </a>
                    </div>
                    <div className="col-lg-4">
                    <a  href="#!" className="btn">
                    <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item">
                        <div className="portfolio-item">
                           <img className="img-fluid" src={require('../../../assets/projek_images/6.jpg')} alt="" />
                       </div>
                        <Card.Body>
                        <Card.Title>React</Card.Title>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                        </Card.Body>
                    </Card>
                    </a>
                    </div>
                </div>
            </Container>
        </section>
        )
    }
}


