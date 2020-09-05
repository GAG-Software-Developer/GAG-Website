import React, { Component, Fragment } from 'react'
import Navigation from '../../essential/navigation'

export default class contact extends Component {
    render() {
        return (
            <Fragment>
                <Navigation selectedPage="contact"/>
                <h1>This is Contact</h1>
            </Fragment>
        )
    }
}
