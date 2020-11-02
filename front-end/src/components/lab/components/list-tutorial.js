
import React, { Component, Fragment } from 'react'
import { Container, Card, Spinner } from 'react-bootstrap';
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
            isLoading: true,
            errorMessage: ''
        }
    }
    // Load data from backend after the components have mounted
    componentDidMount() {
        // Do HTTP Request with Axios
        axios.get(url_server + 'api/tutorial')
            // Set the state with recieving data
            .then(response => this.setState({ tutorials: response.data, isLoading: false }))
            // Show error message if it is failed
            .catch(error => this.setState({ errorMessage: error }));
    }
    // Generate random colour for various purpose
    getRandomBadgeColor() {
        //Get random number between from 1 to 6
        const color = Math.floor(Math.random() * (6)) + 1;
        switch (color) {
            case 1: return "primary"    // Blue
            case 2: return "secondary"  // Grey
            case 3: return "success"    // Green
            case 4: return "danger"     // Red
            case 5: return "warning"    // Yellow
            case 6: return "info"       // Tosca
            default: return "dark"      // Black
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
                                        <Card className="border shadow-sm p-3 mb-5 portfolio-item" style={{ borderRadius: "15px" }}>
                                            <div className="portfolio-item">
                                                <img className="img-fluid rounded" src={require('../../../assets/tutorial_images/' + tutorial.image_tutorial)} alt="" />
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
