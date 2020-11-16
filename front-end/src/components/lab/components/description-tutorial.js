import React, { Component, Fragment } from 'react'
import { Container, Spinner, Row } from 'react-bootstrap';
import '../../../styles/stylish-portfolio.css'
import '../../../styles/navigasi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';
import getSkillIcon from './../../essential/icon';
import { readDescriptionLaboratory } from './../../../redux/action/readDescriptionLaboratory';
library.add(fab, faCoffee);

class description_tutorial extends Component {

    componentDidMount() {
        this.props.readDescriptionLaboratory(this.props.id_tutorial);
    }
    render() {
        const { description, detail, isLoading } = this.props.laboratory;

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
                                                    <FontAwesomeIcon icon={['fab', getSkillIcon(element)]} />  {element} &nbsp;&nbsp;
                                                    </Fragment>
                                            )
                                        }
                                    </small>
                                    <img className="img-fluid w-100 shadow border p-3 bg-white rounded mt-3" src={require('../../../assets/tutorial_images/' + image)} alt="image1"></img>
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
                                                            (content.type_detail.toLowerCase() === "code") ? <p className="shadow-sm bg-dark rounded p-3"><small className="text-light code">{content.text_detail}</small></p> :
                                                                (content.type_detail.toLowerCase() === "bold-text") ? <h5><b>{content.text_detail}</b></h5> :
                                                                    (content.type_detail.toLowerCase() === "text") ? <p>{content.text_detail}</p> :
                                                                        (content.type_detail.toLowerCase() === "highlight-list") ? <ul className="shadow-sm border bg-light rounded pt-3 pb-3">{
                                                                            content.text_detail.split("|").map((list) =>
                                                                                <li>{list}</li>
                                                                            )}</ul> : (content.type_detail.toLowerCase() === "list") ? <ul>{
                                                                                content.text_detail.split("|").map((list) =>
                                                                                    <li>{list}</li>
                                                                                )}</ul> : (content.type_detail.toLowerCase() === "highlight-text") ? <p className="shadow-sm border bg-light rounded p-3">{content.text_detail}</p> :
                                                                                    (content.type_detail.toLowerCase() === "quote") ? <p><i>“{content.text_detail}„</i></p> :
                                                                                        (content.type_detail.toLowerCase() === "image") ? <img className="img-fluid w-100 shadow border p-3 bg-white rounded mt-3 mb-4" src={require('../../../assets/tutorial_images/' + content.text_detail)} alt="image of tutorial content"></img> : <p></p>
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
//Prepare and set the redux store
const mapStateToProps = (state) => ({ laboratory: state.descriptionLaboratory })

export default connect(mapStateToProps, { readDescriptionLaboratory })(description_tutorial)
