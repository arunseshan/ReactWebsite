import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './componenets/Home';
import About from './componenets/About';
import News from './componenets/News';
import Navbar from './componenets/CustomNavbar';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
