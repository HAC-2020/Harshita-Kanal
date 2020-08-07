import React, {Component} from 'react';
import normal from './assets/normal.svg';
import angry from './assets/angry.svg';
import loved from './assets/loved.svg';
import sad from './assets/moderatesad.svg';
import veryHappy from './assets/veryHappy.svg';
import worried from './assets/worried.svg';
import './moodtracker.css';

// timestamp: Date.now()

class Mood extends Component {
  
    render() {
        const str = new Date();
        return (
            <div>
                <div className = "container">
                <h1 className = "mt-5"> How are you feeling today ?</h1> 
                    <p>{str.toString()}</p>              
                        <div className = "row">
                            <div className="col-12 col-md-2 mt-5" >     <button><img src={normal} alt="normal" className = "emoji" height="150px" /></button></div>
                            <div className="col-12 col-md-2 mt-5"  >     <button><img src={angry} alt="angry"  height="150px" /></button></div>
                            <div className="col-12 col-md-2 mt-5" >     <button><img src={veryHappy} alt="veryHappy" height="150px" /></button></div>
                            <div className="col-12 col-md-2 mt-5" >     <button><img src={sad} alt="sad" height="150px" /></button></div>
                            <div className="col-12 col-md-2 mt-5" >     <button><img src={loved} alt="loved"  height="150px" /></button></div>
                            <div className="col-12 col-md-2 mt-5">     <button><img src={worried} alt="worried" height="150px" /></button></div>
                        </div>
                        <div>
                            <h2 className = "mt-5">Or</h2>
                        </div> 
                        <div>
                            <form>
                                <input  className="thoughts" type="text" name="thoughts" placeholder = "Write your thoughts.."  />
                            </form>
                        </div>
                    </div>
            </div>
        );
    }

}

export default Mood;