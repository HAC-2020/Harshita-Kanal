import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/HeaderComponents';
import Mood from './Components/MoodTracker';
import CoverPage from './Components/CoverPage';
import Journal from './Components/Journal';
import Tasks from './Components/Tasks';
import Playgame from './Components/Playgame';
import Discuss from './Components/Discuss';
import Inspire from './Components/Inspire';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js'

//project-796825366904

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    user: null
  }
  this.login = this.login.bind(this);
  this.logout = this.logout.bind(this);
}

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }


  render() {
    return (
      <div className="App">
        <Header login={this.login} logout={this.logout} user={this.state.user}/>
        <BrowserRouter>
          <Switch>
            <Route
              path="/Mood"
              // component={Mood}
              component={() => <Mood login={this.login} logout={this.logout} user={this.state.user} />}
            />
            <Route
              path="/Journal"
              // component={Journal}
              component={() => <Journal login={this.login} logout={this.logout} user={this.state.user} />}
            />
            <Route
              path="/Tasks"
              // component={Tasks}
              component={() => <Tasks login={this.login} logout={this.logout} user={this.state.user} />}
            />
            <Route
              path="/Games"
              component={Playgame}
            />
            <Route
              path="/discussions"
              // component={Discuss}
              component={() => <Discuss login={this.login} logout={this.logout} user={this.state.user} />}
            />
            <Route
              path="/Inspire"
              component={Inspire}
            />
            <Route
              path=""
              component={CoverPage}
            />
          </Switch>
        </BrowserRouter>
        {/* <Mood /> */}
      </div>
    );
  }

}

export default App;
