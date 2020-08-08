import React, { Component } from 'react';
import Tasks from './assets/Tasks.svg'
class Playgame extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="top mt-5">Play a game</h1>
                <img src={Tasks} className="mt-5" width="300px" alt="" /> 
                <br/>
                <a href="https://www.improvememory.org/brain-games/memory-games/pattern-memory/" target="_blank"><button className="red ripple mt-5 ml-3">Play a memory game </button></a>
                <a href="https://www.improvememory.org/brain-games/math-games/even-odd-ship/" target="_blank"><button className="red ripple mt-5 ml-3">Play a Puzzle game </button></a>
                <a href="https://www.improvememory.org/brain-games/memory-games/happy-halloween/" target="_blank"><button className="red ripple mt-5 ml-3">Play a Fun game </button></a>
               
            </div>
        )
    }
}


export default Playgame;