import React from 'react';
import ContactForm from './ContactForm';
import './contactForm.css';
import './app.css';
import { Alert } from 'reactstrap';
import './Home.css';

export default class Services extends React.Component {
  render() {
    const style = { display: 'flex', justifyContent: 'center', alignItems: 'center'}
    return (
        <div >
            <p class="bannerImage" style={style}>
            <img  src={require("./potential-banner-1.png")} alt="Hello" width={"90%"} /> 
            </p>

            <div className="colorfulAlert"> 
                <Alert color="secondary">
                    <center>
                        <strong> Consultation </strong>
                        <br></br>
                        <br></br>
                        Are you a large organization? Small? With me your size never matters. I analyze your data and offer business insights and recommendations key to surving in todays digital market, and for years to come.
                    </center>
                </Alert>
            </div> 

            <div className="colorfulAlert"> 
                <Alert color="secondary">
                    <center>
                        <strong> Software </strong>
                        <br></br>
                        <br></br>
                    Need a website? Mobile application? It's difficult gaining awareness and credibility without a web presence now-a-days.
                    I'll sit down with you and talk about your needs, and your businesses. And then build you a system that best suits your needs. 
                    </center>
                </Alert>
            </div> 


        </div>
    );
  }
}