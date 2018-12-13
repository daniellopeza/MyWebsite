import React from 'react';
import ContactForm from './ContactForm';
import './contactForm.css';
import './app.css';

export default class Contact extends React.Component {
  render() {
    const style = { display: 'flex', justifyContent: 'center', alignItems: 'center'}
    return (
        <div >
            <p class="bannerImage" style={style}>
            <img  src={require("./potential-banner-1.png")} alt="Hello" width={"90%"} /> 
            </p>
            <div class="contactForm">
            <ContactForm/>
            </div>
        </div>
    );
  }
}