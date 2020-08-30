import React, { Component, Fragment } from 'react'
import { Row, Container } from 'react-bootstrap'

export default class Isi_Projek extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                <Row className="align-items-center">
                    <div className="col-lg-7">
                        <img className="img-fluid mb-3 shadow-lg" src={require('../../../assets/projek_images/12.png')} alt="image1"></img>
                    </div>
                    <div className="col-lg-5">
                        <h4 className="text-left font-weight-bold">Future Prove</h4>
                        <p className="text-left">This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    </div>
                </Row>
                <Row className="align-items-center">
                    <div className="col-lg-5">
                        <h4 className="text-left font-weight-bold">Excellent Coding Design</h4>
                        <p className="text-left">This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    </div>
                    <div className="col-lg-7">
                        <img className="img-fluid shadow-lg" src={require('../../../assets/projek_images/13.png')} alt="image1"></img>
                    </div>
                </Row>
                </Container>
            </Fragment>
        )
    }
}


