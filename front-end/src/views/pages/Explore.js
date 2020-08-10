import React, { Component } from 'react';
import '../styles/Navigasi.css';
import '../styles/stylish-portfolio.css'
import Projek from '../components/projek/Projek';
import Heading from '../components/essential/Heading';
import Navigasi from '../components/essential/Navigasi';


export default class Explore extends Component {
    render() {
        return (
            <div>
                <Heading />
                <Projek />
            </div>
        )
    }
}
