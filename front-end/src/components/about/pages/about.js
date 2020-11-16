import React, { Component, Fragment } from 'react';
import Navigasi from '../../essential/navigation';
import Detail_About from '../components/detail-about'

export default class about extends Component {
    render() {
        return (
            <Fragment>
                <Navigasi selectedPage="about" />
                <Detail_About />
            </Fragment>
        )
    }
}























