import React, { Component, Fragment } from 'react'
import { Container, Row, Card, Col, Spinner, Badge } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faCoffee, faComments, faCompass, faDatabase, faEnvelope, faFlask, faLock, faSmile, faTools, faUsers, faVial } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab, faCoffee);

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

            fullname: "",
            description: "",
            photo: "",
            educations: [],
            skills: [],
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/user/user-read?id=5f4c9eb7c715f9b7f943fe92')
            .then(response => this.setState({
                fullname: response.data['fullname_user'],
                description: response.data['description_user'],
                isLoading: false,
                photo: response.data['photo_user'],
                educations: response.data['academic_user'],
                skills: response.data['skill_set_user']
            }));
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
    getLogoSkill(name) {
        switch (name.toLowerCase()) {
            case "react":
                return "react"
                break;
            case "angular":
                return "angular"
                break;
            case "nodejs":
                return "node-js"
                break;
            case "expressjs":
                return "js"
                break;
            case "javascript":
                return "js"
                break;
            case "codeigniter":
                return "php"
                break;
            case "laravel":
                return "laravel"
                break;
            case "php":
                return "php"
                break;

            case "amazon cognito":
                return "aws"
                break;
            case "aws":
                return "aws"
                break;
            case "google firebase":
                return "google"
                break;
            case "mysql":
                return "buffer"
                break;
            case "mongodb":
                return "buffer"
                break;
            case "github":
                return "github"
                break;
            case "user testing":
                return "wpforms"
                break;
            case "swift":
                return "swift"
                break;
            case "user testing":
                return "angular"
                break;
            case "github":
                return "github"
                break;
            case "user research":
                return "elementor"
                break;
            case "design process":
                return "product-hunt"
                break;
            case "physical prototyping":
                return "simplybuilt"
                break;


        }
    }
    render() {
        const { fullname, photo, educations, skills, description, isLoading } = this.state;

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
                <Fragment>
                    <Container>
                        <div className="row no-gutters">

                            <Fragment>
                                <Row className="align-items-center mb-5">
                                    <div className="col-lg-6">

                                        <img className="img-fluid  shadow-lg" src={require('../../../assets/user_images/' + photo)} alt="photo of Giovanni"></img>

                                    </div>
                                    <div className="col-lg-6">
                                        <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>{fullname}</h4>
                                        <p className="text-left">{description}</p>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-lg-6">
                                        <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>Education</h4>
                                        <table className="w-100">
                                            {
                                                educations.map((education, key) =>

                                                    <tr className="text-left align-top" key={key}>
                                                        <td className="w-25"><b style={{ color: "lightcoral" }}>{education.enrollment_year}</b></td>
                                                        <td><b>{education.university_name}</b> - <i>{education.course}</i></td>
                                                    </tr>
                                                )
                                            }
                                        </table>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>Skills</h4>

                                        {
                                            skills.map((skill, key) =>
                                                <li style={{ listStyleType: "none" }} className="float-left mr-4 mb-2"><FontAwesomeIcon icon={['fab', this.getLogoSkill(skill)]} /> {skill}</li>
                                            )
                                        }

                                    </div>
                                </Row>

                            </Fragment>

                        </div>
                    </Container>
                </Fragment>
            )
        }
    }
}
