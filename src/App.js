import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
