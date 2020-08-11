import React, { Component } from 'react'
import { Row, Container } from 'react-bootstrap'

export default class DetailProjek extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row className="align-items-center my-5">
                    <div className="col-lg-7">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src={require('../../../assets/projek_images/6.jpg')}></img>
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Business Name or Tagline</h1>
                        <p >This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    </div>
                </Row>
                <Row className="align-items-center my-5">
                <div className="col-lg-5">
                        <h1 className="font-weight-light">Business Name or Tagline</h1>
                        <p >This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    </div>
                    <div className="col-lg-7">
                        <img className="h-50 rounded mb-4 mb-lg-0" src={require('../../../assets/projek_images/1.jpg')}></img>
                    </div>
                </Row>

              
            
    
  
                </Container>
            </div>
        )
    }
}
