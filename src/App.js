import React, { Component } from 'react';
import Navigation from './Navigation';
import './app.css';

class App extends Component {

  render() {
    const style = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10px;'}

    return (
      // need divs when using multiple components
      <div> 
          <Navigation/>
          <p class="bannerImage" style={style}>
              <img  src={require("./mobile-usage-statistics.jpg")} alt="Hello" width={"90%"} /> 
          </p>
      </div>
    );
  }
}
document.body.style = 'background: grey;';
export default App;