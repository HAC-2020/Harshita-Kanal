import React, { Component } from 'react';
import meditate from './assets/Fun.svg'
class Discuss extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="top mt-3">Talk out, loud!</h1>
                <img src={meditate} width="300px" height="300px" alt="" />
                <div className="container" >
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <section className='add-item'>
                                <form >
                                    <input className="inputitem" type="text" name="thought" placeholder="Say it here.." />
                                    <input className="inputitem" type="text" name="comment" placeholder="Add a comment"  />
                                    <input className="inputitem" type="text" name="username" placeholder="What's your name?"  />
                                        <button className="formbutton">Add it</button>       
                                </form>  
                            </section>
                        </div>
                        <div className="col-12 col-md">
                            <ul className="myitems">
                              
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}


export default Discuss;