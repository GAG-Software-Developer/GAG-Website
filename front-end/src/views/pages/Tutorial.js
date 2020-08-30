import React, { Component, Fragment } from 'react'
import Navigasi from '../components/essential/Navigasi'

export default class Tutorial extends Component {
    render() {
        return (
            <Fragment>
                <Navigasi selectedPage="tutorial"/>
                <h1>This is Tutorial</h1>
            </Fragment>
        )
    }
}
