import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class ContactForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="name" placeholder="full name" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
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
          <Label for="exampleText">What Type of System Are You Seeking?</Label>
          <Input type="textarea" name="text" id="exampleText" />
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
            <Label check>
              <Input type="radio" name="radio1" />{' '}
                  Phone
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
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
        <Button>Submit</Button>
      </Form>

    );
  }
}