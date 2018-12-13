import React, { Component } from 'react';
import Navigation from './Navigation';
import './app.css';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        {/* need divs when using multiple components */}
        <div> 
            <Navigation/>
            <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/presence" component={info} /> */}
            </div>
            {/* <Home /> */}
        </div>
      </Router>
    );
  }
}
document.body.style = 'background: white;';
export default App;