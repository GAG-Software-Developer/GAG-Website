import React, { Component, Fragment } from 'react'
import { Container, Card, Spinner, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../styles/stylish-portfolio.css'
import '../../../styles/navigasi.css';
import axios from 'axios';
import config from '../../../config.json';
const id_user = config['id_user'];
const url_server = config['url_server'];

export default class list_project extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get(url_server + 'posting/posting-read?id=' + id_user)
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
        const { isLoading, projects } = this.state;
        //console.log(projects);
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
                            {projects.map((project) =>
                                <div className="col-lg-4" key={project._id}>
                                    <Link className="btn" to={'/Detail-Projek/' + project._id}>
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
                                                    <Badge pill variant={(project.type_posting === "UX Research") ? "info" : (project.type_posting === "Mobile Application") ? "success" : (project.type_posting === "Fullstack") ? "danger" : "warning"}>{project.type_posting}</Badge>
                                                </footer>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Container>
                </section>
            )
        }
    }
}


