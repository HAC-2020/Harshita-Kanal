import React, { Component } from 'react';
import './Journal.css'
class Journal extends Component {


    render() {
        return (
            <div className="container">
                <h1 className="top mt-3">What do you want to remember ?</h1>
                <div>

                    <div className="containeritem">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md">
                                    <section className='add-item'>
                                        <form>
                                            <input className="inputitem" type="text" name="title" placeholder="What's the title?"/>
                                            <input className="inputitem" type="text" name="itembody" placeholder="What to remember?"  />
                                            <input className="inputitem" type="text" name="tag" placeholder="Set a Tag" />
                                            <button className="formbutton">Add Item</button>
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
            </div>
        )
    }
}


export default Journal;