import React, { Component, Fragment } from 'react'
import Navigation from '../../essential/navigation'

export default class laboratory extends Component {
    render() {
        return (
            <Fragment>
                <Navigation selectedPage="laboratory" />
                <h1>This is Tutorial</h1>
            </Fragment>
        )
    }
}
