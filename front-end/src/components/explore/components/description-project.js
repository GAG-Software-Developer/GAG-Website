import React, { Component, Fragment } from 'react'
import { Container, Card, Spinner, Badge, Row } from 'react-bootstrap';
import axios from 'axios'

export default class description_project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail_project: [],
            isLoading: true
        }
    }
    componentDidMount() {
        //http://localhost:8000/posting-detail/posting-detail-read?id_posting=5f4b59e70d8f647bf0746b24

        axios.get('http://localhost:8000/posting-detail/posting-detail-read?id_posting=' + this.props.id_project)
            .then(response => this.setState({ detail_project: response.data, isLoading: false }));
    }
    render() {
        const { detail_project, isLoading } = this.state;
        const leftCardStyle = true;
        console.log(detail_project.map((project) =>
            project.project_detail.forEach(element => {
                console.log(element);
            })
        ));
        if (isLoading) {
            return (
                <Fragment>
                    <Spinner className="mr-3" animation="grow" variant="primary" />
                    <Spinner className="mr-3" animation="grow" variant="danger" />
                    <Spinner className="mr-3" animation="grow" variant="warning" />
                </Fragment>
            )
        }
        return (
            <Fragment>
                <header>
                    <Container>

                        <Row>

                            <div className="col-lg-8">
                                <h1 className="text-left font-weight-bold">Cryptosystem</h1>
                                {detail_project.map((project) => <p className="text-left">{project.overview}</p>)}

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
                <Container>
                    {
                        detail_project.map((project) =>
                        
                            leftCardStyle ? (
                                <Row className="align-items-center">
                                    <div className="col-lg-7">
                                        <img className="img-fluid mb-3 shadow-lg" src={require('../../../assets/projek_images/12.png')} alt="image1"></img>
                                    </div>
                                    <div className="col-lg-5">
                                        <h4 className="text-left font-weight-bold">Future Prove</h4>
                                        <p className="text-left">This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                                    </div>
                                </Row>
                            ) : (
                                    <Row className="align-items-center">
                                        <div className="col-lg-5">
                                            <h4 className="text-left font-weight-bold">Excellent Coding Design</h4>
                                            <p className="text-left">This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                                        </div>
                                        <div className="col-lg-7">
                                            <img className="img-fluid shadow-lg" src={require('../../../assets/projek_images/13.png')} alt="image1"></img>
                                        </div>
                                    </Row>
                                )
                        )
                    }
                </Container>
            </Fragment>
        )
    }
}


