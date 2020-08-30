import React, { Component, Fragment } from 'react'
import Navigasi from '../components/essential/Navigasi'

export default class Technology extends Component {
    render() {
        return (
            <Fragment>
                <Navigasi selectedPage="technology"/>
                <h1>This is Technology</h1>
            </Fragment>
        )
    }
}
