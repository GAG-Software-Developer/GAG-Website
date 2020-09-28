import React, { Component, Fragment } from 'react'
import { Container, Spinner, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faCoffee, faComments, faCompass, faDatabase, faEnvelope, faFlask, faLock, faSmile, faTools, faUsers, faVial } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../../../styles/navigasi.css';
library.add(fab, faCoffee);
export default class description_project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description_project: [],
            detail_project: [],
            isLoading: true
        }
    }

    //(<a href={link} target="_blank"><p className="text-left" >Download {project_title} Document</p></a>)
    componentDidMount() {
        //Fetch data from backend server
        axios.get('http://localhost:8000/posting-detail/posting-detail-read?id_posting=' + this.props.id_project)
            .then(response => this.setState({ description_project: response.data['posting_description'], detail_project: response.data['posting_detail'], isLoading: false }))
            .catch(error => console.log(error));
    }
    render() {
        const { description_project, detail_project, isLoading } = this.state;
        //Declare values
        var overview = "";
        var description = [];
        var project_title = detail_project.title_posting;
        var attribute = detail_project.attribute;
        var link = detail_project.link_posting;

        //Assign values above
        for (const index in description_project) {
            overview = description_project[index].overview;
            description = description_project[index].posting_detail;
        }

        //Empty response indicator
        const dataIsSet = description_project.length == 0 ? false : true;

        //If still loading from back-end, shows loading screen
        if (isLoading) {
            return (
                <Fragment>
                    <Spinner className="mr-3" animation="grow" variant="primary" />
                    <Spinner className="mr-3" animation="grow" variant="danger" />
                    <Spinner className="mr-3" animation="grow" variant="warning" />
                </Fragment>
            )
        } else {
            //If the data is exist
            if (dataIsSet) {
                return (
                    <Fragment>
                        <Container>
                            <header>
                                <Row>
                                    <div className="col-lg-8">
                                        <h1 className="text-left font-weight-bold" style={{ color: "lightcoral" }}>{project_title}</h1>
                                        <p className="text-left">{overview}</p>

                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-3">
                                        <h4 className="text-left font-weight-bold" style={{ color: "lightcoral" }}>Tools</h4>
                                        <table>


                                            {
                                                attribute.map((element, key) =>
                                                    (element == "React") ?
                                                        <tr key={key}>
                                                            <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'react']} /></td>
                                                            <td style={{ textAlign: "left" }}>{element}</td>
                                                        </tr> :
                                                        (element == "Angular") ?
                                                            <tr key={key}>
                                                                <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'angular']} /></td>
                                                                <td style={{ textAlign: "left" }}>{element}</td>
                                                            </tr> :
                                                            (element == "php") ?
                                                                <tr key={key}>
                                                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'php']} /></td>
                                                                    <td style={{ textAlign: "left" }}>{element}</td>
                                                                </tr> :
                                                                (element == "ExpressJS") ?
                                                                    <tr key={key}>
                                                                        <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'js']} /></td>
                                                                        <td style={{ textAlign: "left" }}>{element}</td>
                                                                    </tr> :
                                                                    (element == "NodeJS") ?
                                                                        <tr key={key}>
                                                                            <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'node']} /></td>
                                                                            <td style={{ textAlign: "left" }}>{element}</td>
                                                                        </tr> :
                                                                        (element == "AWS") ?
                                                                            <tr key={key}>
                                                                                <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'aws']} /></td>
                                                                                <td style={{ textAlign: "left" }}>{element}</td>
                                                                            </tr> :
                                                                            (element == "Firebase") ?
                                                                                <tr key={key}>
                                                                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'google']} /></td>
                                                                                    <td style={{ textAlign: "left" }}>{element}</td>
                                                                                </tr> :
                                                                                (element == "CodeIgniter") ?
                                                                                    <tr key={key}>
                                                                                        <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'google']} /></td>
                                                                                        <td style={{ textAlign: "left" }}>{element}</td>
                                                                                    </tr> :
                                                                                    (element == "Adobe xD") ?
                                                                                        <tr key={key}>
                                                                                            <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'adobe']} /></td>
                                                                                            <td style={{ textAlign: "left" }}>{element}</td>
                                                                                        </tr> :
                                                                                        (element == "Laravel") ?
                                                                                            <tr key={key}>
                                                                                                <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'laravel']} /></td>
                                                                                                <td style={{ textAlign: "left" }}>{element}</td>
                                                                                            </tr> :
                                                                                            (element == "MongoDB" || element == "MySQL") ?
                                                                                                <tr key={key}>
                                                                                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={faDatabase} /></td>
                                                                                                    <td style={{ textAlign: "left" }}>{element}</td>
                                                                                                </tr> :
                                                                                                (element == "Java") ?
                                                                                                    <tr key={key}>
                                                                                                        <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', 'java']} /></td>
                                                                                                        <td style={{ textAlign: "left" }}>{element}</td>
                                                                                                    </tr> :
                                                                                                    (element == "AES256" || element == "RSA2048") ?
                                                                                                        <tr key={key}>
                                                                                                            <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={faLock} /></td>
                                                                                                            <td style={{ textAlign: "left" }}>{element}</td>
                                                                                                        </tr> :
                                                                                                        (element == "Testing & Evaluation") ?
                                                                                                            <tr key={key}>
                                                                                                                <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={faVial} /></td>
                                                                                                                <td style={{ textAlign: "left" }}>{element}</td>
                                                                                                            </tr> :
                                                                                                            (element == "User Research") ?
                                                                                                                <tr key={key}>
                                                                                                                    <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={faUsers} /></td>
                                                                                                                    <td style={{ textAlign: "left" }}>{element}</td>
                                                                                                                </tr> :
                                                                                                                (element == "Interview") ?
                                                                                                                    <tr key={key}>
                                                                                                                        <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={faComments} /></td>
                                                                                                                        <td style={{ textAlign: "left" }}>{element}</td>
                                                                                                                    </tr> :
                                                                                                                    <tr key={key}>
                                                                                                                        <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={faTools} /></td>
                                                                                                                        <td style={{ textAlign: "left" }}>{element}</td>
                                                                                                                    </tr>
                                                )
                                            }
                                        </table>
                                        <h4 className="text-left font-weight-bold mt-2" style={{ color: "lightcoral" }}>Source</h4>
                                        {(link != null) ? (<a href={link} target="_blank"><p className="float-left btn btn-info" >See Document</p></a>) : (<p className="text-left">No additional source is available</p>)}

                                    </div>
                                </Row>
                            </header>
                            {
                                description.map((element, key) =>
                                    //If even, shows description on the left
                                    (key % 2 == 0) ?
                                        (
                                            <Row className="align-items-center mb-3" key={element._id}>
                                                <div className="col-lg-7">
                                                    <img className="img-fluid  shadow-lg" src={require('../../../assets/projek_images/' + element.image_detail)} alt="image1"></img>
                                                </div>
                                                <div className="col-lg-5">
                                                    <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>{element.title_detail}</h4>
                                                    <p className="text-left">{element.text_detail}</p>
                                                </div>
                                            </Row>
                                        ) : (
                                            //If odd, shows the data in the right
                                            <Row className="align-items-center mb-3" key={element._id}>
                                                <div className="col-lg-5">
                                                    <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>{element.title_detail}</h4>
                                                    <p className="text-left">{element.text_detail}</p>
                                                </div>
                                                <div className="col-lg-7">
                                                    <img className="img-fluid shadow-lg" src={require('../../../assets/projek_images/' + element.image_detail)} alt="image1"></img>
                                                </div>
                                            </Row>
                                        )
                                )
                            }
                        </Container>
                    </Fragment>
                )
            } else {
                //If the data is not exist
                return (
                    <h1>Full Description is not available yet</h1>
                )
            }
        }

    }
}


