import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, Card, CardBody } from 'reactstrap';
import normal from './assets/normal.svg';
import angry from './assets/angry.svg';
import loved from './assets/loved.svg';
import sad from './assets/moderatesad.svg';
import veryHappy from './assets/veryHappy.svg';
import worried from './assets/worried.svg';
import './moodtracker.css';

// timestamp: Date.now()

class Mood extends Component {
constructor(props){
    super(props);
    this.state = {
        isModalOpen: false,
        mood: "",
        typedMood: ""
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.changeMood = this.changeMood.bind(this);
    this.changeTypedMood = this.changeTypedMood.bind(this);

}  

toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}

changeMood(e){
    e.preventDefault();
    console.log(e.currentTarget.value);
    this.setState({
        mood: e.currentTarget.value
    });
    this.toggleModal();

}
changeTypedMood(e){
    this.setState({
        [e.target.name]: e.target.value
    });
    console.log(this.state.typedMood)
}

    render() {
        const str = new Date();
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal} >
                    <ModalHeader>Hey there!</ModalHeader>
                    <ModalBody>
                        <p>You have been feeling {this.state.mood} </p> 
                        <p>Sit back, relax and Keep smiling!</p>     
                    </ModalBody>
                </Modal>  
                <div className = "container">
                <h1 className = "mt-5"> How are you feeling today ?</h1> 
                    <p>{str.toString()}</p>              
                        <div className = "row">
                        <div className="col-12 col-md-2 mt-5"  >     <button value="normal" onClick = {this.changeMood}><img src={normal} alt="normal" className="emoji" height="150px" /></button></div>
                        <div className="col-12 col-md-2 mt-5" >     <button value="angry" onClick = {this.changeMood}><img src={angry} alt="angry" height="150px" /></button></div>
                        <div className="col-12 col-md-2 mt-5" >     <button value="very happy" onClick = {this.changeMood}><img src={veryHappy} alt="veryHappy" height="150px"/></button></div>
                        <div className="col-12 col-md-2 mt-5" >     <button value="sad" onClick = {this.changeMood}><img src={sad} alt="sad" height="150px" /></button></div>
                        <div className="col-12 col-md-2 mt-5">     <button value="loved" onClick = {this.changeMood}><img src={loved} alt="loved" height="150px"  /></button></div>
                        <div className="col-12 col-md-2 mt-5">     <button value="worried" onClick={this.changeMood}><img src={worried} alt="worried" height="150px" /></button></div>
                        </div>
                        <div>
                            <h2 className = "mt-5">Or</h2>
                        </div> 
                        <div>
                            <form>
                                <Card className = "mb-5">
                                <CardBody>
                                    <input className="thoughts" type="text" onChange={this.changeTypedMood}  name= "typedMood" placeholder = "Write your thoughts.. "  /> <br />
                                    <button className="note ripple mt-3" >Note it!</button>
                                </CardBody>
                            </Card>
                            </form>
                        </div>
                    </div>
            </div>
        );
    }

}

export default Mood;