import React, { Component, Fragment } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import getSkillIcon from './../../essential/icon';
import { readAbout } from './../../../redux/action/readAbout';
import { connect } from 'react-redux';

library.add(fab, faCoffee);

class About extends Component {
    componentDidMount() {
        this.props.readAbout();
    }
    render() {
        const { fullname, photo, educations, skills, description, work_experiences, isLoading } = this.props.about;
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
                        <Fragment>
                            <Row className="align-items-center mb-5">
                                <div className="col-lg-6 mb-3">
                                    <img className="img-fluid border shadow-sm" style={{ borderRadius: "15px" }} src={require('../../../assets/user_images/' + photo)} alt="photo of Giovanni"></img>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>{fullname}</h4>
                                    <p className="text-left san-serif-font">{description}</p>
                                </div>
                            </Row>
                            <Row>
                                <div className="col-lg-6  mb-5">
                                    <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>Education</h4>
                                    <table className="w-100">
                                        {
                                            educations.map((education, key) =>

                                                <tr className="text-left align-top" key={key}>
                                                    <td className="w-25"><b style={{ color: "lightcoral" }}>{education.enrollment_year}</b></td>
                                                    <td><b>{education.university_name}</b><br></br> <i>{education.course}</i></td>
                                                </tr>
                                            )
                                        }
                                    </table>
                                </div>
                                <div className="col-lg-6 mb-5">
                                    <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>Skills</h4>
                                    {
                                        skills.map((skill, key) =>
                                            <li style={{ listStyleType: "none" }} className="float-left mr-4 mb-2"><FontAwesomeIcon icon={['fab', getSkillIcon(skill)]} /> {skill}</li>
                                        )
                                    }
                                </div>
                            </Row>
                            <Row>
                                <div className="col-lg-6  mb-5">
                                    <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>Work Experiences</h4>
                                    <table className="w-100">
                                        {
                                            work_experiences.map((work, key) =>

                                                <tr className="text-left align-top" key={key}>
                                                    <td style={{ width: 200 }}><b style={{ color: "lightcoral" }}>{work.year_of_work}</b></td>
                                                    <td ><b>{work.company_name}</b> <br></br> <i>{work.role}</i></td>
                                                </tr>
                                            )
                                        }
                                    </table>
                                </div>
                                <div className="col-lg-6  mb-5">
                                    <h4 className="text-left font-weight-bold" style={{ color: "lightseagreen" }}>Version</h4>

                                    <table className="text-left">
                                        <tr>
                                            <td className="text-right" style={{ color: "lightcoral" }}><strong>Name</strong></td>
                                            <td>: Giovanni Works</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right" style={{ color: "lightcoral" }}><strong>Codename</strong></td>
                                            <td>: Amsterdam</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right" style={{ color: "lightcoral" }}><strong>Version</strong></td>
                                            <td>: 1.1.0</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right align-top" style={{ color: "lightcoral" }}><strong>Latest Update</strong></td>
                                            <td>
                                                : - Refinement on some elements <br></br>
                                                &nbsp; - Improvement on loading speed<br></br>
                                                &nbsp; - Adding Redux as state management
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </Row>

                        </Fragment>

                    </Container>
                </Fragment>
            )
        }
    }
}

//Prepare and set the redux store
const mapStateToProps = (state) => ({ about: state.about })

export default connect(mapStateToProps, { readAbout })(About)
