import React, { Component, Fragment } from 'react'
import Description_Project from '../components/description-project';
import Navigation from '../../essential/navigation';

export default class detail_project extends Component {
    componentDidMount() {
        const { params } = this.props;
    }

    render() {
        const { match: { params } } = this.props;
        return (
            <Fragment>
                <Navigation selectedPage="explore" />
                <Description_Project id_project={params.id_project} />
            </Fragment>
        )
    }
}


