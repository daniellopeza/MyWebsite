import React, { Component } from 'react';
import Navigation from './Navigation';

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

export default App;