
import React, { Component, Fragment } from 'react'
import { Container, Card, Spinner, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../styles/stylish-portfolio.css'
import '../../../styles/navigasi.css';
import axios from 'axios';

import config from '../../../config.json';
const id_user = config['id_user'];
const url_server = config['url_server'];

export default class list_tutorial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tutorials: [],
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get(url_server + 'api/tutorial')
            .then(response => this.setState({ tutorials: response.data, isLoading: false }));
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
        const { tutorials, isLoading } = this.state;
        //console.log(tutorial);
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
                            {tutorials.map((tutorial) =>
                                <div className="col-lg-4" key={tutorial._id}>
                                    <Link className="btn" to={'/Detail-Tutorial/' + tutorial._id}>
                                        <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item">
                                            <div className="portfolio-item">
                                                <img className="img-fluid" src={require('../../../assets/tutorial_images/' + tutorial.image_tutorial)} alt="" />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{tutorial.title_tutorial}</Card.Title>

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
