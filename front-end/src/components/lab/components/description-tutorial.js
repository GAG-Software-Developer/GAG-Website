import React, { Component, Fragment } from 'react'
import { Container, Card, Spinner, Badge, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../styles/stylish-portfolio.css'
import '../../../styles/navigasi.css';
import axios from 'axios';
import config from '../../../config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faCoffee, faComments, faCompass, faDatabase, faEnvelope, faFlask, faLock, faSmile, faTools, faUsers, faVial } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab, faCoffee);
const url_server = config['url_server'];

export default class description_tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: [],
            detail: [],
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get(url_server + 'api/tutorial-detail?id=' + this.props.id_tutorial)
            .then(response => this.setState({ description: response.data['tutorial_description'], detail: response.data['tutorial_detail'], isLoading: false }))
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
        const { description, detail, isLoading } = this.state;

        if (description === null) {
            //If the data is not exist
            return (
                <h1>Full content is not available yet</h1>
            )
        } else {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(detail.created_at);
            //Tutorial info
            const title = detail.title_tutorial;
            const attributes = detail.attribute_tutorial;
            const writer = detail.writer_name_tutorial;
            const image = detail.image_tutorial;
            const created_at = date.toLocaleDateString("en-GB", options);

            //Tutorial Content
            const overview = description.overview;
            const tutorial_detail = description.tutorial_detail;

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

                return (

                    <Container>
                        <Row>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8 px-5" >
                                <section className="text-left">
                                    <h1 className=" font-weight-bold" style={{ color: "lightseagreen" }}>{title}</h1>
                                    <small>Written by  <strong style={{ color: "lightcoral" }}>{writer}</strong>  on {created_at}</small> <br></br>
                                    <small>Topics:&nbsp;
                                        {
                                            attributes.map((element, key) =>
                                                <Fragment>
                                                    <FontAwesomeIcon icon={['fab', this.getLogoSkill(element)]} />  {element} &nbsp;&nbsp;
                                                    </Fragment>
                                            )
                                        }
                                    </small>
                                    <img className="img-fluid w-100 shadow-lg p-3 bg-white rounded mt-3" src={require('../../../assets/tutorial_images/' + image)} alt="image1"></img>
                                    <p className="mt-4">{overview}</p>
                                </section>
                                <section>
                                    {
                                        tutorial_detail.map((element, key) =>
                                            <div className="text-left mt-5" key={key} >
                                                <h3 className="font-weight-bold">{element.title_detail}</h3>
                                                <div>
                                                    {

                                                        element.details.map((content) =>
                                                            (content.type_detail.toLowerCase() === "code") ? <p className="shadow-sm bg-light rounded p-3"><small>{content.text_detail}</small></p> :
                                                                (content.type_detail.toLowerCase() === "bold-text") ? <h5><b>{content.text_detail}</b></h5> :
                                                                    (content.type_detail.toLowerCase() === "text") ? <p>{content.text_detail}</p> :
                                                                        (content.type_detail.toLowerCase() === "highlight-list") ? <ul className="shadow-sm bg-light rounded pt-3 pb-3">{
                                                                            content.text_detail.split("|").map((list) =>
                                                                                <li>{list}</li>
                                                                            )}</ul> : (content.type_detail.toLowerCase() === "list") ? <ul>{
                                                                                content.text_detail.split("|").map((list) =>
                                                                                    <li>{list}</li>
                                                                                )}</ul> : (content.type_detail.toLowerCase() === "highlight-text") ? <p className="shadow-sm bg-light rounded p-3">{content.text_detail}</p> :
                                                                                    (content.type_detail.toLowerCase() === "quote") ? <p><i>“{content.text_detail}„</i></p> :
                                                                                        (content.type_detail.toLowerCase() === "image") ? <img className="img-fluid w-100 shadow-lg p-3 bg-white rounded mt-3 mb-4" src={require('../../../assets/tutorial_images/' + content.text_detail)} alt="image of tutorial content"></img> : <p></p>
                                                        )
                                                    }
                                                </div>
                                            </div>

                                        )
                                    }
                                </section>
                            </div>
                            <div className="col-lg-2"></div>
                        </Row>

                    </Container >
                )

            }
        }

    }
}
