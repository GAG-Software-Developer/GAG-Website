import React, { Component, Fragment } from 'react'
import { Container, Card, Spinner, Badge } from 'react-bootstrap';
import '../../../styles/stylish-portfolio.css'
import '../../../styles/navigasi.css';
import axios from 'axios';

export default class list_project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/posting/posting-read')
            .then(response => this.setState({ projects: response.data, isLoading: false }));
    }
    getRandomBadgeColor() {
        const color = Math.floor(Math.random() * (7 - 1)) + 1;
        switch (color) {
            case 1: return "primary"
            case 2: return "secondary"
            case 3: return "success"
            case 4: return "danger"
            case 5: return "warning"
            case 6: return "info"
            default: return "dark"
        }

    }
    render() {
        const { projects, isLoading } = this.state;
        //=const projects= this.state.projects;
        if (isLoading) {
            return (
                <Fragment>
                    <Spinner className="mr-3" animation="grow" variant="primary" />
                    <Spinner className="mr-3" animation="grow" variant="danger" />
                    <Spinner className="mr-3" animation="grow" variant="warning" />
                </Fragment>
            )
        } else {
            return (
                <section className="content-section" id="portfolio">
                    <Container>
                        <div className="row no-gutters">
                            {/*
                            {projects.map((project) =>
                                <div className="col-lg-4" key={project._id}>
                                    <a href="#!" className="btn">
                                        <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item">
                                            <div className="portfolio-item">
                                                <img className="img-fluid" src={require('../../../assets/projek_images/'+ project.image_posting)} alt="" />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{project.title_posting}</Card.Title>
                                                <footer className="blockquote-footer">
                                                    <small className="text-muted">
                                                        <cite title="Source Title">{project.quote_posting}</cite>
                                                    </small>
                                                </footer>
                                                {project.attribute.map((value, index) => {
                                                    return <Fragment><Badge key={index} pill variant={this.getRandomBadgeColor()}>{value}</Badge>{' '}</Fragment>
                                                })}

                                            </Card.Body>
                                        </Card>
                                    </a>
                                </div>
                            )}
                            */}
                            {projects.map((project) =>
                                <div className="col-lg-4" key={project._id}>
                                    <a href="#!" className="btn">
                                        <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item">
                                            <div className="portfolio-item">
                                                <img className="img-fluid" src={require('../../../assets/projek_images/' + project.image_posting)} alt="" />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{project.title_posting}</Card.Title>
                                                <footer className="blockquote-footer">
                                                    <small className="text-muted">
                                                        <cite title="Source Title">{project.quote_posting}</cite>
                                                    </small>
                                                </footer>
                                                <footer className="footer">
                                                    <Badge pill variant={(project.owner_name_posting == "Galih Samudro") ? "info" : "warning"}>{project.owner_name_posting}</Badge>
                                                </footer>


                                            </Card.Body>
                                        </Card>
                                    </a>
                                </div>
                            )}
                        </div>
                    </Container>
                </section>
            )
        }
    }
}


