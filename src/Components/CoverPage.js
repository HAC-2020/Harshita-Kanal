import React, { Component } from 'react';
import './CoverPage.css';
import meditate from './assets/joyride.svg'
class CoverPage extends Component {
    render() {
        return (
            <div className = "container">
                <h1 className= "top mt-5">What do you want to do today?</h1>
                <img src = {meditate} className = "mt-5" width = "300px" alt = "" /> 
                <br/>
                 <button className = "pink ripple mt-5">Get Started</button>
            </div>
        )
    }
}


export default CoverPage;