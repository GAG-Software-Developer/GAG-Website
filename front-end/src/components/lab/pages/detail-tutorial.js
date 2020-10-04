import React, { Component, Fragment } from 'react'
import Description_Tutorial from '../components/description-tutorial';
import Navigation from '../../essential/navigation';

export default class detail_tutorial extends Component {
    componentDidMount() {
        const { params } = this.props;
    }

    render() {
        const { match: { params } } = this.props;
        return (
            <Fragment>
                <Navigation selectedPage="laboratory" />
                <Description_Tutorial id_tutorial={params.id_tutorial} />
            </Fragment>
        )
    }
}

