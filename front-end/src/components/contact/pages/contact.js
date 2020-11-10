import React, { Component, Fragment } from 'react';
import Navigation from '../../essential/navigation';
import { Container, Card } from 'react-bootstrap';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';
import { readContact } from './../../../redux/action/readContact';
library.add(fab, fas);

class contact extends Component {

    componentDidMount() {
        this.props.readContact();
    }

    render() {
        const { email, whatsapp_number, github, linkedin } = this.props.contact;
        return (
            <Fragment>
                <Navigation selectedPage="contact" />
                <Container>
                    <div className="row no-gutter">

                        <div className="col-lg-4">
                            <Card className="border shadow-sm p-3 mb-5 bg-white portfolio-item w-100" style={{ borderRadius: "15px" }}>
                                <Card.Body>
                                    <Card.Title><h1><FontAwesomeIcon style={{ color: "#e94560" }} icon={['fas', 'envelope']} /></h1></Card.Title>
                                    <Card.Subtitle className="text-muted">Email</Card.Subtitle>
                                    <Card.Text className="san-serif-font"><small>{email}</small></Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4">
                            <Card className="border shadow-sm p-3 mb-5 bg-white portfolio-item w-100" style={{ borderRadius: "15px" }}>
                                <a href={"https://wa.me/" + whatsapp_number} target="_blank" style={{ textDecoration: "none", color: "black" }}>

                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon style={{ color: "#25D366" }} icon={['fab', 'whatsapp']} /></h1></Card.Title>
                                        <Card.Subtitle className="text-muted">WhatsApp</Card.Subtitle>
                                        <Card.Text className="san-serif-font"><small><b>(+61)</b> 426807941</small></Card.Text>
                                    </Card.Body>
                                </a>
                            </Card>

                        </div>
                        <div className="col-lg-4">

                            <Card className="border shadow-sm p-3 mb-5 bg-white portfolio-item w-100" style={{ borderRadius: "15px" }}>

                                <Card.Body>
                                    <Card.Title><h1><FontAwesomeIcon style={{ color: "#03c4a1" }} icon={['fas', 'phone']} /></h1></Card.Title>
                                    <Card.Subtitle className="text-muted">Phone</Card.Subtitle>
                                    <Card.Text className="san-serif-font"><small><b>(+62)</b> 81231466200</small></Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-lg-4">

                            <Card className="border shadow-sm p-3 mb-5 bg-white portfolio-item w-100" style={{ borderRadius: "15px" }}>
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

                            <Card className="border shadow-sm p-3 mb-5 bg-white portfolio-item w-100" style={{ borderRadius: "15px" }}>
                                <a href={linkedin} target="_blank" style={{ textDecoration: "none", color: "black" }}>
                                    <Card.Body>
                                        <Card.Title><h1><FontAwesomeIcon style={{ color: "#0e76a8" }} icon={['fab', 'linkedin']} /></h1></Card.Title>
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


//Prepare and set the redux store
const mapStateToProps = (state) => ({ contact: state.contact })

export default connect(mapStateToProps, { readContact })(contact)
