import React from 'react';
import MobileStatsTable from './MobileStatsTable';
import { Alert } from 'reactstrap';
import './Home.css';

export default class Home extends React.Component {
  render() {
    const style = { display: 'flex', justifyContent: 'center', alignItems: 'center'}

    return (
        <div>
            <p class="bannerImage" style={style}>
            <img  src={require("./potential-banner-1.png")} alt="Hello" width={"90%"} /> 
            </p>
            {/* <p class="bannerImage" style={style}>
                <img  src={require("./potential-banner-1.png")} alt="Hello" width={"90%"} /> 
            </p> */}
            <div className="colorfulAlert"> 
                <Alert color="primary">
                    <center>
                        <strong> Help Me, Help You </strong>
                        <br></br>
                        <br></br>
                        I will work with you until you are 100% satisfied with your web presence! 
                    </center>
                </Alert>
            </div> 
            <MobileStatsTable />

            <p class="bannerImage" style={style}>
                <img  src={require("./mobile-usage-statistics.jpg")} alt="Hello" width={"90%"} /> 
            </p>

            <center>
            <p> 
            <strong>
                100% Satisfaction Guaranteed! 
            </strong>
            <br></br>
                -Daniel Lopez 
                <i> (CEO/Engineer)</i>
            </p>
            </center>
            <div class="contactForm">
            </div> 
        </div>
    );
  }
}