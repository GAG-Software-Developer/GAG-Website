import React, { Component, Fragment } from 'react'
import { Container, Row, Card, Spinner, Badge } from 'react-bootstrap';
import axios from 'axios';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/user/user-read')
            .then(response => this.setState({ users: response.data, isLoading: false }));
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
        const { users, isLoading } = this.state;
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
                            {users.map((user) =>
                                <div className="col-md-6 p-3">
                                    <Card className="p-3 border-0 shadow bg-white rounded">
                                        <Row>
                                            <div className="col-lg-5">
                                                <img className="img-fluid w-100" src={require('../../../assets/user_images/' + user.photo_user)} alt="image1"></img>
                                            </div>
                                            <div className="col-lg-7">
                                                <h4 className="text-left font-weight-bold">{user.fullname_user}</h4>
                                                <p className="text-left text-muted"><small><i>Software Developer</i></small></p>
                                                
                                                {user.skill_set_user.map((value, index) => {
                                                    return <Fragment><Badge key={index} pill variant={this.getRandomBadgeColor()}>{value}</Badge>{' '}</Fragment>
                                                })}
                                            </div>
                                        </Row>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </Container>
                </Fragment>
            )
        }
    }
}
