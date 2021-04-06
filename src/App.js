import React, { Component } from 'react';

import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
