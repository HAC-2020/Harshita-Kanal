import React, { Component } from 'react';
import meditate from './assets/Fun.svg'
import firebase, { auth, provider } from '../firebase.js';
import './Discuss.css';

class Discuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: '',
            comment: '',
            username: '',
            items: [],
            // user: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.login = this.login.bind(this); 
        // this.logout = this.logout.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }



    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('stories');
        const item = {
            storytitle: this.state.story,
            commentbody: this.state.comment,
            name: this.state.username,
            user: this.props.user.displayName || this.props.user.email

        }
        itemsRef.push(item);
        this.setState({
            story: '',
            comment: '',
            username: ''
        });
    }

    componentDidMount() {
        // auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         this.setState({ user });
        //     }
        // });
        const itemsRef = firebase.database().ref('stories');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    storytitle: items[item].storytitle,
                    commentbody: items[item].commentbody,
                    name: items[item].name,
                    user: items[item].user
                });
            }
            this.setState({
                items: newState
            });
        });
    }


    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/stories/${itemId}`);
        itemRef.remove();
    }









    render() {
        return (
            <div className="container">
                {this.props.user ?
                    <div className='user-profile'>
                        <img src={this.props.user.photoURL} />
                    </div>
                    :
                    <div></div>
                }
                <h1 className="top mt-3">Talk out, loud!</h1>
                <img src={meditate} width="300px" height="300px" alt="" />
                <div className="container" >
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <section className='add-item'>
                                <form onSubmit = {this.handleSubmit} >
                                    <input className="inputitem" type="text" name="story" placeholder="Say it here.." onChange={this.handleChange} value={this.state.story} />
                                    <input className="inputitem" type="text" name="comment" placeholder="Add a comment" onChange={this.handleChange} value={this.state.comment} />
                                    <input className="inputitem" type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.props.user ? this.props.user.displayName || this.props.user.email : this.state.username}  />
                                        {/* <button className="formbutton">Add it</button> */}
                                    {this.props.user ?
                                        <button className="addit">Add Story</button>
                                        :
                                        <div></div>
                                    }              
                                </form>  
                                {
                                    this.props.user ?
                                        <table><button onClick={this.props.logout} className="login">Logout</button></table>
                                        :
                                        <table><button onClick={this.props.login} className="login">Login to discuss</button></table>
                                }
                            </section>
                        </div>
                        <div className="col-12 col-md">
                            <ul className="myitems">
                                {this.state.items.map((item) => {
                                    return (
                                        <li className="myitem" key={item.id}>
                                            <h3>{item.storytitle}</h3>
                                            <p>{item.commentbody}</p>
                                            <p><span id="tag">{item.user}</span> 
                                            <br/>
                                                {this.props.user ?
                                                    item.user === this.props.user.displayName || item.user === this.props.user.email ?
                                                        <button className="circle mt-3" onClick={() => this.removeItem(item.id)}>Remove Item</button> : null
                                                    :
                                                    <div></div>

                                                }
                                            </p>
                                        </li>
                                    )
                                })}
                              
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}


export default Discuss;