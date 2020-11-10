import React, { Component, Fragment } from 'react'
import { Container, Spinner, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../../../styles/navigasi.css';
import { connect } from 'react-redux';
import { readDescriptionProject } from './../../../redux/action/readDescriptionProject';
import getSkillIcon from './../../essential/icon';

library.add(fab, faCoffee);

class description_project extends Component {
    componentDidMount() {
        //Call action to get the project description from server
        this.props.readDescriptionProject(this.props.id_project);
    }

    render() {

        const description_project = this.props.descriptionProject.description_project;
        const detail_project = this.props.descriptionProject.detail_project;
        const isLoading = this.props.descriptionProject.isLoading;

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
        const dataIsSet = description_project.length === 0 ? false : true;

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
                                                attribute.map((skill, key) =>

                                                    <li style={{ listStyleType: "none" }} className="float-left mr-4 mb-2"><FontAwesomeIcon icon={['fab', getSkillIcon(skill)]} /> {skill}</li>

                                                )
                                            }
                                        </table>
                                        {(link != null) ? (<Fragment> <h4 className="text-left font-weight-bold mt-2" style={{ color: "lightcoral" }}>Source</h4><a href={link} target="_blank"><p className="float-left btn btn-info san-serif-font " >See Document</p></a></Fragment>) : (<Fragment></Fragment>)}



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

//Prepare and set the redux store
const mapStateToProps = (state) => ({ descriptionProject: state.descriptionProject })

export default connect(mapStateToProps, { readDescriptionProject })(description_project)

