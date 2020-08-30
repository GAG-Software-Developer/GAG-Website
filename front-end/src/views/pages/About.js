import React, { Component, Fragment } from 'react';
import Navigasi from '../components/essential/Navigasi';

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <Navigasi selectedPage="about"/>
            </Fragment>
        )
    }
}
