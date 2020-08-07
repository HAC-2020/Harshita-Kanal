import React, { Component } from 'react';
import Tasks from './assets/Tasks.svg'
class Playgame extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="top mt-5">Play a game</h1>
                <img src={Tasks} className="mt-5" width="300px" alt="" /> 

               
            </div>
        )
    }
}


export default Playgame;