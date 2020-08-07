import React, { Component } from 'react';
import image from './assets/Fun.svg'
class Tasks extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="top mt-3">Challenge yourself, set up Tasks</h2>

                <img src={image} className="mt-3" width="320px" alt="" />
                <br />
                <div className="containeritem">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md">
                                <section className='add-item'>
                                    <form >
                                        <input className="inputitem" type="text" name="title" placeholder="Add a task"  />
                                        <input className="inputitem" type="text" name="description" placeholder="Add the description" />
                                        <button className="formbutton">Add task</button>
                                    </form>
                                </section>
                            </div>

                            <section className='display-item'>
                                <div className='wrapper'>

                                    <ul className="myitems">
                                
                                    </ul>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default Tasks;