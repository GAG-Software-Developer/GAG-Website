import React, { Component } from 'react'
import { Container, Card, Spinner, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../styles/stylish-portfolio.css'
import '../../../styles/navigasi.css';
import axios from 'axios';

export default class description_tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            overview: "",
            detail: [],
            isLoading: true
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/tutorial?id=' + this.props.id_tutorial)
            .then(response => this.setState({
                title: response.data['title_tutorial'],
                overview: response.data['overview_tutorial'],
                detail: response.data['']
                                        isLoading: false
            }))
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
