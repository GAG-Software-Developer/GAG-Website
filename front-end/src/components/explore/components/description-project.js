import React, { Component, Fragment } from 'react'
import { Container, Spinner, Row } from 'react-bootstrap';
import axios from 'axios'

export default class description_project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description_project: [],
            detail_project: [],
            isLoading: true
        }
    }
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
                                        <h1 className="text-left font-weight-bold">{project_title}</h1>
                                        <p className="text-left">{overview}</p>

                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-3">
                                        <h4 className="text-left font-weight-bold">Tools</h4>
                                        <ul className="text-left">
                                            {
                                                attribute.map((element, key) =>
                                                    <li key={key}>{element}</li>
                                                )
                                            }
                                        </ul>
                                        <h4 className="text-left font-weight-bold">Source</h4>
                                        <p className="text-left">https://github.com/giovannitjahjono</p>
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
                                                    <h4 className="text-left font-weight-bold">{element.title_detail}</h4>
                                                    <p className="text-left">{element.text_detail}</p>
                                                </div>
                                            </Row>
                                        ) : (
                                            //If odd, shows the data in the right
                                            <Row className="align-items-center mb-3" key={element._id}>
                                                <div className="col-lg-5">
                                                    <h4 className="text-left font-weight-bold">{element.title_detail}</h4>
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


