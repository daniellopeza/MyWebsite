import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';


export default class ContactForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      systemType: '',
      contactMethod: '',
    }

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onRadioBtnClick(rSelected) {

    this.setState({ rSelected });
    console.log("Param rSelected = ", rSelected);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    // console.log("STATE = ", this.state)
  }

  // removed extension @builtin TypeScript and JavaScript Language Features
  // to use async with JS file
  async handleSubmit(event){
    console.log("submitting form...");
    event.preventDefault(); // prevents refresh after submittion

    const {name, email, systemType, rSelected} = this.state;

    console.log("STATE= ", this.state)
    const form = await axios.post('/api/form', {
        name, // == name: name;
        email,
        systemType,
        rSelected,
    })
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <FormGroup >
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="name" placeholder="full name" onChange={this.handleChange}/>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="exampleEmail" onChange={this.handleChange}/>
        </FormGroup>

        {/* <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup> */}

        {/* <FormGroup>
          <Label for="contactMethod">Preferred Method of Contact</Label>
          <Input type="select" name="select" id="exampleContactMethod">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
        {/* <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
        
        <FormGroup>
          <Label for="systemType">What Type of System Are You Seeking?</Label>
          <Input type="textarea" name="systemType" id="systemType" onChange={this.handleChange}/>
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup> */}
        <FormGroup tag="fieldset" row>
            <legend>Preffered Method of Contact</legend>

            <FormGroup check>
              <Label check for="phoneContact" onClick={() => this.onRadioBtnClick(1)} >
                <Input type="radio" name="radio1" />{' '}
                    Phone
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check for="emailContact" onClick={() => this.onRadioBtnClick(2)}>
                <Input type="radio" name="radio1" />{' '}
                    Email
              </Label>

            </FormGroup>

        </FormGroup>

        <Button type="submit" >Submit</Button>
      </form>

    );
  }
}
