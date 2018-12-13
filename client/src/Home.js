import React from 'react';

export default class Home extends React.Component {
  render() {
    const style = { display: 'flex', justifyContent: 'center', alignItems: 'center'}

    return (
        <div>
            <p class="bannerImage" style={style}>
            <img  src={require("./mainpage_banner2.jpg")} alt="Hello" width={"90%"} /> 
            </p>
            {/* <p class="bannerImage" style={style}>
                <img  src={require("./potential-banner-1.png")} alt="Hello" width={"90%"} /> 
            </p> */}
            <p class="bannerImage" style={style}>
                <img  src={require("./mobile-usage-statistics.jpg")} alt="Hello" width={"90%"} /> 
            </p>

            <center>
            <p> 
            <strong>
                Worldwide, more people own a cell phone than a toothbrush.
            </strong>
            <br></br>
                -Consumer Technology Association, 2015
            </p>
            </center>
            <div class="contactForm">
            </div> 
        </div>
    );
  }
}