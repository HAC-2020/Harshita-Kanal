import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/HeaderComponents';
import Mood from './Components/MoodTracker'
import CoverPage from './Components/CoverPage'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route
              path="/Mood"
              component={Mood}
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
