import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log("submitting form...");
    // event.preventDefault();
    const data = new FormData(event.target);
    console.log(event);
    console.log(data.get('name'));
    console.log(data.get('email'));  
    // alert(JSON.stringify(event))
    alert("Name: " + data.get('name') + "\nEmail: " + data.get('email') + 
          "\nSystem Type: " + data.get('systemType') + 
          "\nContact Method: " + data.get('radio1') + 
          "\nContact Method: " + data.get('radio2'));
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <FormGroup >
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="name" placeholder="full name" />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="exampleEmail"/>
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
          <Input type="textarea" name="systemType" id="systemType" />
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup> */}
        <FormGroup tag="fieldset">
            <legend>Preffered Method of Contact</legend>
            <FormGroup check>
              <Label check for="phoneContact">
                <Input type="radio" name="radio1" />{' '}
                    Phone
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check for="emailContact">
                <Input type="radio" name="radio2" />{' '}
                    Email
              </Label>
            </FormGroup>
            {/* <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio1" disabled />{' '}
                Option three is disabled
              </Label>
            </FormGroup> */}
        </FormGroup>
        {/* <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup> */}
        <Button type="submit" >Submit</Button>
      </form>

    );
  }
}
