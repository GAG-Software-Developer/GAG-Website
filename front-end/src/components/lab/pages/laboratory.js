import React, { Component, Fragment } from 'react';
import Navigation from '../../essential/navigation';
import List_Tutorial from '../components/list-tutorial';
import { Container, Jumbotron, Button } from 'react-bootstrap';

export default class laboratory extends Component {
    render() {
        return (
            <Fragment>
                <Navigation selectedPage="laboratory" />
                <List_Tutorial />
            </Fragment>
        )
    }
}
