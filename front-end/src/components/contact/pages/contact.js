import React, { Component, Fragment } from 'react';
import Navigation from '../../essential/navigation';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Spinner, Badge, Button } from 'react-bootstrap';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import config from '../../../config.json';
const id_user = config['id_user'];
const url_server = config['url_server'];
library.add(fab, fas);

export default class contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkedin: "",
            email: "",
            phone_number: "",
            whatsapp_number: "",
            github: "",
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get(url_server + 'user/user-read?id=' + id_user)
            .then(response => this.setState({
                linkedin: response.data['linkedin_user'],
                email: response.data['email_user'],
                whatsapp_number: response.data['whatsapp_user'],
                phone_number: response.data['phone_user'],
                github: response.data['github_user'],
                isLoading: false
            }));
    }

    render() {
        const { email, phone_number, whatsapp_number, github, linkedin } = this.state;
        return (
            <Fragment>
                <Navigation selectedPage="contact" />
                <Container>
                    <div className="row no-gutter">

                        <div className="col-lg-4">
                            <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item w-100">
                                <Card.Body>
                                    <Card.Title><h1><FontAwesomeIcon icon={['fas', 'envelope']} /></h1></Card.Title>
                                    <Card.Subtitle className="text-muted">Email</Card.Subtitle>
                                    <Card.Text className="san-serif-font"><small>{email}</small></Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4">
                            <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item w-100">
                                <a href={"https://wa.me/" + whatsapp_number} target="_blank" style={{ textDecoration: "none", color: "black" }}>

                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon icon={['fab', 'whatsapp']} /></h1></Card.Title>
                                        <Card.Subtitle className="text-muted">WhatsApp</Card.Subtitle>
                                        <Card.Text className="san-serif-font"><small><b>(+61)</b> 426807941</small></Card.Text>
                                    </Card.Body>
                                </a>
                            </Card>

                        </div>
                        <div className="col-lg-4">

                            <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item w-100">

                                <Card.Body>
                                    <Card.Title><h1><FontAwesomeIcon icon={['fas', 'phone']} /></h1></Card.Title>
                                    <Card.Subtitle className="text-muted">Phone</Card.Subtitle>
                                    <Card.Text className="san-serif-font"><small><b>(+62)</b> 81231466200</small></Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-lg-4">

                            <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item w-100">
                                <a href={github} target="_blank" style={{ textDecoration: "none", color: "black" }}>
                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon icon={['fab', 'github']} /></h1></Card.Title>
                                        <Card.Subtitle className="text-muted">GitHub</Card.Subtitle>
                                        <Card.Text className="san-serif-font"><small>giovannitjahjono</small></Card.Text>
                                    </Card.Body>
                                </a>
                            </Card>

                        </div>
                        <div className="col-lg-4">

                            <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item w-100">
                                <a href={linkedin} target="_blank" style={{ textDecoration: "none", color: "black" }}>
                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon icon={['fab', 'linkedin']} /></h1></Card.Title>
                                        <Card.Subtitle className="text-muted">LinkedIn</Card.Subtitle>
                                        <Card.Text className="san-serif-font" ><small>giovannitjahjono</small></Card.Text>
                                    </Card.Body>
                                </a>
                            </Card>

                        </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
