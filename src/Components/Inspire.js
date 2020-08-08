import React, { Component } from 'react';
import './CoverPage.css';
import meditate from './assets/meditate.svg'
class Inspire extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="mt-3"> Get inspired! </h1>
                <img src={meditate} className="mt-3" width="200px" alt="" />
            </div>
        )
    }
}


export default Inspire;