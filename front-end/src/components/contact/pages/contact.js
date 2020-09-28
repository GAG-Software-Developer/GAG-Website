import React, { Component, Fragment } from 'react';
import Navigation from '../../essential/navigation';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Spinner, Badge } from 'react-bootstrap';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import config from '../../../config.json';
const id_user = config['id_user'];
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
        axios.get('http://localhost:8000/user/user-read?id=' + id_user)
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
                    <div className="row no-gutters">

                        <div className="col-lg-4">
                            <a className="btn" href={linkedin} target="_blank">
                                <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item" style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon icon={['fas', 'envelope']} /></h1></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Email</Card.Subtitle>
                                        <Card.Text> {email} </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <a className="btn" href={"https://wa.me/" + whatsapp_number} target="_blank">
                                <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item" style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon icon={['fab', 'whatsapp']} /></h1></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">WhatsApp</Card.Subtitle>
                                        <Card.Text> {whatsapp_number} </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <a className="btn" href={phone_number} target="_blank">
                                <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item" style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon icon={['fas', 'phone']} /></h1></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Phone</Card.Subtitle>
                                        <Card.Text> {phone_number} </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <a className="btn" href={github} target="_blank">
                                <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item" style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon icon={['fab', 'github']} /></h1></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">GitHub</Card.Subtitle>
                                        <Card.Text> {github} </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <a className="btn" href={linkedin} target="_blank">
                                <Card className="border-0 shadow p-3 mb-5 bg-white rounded portfolio-item" style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon icon={['fab', 'linkedin']} /></h1></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">GitHub</Card.Subtitle>
                                        <Card.Text> {linkedin} </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
