import React, { Component } from 'react'
import { Container, Card, Spinner, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../styles/stylish-portfolio.css'
import '../../../styles/navigasi.css';
import axios from 'axios';
import config from '../../../config.json';
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
    render() {
        const { description, detail } = this.state;
        const title = detail.title_tutorial;

        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}
