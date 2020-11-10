import React, { Component, Fragment } from 'react'
import { Container, Card, Spinner, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../styles/stylish-portfolio.css'
import '../../../styles/navigasi.css';
import { connect } from 'react-redux';
import { readProjects } from './../../../redux/action/readProjects';

class list_project extends Component {

    componentDidMount() {
        //Call action to get the projects list from server
        this.props.readProjects();
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
    render() {
        const projects = this.props.project.projects;
        const isLoading = this.props.project.isLoading;

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
                <section className="content-section" id="portfolio">
                    <Container>
                        <h1>{this.props.value}</h1>
                        <div className="row no-gutters">
                            {projects.map((project) =>
                                <div className="col-lg-4" key={project._id}>
                                    <Link className="btn" to={'/Detail-Projek/' + project._id}>
                                        <Card className="border-1 shadow-sm p-3 mb-5 portfolio-item" style={{ borderRadius: "15px" }}>
                                            <div className="portfolio-item ">
                                                <img className="img-fluid rounded" src={require('../../../assets/projek_images/' + project.image_posting)} alt="" />
                                            </div>
                                            <Card.Body >
                                                <Card.Title className="mb-0">{project.title_posting}</Card.Title>
                                                <footer className="blockquote-footer mt-1 mb-1">
                                                    <small className="text-muted">
                                                        <cite title="Source Title">{project.quote_posting}</cite>
                                                    </small>
                                                </footer>
                                                <footer className="footer">
                                                    <Badge className="border shadow-sm" pill variant={(project.type_posting === "UX Research") ? "info" : (project.type_posting === "Mobile Application") ? "success" : (project.type_posting === "Fullstack") ? "danger" : "warning"}>{project.type_posting}</Badge>
                                                </footer>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Container>
                </section>
            )
        }
    }
}

//Prepare and set the redux store
const mapStateToProps = (state) => ({ project: state.projects })

export default connect(mapStateToProps, { readProjects })(list_project)




