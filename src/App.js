import React, { Component } from 'react';
import Navigation from './Navigation';
import './app.css';
import Home from './Home';
import Contact from './Contact';


class App extends Component {

  render() {
    return (
      // need divs when using multiple components
      <div> 
          <Navigation/>
          <Home />
      </div>
    );
  }
}
document.body.style = 'background: white;';
export default App;