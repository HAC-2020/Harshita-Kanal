import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, Card, CardBody } from 'reactstrap';
import normal from './assets/normal.svg';
import angry from './assets/angry.svg';
import loved from './assets/loved.svg';
import sad from './assets/moderatesad.svg';
import veryHappy from './assets/veryHappy.svg';
import worried from './assets/worried.svg';
import './moodtracker.css';
import firebase from '../firebase.js'

// timestamp: Date.now()

class Mood extends Component {
constructor(props){
    super(props);
    this.state = {
        isModalOpen: false,
        mood: "",
        typedMood: "",
        date: "",
        time: "",
        items: []
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.changeMood = this.changeMood.bind(this);
    this.changeTypedMood = this.changeTypedMood.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    var d = new Date();
    var month = d.getMonth() + 1 ;
    var day = d.getDate() ;
    var year = d.getFullYear() ;
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var time = h + ":" + m + ":" + s;
    var date = day + '/'+ month + '/' + year
    console.log(date);
    console.log(time);
    this.setState({
        [e.target.name]: e.target.value,
        date: date,
        time: time
    });
    console.log(this.state.typedMood)
}

handleSubmit(e){
    e.preventDefault();
    const itemsRef = firebase.database().ref('mood');
    const item = {
        typedMood: this.state.typedMood,
        date: this.state.date,
        time: this.state.time,
        user: this.props.user ? this.props.user.displayName || this.props.user.email : ''

    }
    itemsRef.push(item);
    this.setState({
        typedMood: '',
        date: '',
        time: '', 
      
    });
    
}

    componentDidMount() {
        const itemsRef = firebase.database().ref('mood');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    typedMood: items[item].typedMood,
                    date: items[item].date,
                    time: items[item].time,
                    user: items[item].user
                });
            }
            this.setState({
                items: newState
            });
        });
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
                           
                                <Card className = "mb-5">
                                <CardBody>
                                    <form onSubmit = {this.handleSubmit}>
                                    <input className="thoughts" type="text" onChange={this.changeTypedMood}  name= "typedMood" placeholder = "Write your thoughts.. "  /> <br />
                                    {/* <button className="note ripple mt-3"  >Note it!</button> */}
                                    {
                                        this.props.user ?
                                            <button className="note ripple mt-3">Add task</button> :
                                            <h3 className="warning mt-3">Login to add</h3>
                                    }
                                    </form>
                                </CardBody>
                            </Card>
                            <h3 className = "mb-3">Take note of your emotions!</h3>
                            <Card className = "mb-3">
                                <CardBody>
                                <div className='wrapper'>

                                    <ul className="myitems">
                                        {this.state.items.map((item) => {
                                            if (this.props.user)
                                                if (item.user === this.props.user.displayName || item.user === this.props.user.email)
                                            return (
                                                <li className="myitem" key={item.id}>
                                                    <h3>{item.typedMood}</h3>
                                                    <p>when: {item.date}</p>
                                                    <p>at: <span id="tag">{item.time}</span>       
                                                    </p>
                                                </li>
                                            )
                                            else

                                             return (
                                            <div key={item.id}></div>
                                                )
                                        })}
                                    </ul>

                                </div>
                                </CardBody>
                            </Card>

                           
                        </div>
                    </div>
            </div>
        );
    }

}

export default Mood;