import React, { Component, Fragment } from 'react'
import { Container, Spinner, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faCoffee, faComments, faCompass, faDatabase, faEnvelope, faFlask, faLock, faSmile, faTools, faUsers, faVial } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../../../styles/navigasi.css';
import config from '../../../config.json';
library.add(fab, faCoffee);
const url_server = config['url_server'];

export default class description_project extends Component {
    constructor() {
        super();
        this.state = {
            description_project: [],
            detail_project: [],
            isLoading: true
        }
    }

    //(<a href={link} target="_blank"><p className="text-left" >Download {project_title} Document</p></a>)
    componentDidMount() {
        //Fetch data from backend server
        axios.get(url_server + 'posting-detail/posting-detail-read?id_posting=' + this.props.id_project)
            .then(response => this.setState({ description_project: response.data['posting_description'], detail_project: response.data['posting_detail'], isLoading: false }))
            .catch(error => console.log(error));
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
                return "node"
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

            case "amazon web services":
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
            case "firebase":
                return "google"
                break;
            case "java":
                return "java"
                break;
            case "aes256":
                return "expeditedssl"
                break;
            case "rsa2048":
                return "expeditedssl"
                break;
            case "adobe xd":
                return "adobe"
                break;
            default:
                return "elementor"
                break;
        }
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
                            <section>
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

                                                    <tr key={key}>
                                                        <td style={{ textAlign: "center" }}><FontAwesomeIcon icon={['fab', this.getLogoSkill(element)]} /></td>
                                                        <td style={{ textAlign: "left" }}>{element}</td>
                                                    </tr>

                                                )
                                            }
                                        </table>
                                        {(link != null) ? (<Fragment> <h4 className="text-left font-weight-bold mt-2" style={{ color: "lightcoral" }}>Source</h4><a href={link} target="_blank"><p className="float-left btn btn-info" >See Document</p></a></Fragment>) : (<Fragment></Fragment>)}



                                    </div>
                                </Row>
                            </section>
                            {
                                description.map((element, key) =>
                                    //If even, shows description on the left
                                    (key % 2 == 0) ?
                                        (
                                            <Row className="align-items-center mt-5 text-secondary" key={element._id}>
                                                <div className="col-lg-7 order-lg-2">
                                                    <img className="img-fluid mb-3 shadow-lg" src={require('../../../assets/projek_images/' + element.image_detail)} alt="image1"></img>
                                                </div>
                                                <div className="col-lg-5">
                                                    <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>{element.title_detail}</h4>
                                                    <p className="text-left">{element.text_detail}</p>
                                                </div>
                                            </Row>
                                        ) : (
                                            //If odd, shows the data in the right
                                            <Row className="align-items-center mt-5 text-secondary" key={element._id}>
                                                <div className="col-lg-7 ">
                                                    <img className="img-fluid mb-3 shadow-lg" src={require('../../../assets/projek_images/' + element.image_detail)} alt="image1"></img>
                                                </div>
                                                <div className="col-lg-5">
                                                    <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>{element.title_detail}</h4>
                                                    <p className="text-left">{element.text_detail}</p>
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


